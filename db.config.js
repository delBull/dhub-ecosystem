var mysql = require("mysql");

var con = mysql.createConnection({
//   host: "localhost",
  user: "agodwvaa_root",
  password: "110220@bcd",
  database: "agodwvaa_agodDemoSubscriptions",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
var STRIPE_PUBLIC_KEY = 'pk_test_51Gxx4qLHj2UYwTscORpgaIPB385piWnMJWmNKHDcTLcg7p0bWyMjPwQasph8ydxrdqJt8Z5Fvxz7cjjp0KGxjI7E00Y29ye8pc'
var STRIPE_SECRET_KEY = 'sk_test_51Gxx4qLHj2UYwTscDXyVf7qWyX8eJTjch07QYCpdOGyTRVADE4d0EwfeitNaFTbnK6AACD7PrwkMKeH3bOgYj5Gc00ZpD5Q5QQ'

module.exports = {
  con,
  STRIPE_PUBLIC_KEY,
  STRIPE_SECRET_KEY
};
