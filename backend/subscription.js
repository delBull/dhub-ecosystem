const { con } = require("../db.config");
const { getReqData, createAndSendEmail, EmailHtml } = require("./constant");
const AddEmailsInDB = (email, resolve, reject) => {
  var sql = `INSERT INTO emails (email) VALUES ('${email}')`;
  con.query(sql, function (err, result) {
    if (err) return reject(err.message);
    console.log("1 record inserted");
    resolve(result);
  });
};
const GetAllEmailsInDB = (email, resolve, reject) => {
  var sql = `Select * from emails`;
  con.query(sql, function (err, result) {
    if (err) return reject(err.message);
    console.log("1 record inserted");
    resolve(result);
  });
};
const DeleteEmailInDB = (email, resolve, reject) => {
  var sql = `DELETE FROM emails WHERE email='${email}'`;
  con.query(sql, function (err, result) {
    if (err) return reject(err.message);
    console.log("1 record deleted");
    resolve(result);
  });
};
const unsubscribeEmail = async (req, res) => {
  let data = await getReqData(req);
  let email = JSON.parse(data).email;
  DeleteEmailInDB(
    email,
    async (result) => {
      res.write("Email UnSubscribed Successfully");
      res.end();
    },
    (err) => {
      console.log(err);
      res.statusCode = 500;
      res.write("Something went wrong");
      res.end();
    }
  );
};
const sendEmail = async (req, res) => {
  let data = await getReqData(req);
  let email = JSON.parse(data).email;
  AddEmailsInDB(
    email,
    async (result) => {
      const mailOpts = {
        to: email,
        subject: "Welcome To Agod EcoSystem",
        html: EmailHtml(email),
      };
      let resp = await createAndSendEmail(mailOpts);

      res.writeHead(200, { "Content-Type": "application/json" });
      //set the response
      console.log(result);
      res.write("Email Subscribed Successfully");
      res.end();
    },
    (err) => {
      console.log(err);
      res.statusCode = 500;
      let duplicate = err.match("Duplicate");
      if (duplicate !== null) {
        res.write("Email Already Subscribed");
      }
      console.log(duplicate);
      res.end();
    }
  );
};
const GetAllEmails = async (req, res) => {
  let data = getReqData(req);
  GetAllEmailsInDB(
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
  AddEmailsInDB,
  sendEmail,
  GetAllEmails,
  unsubscribeEmail
};
