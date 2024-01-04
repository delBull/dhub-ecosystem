const { con } = require("../db.config");
const { getReqData } = require("./constant");

const AddTranferPaymentInDB = (
  { stripePaymentID, stripeCustomerID },
  resolve,
  reject
) => {
  var sql = `INSERT INTO transferedPayments (stripePaymentID, stripeCustomerID) VALUES ('${stripePaymentID}', '${stripeCustomerID}')`;
  con.query(sql, function (err, result) {
    if (err) return reject(err.message);
    console.log("1 record inserted");
    resolve(result);
  });
};
const GetTranferPaymentFromDB = ({ userID }, resolve, reject) => {
  var sql = `Select * FROM transferedPayments`;
  con.query(sql, function (err, result) {
    if (err) return reject(err.message);
    console.log("1 record inserted");
    resolve(result);
  });
};
const AddTranferPayment = async (req, res) => {
  let data = await getReqData(req);
  let stripePaymentID = JSON.parse(data).stripePaymentID;
  let stripeCustomerID = JSON.parse(data).stripeCustomerID;
  if (stripePaymentID && stripeCustomerID) {
    AddTranferPaymentInDB(
      { stripePaymentID, stripeCustomerID },
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
const GetTranferPayment = async (req, res, reqdata) => {
  let data = reqdata ? reqdata : await getReqData(req);
  GetTranferPaymentFromDB(
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
  AddTranferPayment,
  GetTranferPayment,
};
