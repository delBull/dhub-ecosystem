const { con } = require("../db.config");
const { getReqData } = require("./constant");

const AddCheckStripePaymentInDB = (
  { stripePaymentID, stripeCustomerID, stripeDate, amount, currency },
  resolve,
  reject
) => {
  var sql = `INSERT INTO checkStripePayment (dateTime, stripePaymentID, stripeCustomerID, amount, currency, stripeDate) VALUES ('${new Date().getTime()}', '${stripePaymentID}', '${stripeCustomerID}',  '${amount}', '${currency}', '${stripeDate}')`;
  con.query(sql, function (err, result) {
    if (err) return reject(err.message);
    console.log("1 record inserted");
    resolve(result);
  });
};
const GetCheckStripePaymentFromDB = ({ userID }, resolve, reject) => {
  var sql = `Select * FROM checkStripePayment`;
  con.query(sql, function (err, result) {
    if (err) return reject(err.message);
    console.log("1 record inserted");
    resolve(result);
  });
};
const AddCheckStripePayment = async (req, res) => {
  let data = await getReqData(req);
  let stripePaymentID = JSON.parse(data).stripePaymentID;
  let stripeCustomerID = JSON.parse(data).stripeCustomerID;
  let stripeDate = JSON.parse(data).stripeDate;
  let amount = JSON.parse(data).amount;
  let currency = JSON.parse(data).currency;

  if (stripePaymentID && stripeCustomerID && stripeDate && amount && currency) {
    AddCheckStripePaymentInDB(
      { stripePaymentID, stripeCustomerID, stripeDate, amount, currency },
      async (result) => {
        console.log(result);
        res.write("Token Transfered Successfully");
        res.end();
      },
      (err) => {
        console.log(err);
        res.statusCode = 500;
        let duplicate = err.match("Duplicate");
        if (duplicate !== null) {
          res.write("Token Already Transfered");
        }
        console.log(duplicate);
        res.end();
      }
    );
  } else {
    res.statusCode = 500;
    res.write("something went wrong");
    res.end();
  }
};
const GetCheckStripePayment = async (req, res, reqdata) => {
  let data = reqdata ? reqdata : await getReqData(req);
  GetCheckStripePaymentFromDB(
    data,
    (result) => {
      let amount = result.reduce(function (accumulator, currentValue) {
        return accumulator + Number(currentValue.amount);
      }, 0);
      let arr = JSON.stringify({ total: amount });
      res.write(arr);
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
const GetAllCheckStripePayment = async (req, res, reqdata) => {
  let data = reqdata ? reqdata : await getReqData(req);
  GetCheckStripePaymentFromDB(
    data,
    (result) => {
      let arr = JSON.stringify(result);
      res.write(arr);
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
  AddCheckStripePayment,
  GetCheckStripePayment,
  GetAllCheckStripePayment
};
