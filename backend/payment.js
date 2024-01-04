const { STRIPE_SECRET_KEY } = require("../db.config");
const {
  getReqData,
  createAndSendEmail,
  pucahsedTokenEmailHtml,
} = require("./constant");
const {
  AddUserInDB,
  GetDataWithUserID,
  GetUserWithStripeIDFromDB,
  GetUserWithMetaMaskIDFromDB,
  UpdateUserInDB,
} = require("./user");
const stripe = require("stripe")(STRIPE_SECRET_KEY);

async function paymentWithCard(req, res) {
  let body = await getReqData(req);
  console.log(body);
  let { paymentMethodId, amount, currency, customerId, totalToken } =
    JSON.parse(body);
  if (paymentMethodId && amount && currency && customerId) {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        payment_method: paymentMethodId,
        amount,
        currency,
        confirm: false,
        customer: customerId,
      });

      stripe.paymentIntents
        .confirm(paymentIntent.id)
        .then((customer) => {
          console.log(customer);
          GetUserWithStripeIDFromDB(
            { userID: customerId },
            async (res1) => {
              console.log(res1[0].userID);
              const mailOpts = {
                to: res1[0].userID,
                subject: "CONGRATULATIONS!",
                html: pucahsedTokenEmailHtml(totalToken,res1[0].userID),
              };
              let resp = await createAndSendEmail(mailOpts);
              res.write(JSON.stringify({ Success: true, data: customer })); // If no error occurs
              res.end();
            },
            (err) => {
              console.log(err);
              res.statusCode = 500;
              res.write("something went worng");
              res.end();
            }
          );
        })
        .catch((e) => {
          console.log(e);
          res.statusCode = 500;
          switch (e.type) {
            case "StripeCardError":
              console.log(`A payment error occurred: ${e.message}`);
              res.write(`A payment error occurred: ${e.message}`); // If some error occurs
              res.end();
              break;
            case "StripeInvalidRequestError":
              console.log("An invalid request occurred.");
              res.write(`An invalid request occurred. ${e.message}`); // If some error occurs
              res.end();
              break;
            default: // If some error occurs
              console.log(
                "Another problem occurred, maybe unrelated to Stripe."
              );
              res.write("Another problem occurred, maybe unrelated to Stripe.");
              res.end();
              break;
          }
        });
    } catch (e) {
      res.statusCode = 500;

      switch (e.type) {
        case "StripeCardError":
          console.log(`A payment error occurred: ${e.message}`);
          res.write(`A payment error occurred: ${e.message}`); // If some error occurs
          res.end();
          break;
        case "StripeInvalidRequestError":
          console.log("An invalid request occurred.");
          res.write(`An invalid request occurred. ${e.message}`); // If some error occurs
          res.end();
          break;
        default: // If some error occurs
          console.log("Another problem occurred, maybe unrelated to Stripe.");
          res.write("Another problem occurred, maybe unrelated to Stripe.");
          res.end();
          break;
      }
      console.log(e);
    }
  } else {
    res.statusCode = 500;
    res.write("All fields in Required"); // If some error occurs
    res.end();
  }
}
const CreateUserWithStripe = async (req, res) => {
  let body = await getReqData(req);
  console.log(body);
  let { email, name } = JSON.parse(body);
  if (email && name) {
    stripe.customers
      .create({
        email: email,
        name: name,
      })
      .then((customer) => {
        AddUserInDB(
          { userID: email, stripeID: customer.id, referalID: "", metamaskID:null },
          async (result) => {
            console.log(customer);
            res.write(JSON.stringify({ Success: true, data: customer })); // If no error occurs
            res.end();
          },
          (err) => {
            console.log(err);
            let duplicate = err.match("Duplicate");
            if (duplicate !== null) {
              // res.write("userID already exits");
              UpdateUserInDB(
                { userID: email, stripeID: customer.id },
                () => {
                  GetDataWithUserID(
                    req,
                    res,
                    JSON.stringify({
                      userID: email,
                      stripeID: customer.id,
                      referalID: "",
                    })
                  );
                },
                (errUpdate) => {
                  console.log(errUpdate);
                }
              );
            }
            console.log(duplicate);
            // res.end();
          }
        );
      })
      .catch((err) => {
        console.log(err);
        res.statusCode = 500;
        res.write("something went wrong"); // If some error occurs
        // If some error occurs
        res.end();
      });
  } else {
    res.statusCode = 500;
    res.write("All fields in Required"); // If some error occurs
    res.end();
  }
};
const CreateUserPaymentMethod = async (req, res) => {
  let body = await getReqData(req);
  console.log(body);
  let { number, exp_month, exp_year, cvc, customerId } = JSON.parse(body);
  if (number && exp_month && exp_year && cvc) {
    try {
      const paymentMethod = await stripe.paymentMethods.create({
        type: "card",
        card: {
          number,
          exp_month,
          exp_year,
          cvc,
        },
      });
      return stripe.paymentMethods
        .attach(paymentMethod.id, {
          customer: customerId,
        })
        .then((response) => {
          console.log(response);
          res.write(JSON.stringify({ Success: true, data: response })); // If no error occurs
          res.end();
        })
        .catch((e) => {
          console.log(e);
          res.statusCode = 500;

          switch (e.type) {
            case "StripeCardError":
              console.log(`A payment error occurred: ${e.message}`);
              res.write(`A payment error occurred: ${e.message}`); // If some error occurs
              res.end();
              break;
            case "StripeInvalidRequestError":
              console.log("An invalid request occurred.");
              res.write(`An invalid request occurred :  ${e.message}`); // If some error occurs
              res.end();
              break;
            default: // If some error occurs
              console.log(
                "Another problem occurred, maybe unrelated to Stripe."
              );
              res.write("Another problem occurred, maybe unrelated to Stripe.");
              res.end();
              break;
          }
          console.log(e.message);
        });
    } catch (e) {
      res.statusCode = 500;
      console.log(e);
      switch (e.type) {
        case "StripeCardError":
          console.log(`A payment error occurred: ${e.message}`);
          res.write(`A payment error occurred: ${e.message}`); // If some error occurs
          res.end();
          break;
        case "StripeInvalidRequestError":
          console.log("An invalid request occurred.");
          res.write(`An invalid request occurred :  ${e.message}`); // If some error occurs
          res.end();
          break;
        default: // If some error occurs
          console.log("Another problem occurred, maybe unrelated to Stripe.");
          res.write("Another problem occurred, maybe unrelated to Stripe.");
          res.end();
          break;
      }
    }
  } else {
    res.statusCode = 500;
    res.write("All fields in Required"); // If some error occurs
    res.end();
  }
};
const GetUserAllPaymentMethods = async (req, res) => {
  let body = await getReqData(req);

  stripe.paymentMethods
    .list({
      customer: body.customerId,
      type: "card",
    })
    .then((customer) => {
      console.log(customer);
      res.write(JSON.stringify({ Success: true, data: customer })); // If no error occurs
      res.end();
    })
    .catch((err) => {
      console.log(err);
      res.statusCode = 500;
      res.write("something went wrong"); // If some error occurs
      // If some error occurs
      res.end();
    });
};
const GetAllbalance = async (req, res) => {
  let body = await getReqData(req);
  stripe.balance.retrieve(function (err, balance) {
    if (err) {
      res.statusCode = 500;
      res.write("something went wrong"); // If some error occurs
      // If some error occurs
      res.end();
    } else {
      console.log(balance);
      res.write(JSON.stringify({ Success: true, data: balance })); // If no error occurs
      res.end();
    }
  });
};
const GetAllStripePayments = async (req, res) => {
  try {
    let body = await getReqData(req);
    const paymentLinks = await stripe.paymentLinks.list({
      limit: 3,
    });
    console.log(paymentLinks);
    res.write(JSON.stringify({ Success: true, data: paymentLinks })); // If no error occurs
    res.end();
  } catch (err) {
    if (err) {
      res.statusCode = 500;
      res.write("something went wrong"); // If some error occurs
      // If some error occurs
      res.end();
    }
  }
};
const GetAllCustomers = async (req, res) => {
  try {
    let body = await getReqData(req);
    let { limit } = JSON.parse(body);
    const customers = await stripe.customers.list({
      limit: limit || 10,
    });

    console.log(customers);
    res.write(JSON.stringify({ Success: true, data: customers })); // If no error occurs
    res.end();
  } catch (err) {
    if (err) {
      res.statusCode = 500;
      res.write("something went wrong"); // If some error occurs
      // If some error occurs
      res.end();
    }
  }
};
const GetAllPayments = async (req, res) => {
  try {
    let body = await getReqData(req);
    let { limit } = JSON.parse(body);
    const paymentIntents = await stripe.paymentIntents.list({
      limit: limit || 10,
    });
    res.write(JSON.stringify({ Success: true, data: paymentIntents })); // If no error occurs
    res.end();
  } catch (err) {
    if (err) {
      res.statusCode = 500;
      console.log(err);
      res.write("something went wrong"); // If some error occurs
      // If some error occurs
      res.end();
    }
  }
};
const getAllbalanceTransactions = async (req, res) => {
  try {
    let body = await getReqData(req);
    let { limit } = JSON.parse(body);
    const balanceTransactions = await stripe.balanceTransactions.list({
      limit: limit || 10,
    });
    res.write(JSON.stringify({ Success: true, data: balanceTransactions })); // If no error occurs
    res.end();
  } catch (err) {
    if (err) {
      res.statusCode = 500;
      console.log(err);
      res.write("something went wrong"); // If some error occurs
      // If some error occurs
      res.end();
    }
  }
};
// Send Email After Purchased Token From Meta Mask
const SendEmailAPT = async (req, res) => {
  let body = await getReqData(req);
  console.log(body);
  let { metamaskID, totalToken } = JSON.parse(body);
  GetUserWithMetaMaskIDFromDB(
    { metamaskID },
    async (res1) => {
      console.log(res1[0].userID);
      const mailOpts = {
        to: res1[0].userID,
        subject: "CONGRATULATIONS!",
        html: pucahsedTokenEmailHtml(totalToken,res1[0].userID),
      };
      let resp = await createAndSendEmail(mailOpts);
      res.write(JSON.stringify({ Success: true, message: "email sent" })); // If no error occurs
      res.end();
    },
    (err) => {
      console.log(err);
      res.statusCode = 500;
      res.write("something went worng");
      res.end();
    }
  );
};
module.exports = {
  paymentWithCard,
  CreateUserPaymentMethod,
  CreateUserWithStripe,
  GetUserAllPaymentMethods,
  GetAllbalance,
  GetAllStripePayments,
  GetAllCustomers,
  GetAllPayments,
  getAllbalanceTransactions,
  SendEmailAPT,
};
