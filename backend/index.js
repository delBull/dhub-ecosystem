const {
  paymentWithCard,
  CreateUserWithStripe,
  CreateUserPaymentMethod,
  GetUserAllPaymentMethods,
  GetAllbalance,
  GetAllStripePayments,
  GetAllCustomers,
  GetAllPayments,
  getAllbalanceTransactions,
  SendEmailAPT,
} = require("./payment");
const { GetCheckStripePayment, AddCheckStripePayment, GetAllCheckStripePayment } = require("./checkStripeToken");
const { sendEmail, GetAllEmails, unsubscribeEmail } = require("./subscription");
const { AddTranferPayment, GetTranferPayment } = require("./transferTokens");
const {
  GetuserDataFromRequest,
  GetDataWithUserID,
  GetDataWithReferalID,
  GetAllUsersData,
  GetDataWithMetaMaskID,
  GetUserWithMetaMaskIDFromDB,
} = require("./user");

const routes = (pathname, req, res) => {
  if (pathname === "/emailSubscribe") {
    sendEmail(req, res);
  } else if (pathname === "/createUser") {
    GetuserDataFromRequest(req, res);
  } else if (pathname === "/createUserWithStripe") {
    CreateUserWithStripe(req, res);
  } else if (pathname === "/createPaymentMethod") {
    CreateUserPaymentMethod(req, res);
  } else if (pathname === "/getUserAllPaymentMethods") {
    GetUserAllPaymentMethods(req, res);
  } else if (pathname === "/getUser") {
    GetDataWithUserID(req, res);
  } else if (pathname === "/getUserReferals") {
    GetDataWithReferalID(req, res);
  } else if (pathname === "/paymentWithCard") {
    paymentWithCard(req, res);
  } else if (pathname === "/getAllBalance") {
    GetAllbalance(req, res);
  } else if (pathname === "/getAllStripePayments") {
    GetAllStripePayments(req, res);
  } else if (pathname === "/getAllCustomers") {
    GetAllCustomers(req, res);
  } else if (pathname === "/getAllPayments") {
    GetAllPayments(req, res);
  } else if (pathname === "/getAllbalanceTransactions") {
    getAllbalanceTransactions(req, res);
  } else if (pathname === "/AddTranferPayment") {
    AddTranferPayment(req, res);
  } else if (pathname === "/GetTranferPayment") {
    GetTranferPayment(req, res);
  } else if (pathname === "/getAllemailSubscribe") {
    GetAllEmails(req, res);
  } else if (pathname === "/getAllUsers") {
    GetAllUsersData(req, res);
  } else if (pathname === "/SendEmailAPT") {
    SendEmailAPT(req, res);
  }else if (pathname === "/GetDataWithMetaMaskID") {
    GetDataWithMetaMaskID(req, res);
  }else if (pathname === "/unsubscribeEmail") {
    unsubscribeEmail(req, res);
  }else if (pathname === "/AddcheckStripePayment") {
    AddCheckStripePayment(req, res);
  } else if (pathname === "/GetcheckStripePayment") {
    GetCheckStripePayment(req, res);
  }else if (pathname === "/GetAllCheckStripePayment") {
    GetAllCheckStripePayment(req, res);
  }  else {
    res.statusCode = 400;
    res.end("Route not Found");
  }
};
module.exports = {
  routes,
};
