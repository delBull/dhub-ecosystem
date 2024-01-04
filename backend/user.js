const { con } = require("../db.config");
const { getReqData } = require("./constant");

const AddUserInDB = (
  { userID, referalID, stripeID, metamaskID },
  resolve,
  reject
) => {
  var sql = `INSERT INTO users (userID, referalID, stripeID, metamaskID) VALUES ('${userID}', '${referalID}', '${
    stripeID || ""
  }', '${metamaskID || ""}')`;
  con.query(sql, function (err, result) {
    if (err) return reject(err.message);
    console.log("1 record inserted");
    resolve(result);
  });
};
const GetAllUserFromDB = (resolve, reject) => {
  var sql = `Select * FROM users`;
  con.query(sql, function (err, result) {
    if (err) return reject(err.message);
    console.log("1 record inserted");
    resolve(result);
  });
};
const UpdateUserInDB = (
  { userID, stripeID, },
  resolve,
  reject
) => {
  var sql = `UPDATE users SET stripeID='${stripeID}' WHERE userID='${userID}';`;
  con.query(sql, function (err, result) {
    if (err) return reject(err.message);
    console.log("1 record inserted");
    resolve(result);
  });
};
const GetUserWithUserIDFromDB = ({ userID }, resolve, reject) => {
  var sql = `Select * FROM users WHERE userID = '${userID}'`;
  con.query(sql, function (err, result) {
    if (err) return reject(err.message);
    console.log("1 record inserted");
    resolve(result);
  });
};
const GetUserWithMetaMaskIDFromDB = ({ metamaskID }, resolve, reject) => {
  var sql = `Select * FROM users WHERE metamaskID = '${metamaskID}'`;
  con.query(sql, function (err, result) {
    if (err) return reject(err.message);
    console.log("1 record inserted");
    resolve(result);
  });
};
const GetUserWithStripeIDFromDB = ({ userID }, resolve, reject) => {
  var sql = `Select * FROM users WHERE stripeID = '${userID}'`;
  con.query(sql, function (err, result) {
    if (err) return reject(err.message);
    console.log("1 record inserted");
    resolve(result);
  });
};
const GetUserWithReferalIDFromDB = ({ userID }, resolve, reject) => {
  var sql = `Select * FROM users WHERE referalID = '${userID}'`;
  con.query(sql, function (err, result) {
    if (err) return reject(err.message);
    console.log("1 record inserted");
    resolve(result);
  });
};
const GetuserDataFromRequest = async (req, res) => {
  let data = await getReqData(req);
  AddUserInDB(
    JSON.parse(data),
    async (result) => {
      res.write("User Added Successfully");
      res.end();
    },
    (err) => {
      // console.log(err);
      let duplicate = err.match("Duplicate");
      if (duplicate !== null) {
        console.log("duplicate");
        GetDataWithUserID(req, res, data);
      }
      // res.end();
    }
  );
};
const GetAllUsersData = async (req, res) => {
  let data = await getReqData(req);
  GetAllUserFromDB(
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
const GetDataWithUserID = async (req, res, reqdata) => {
  console.log("kjsdjakjlas", req);
  let data = reqdata ? reqdata : await getReqData(req);
  console.log({ data }, "saldkj;laskjdls");
  GetUserWithUserIDFromDB(
    JSON.parse(data),
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
const GetDataWithReferalID = async (req, res) => {
  let data = await getReqData(req);
  GetUserWithReferalIDFromDB(
    JSON.parse(data),
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
const GetDataWithMetaMaskID = async (req, res) => {
  let data = await getReqData(req);
  GetUserWithMetaMaskIDFromDB(
    JSON.parse(data),
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
  GetuserDataFromRequest,
  GetDataWithUserID,
  GetDataWithReferalID,
  AddUserInDB,
  GetAllUsersData,
  GetUserWithStripeIDFromDB,
  GetDataWithMetaMaskID,
  GetUserWithMetaMaskIDFromDB,
  UpdateUserInDB
};
