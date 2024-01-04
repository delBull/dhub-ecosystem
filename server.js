const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const db = require("./db.config");
const { createAndSendEmail, getReqData } = require("./backend/constant");
const { routes } = require("./backend");
const { AddEmailsInDB } = db;
const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 8000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();
app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;
      console.log(req.method,"methof");
      if (req.method === "POST") {
        routes(pathname, req, res);
      } else {
        if (pathname === "/a") {
          await app.render(req, res, "/", query);
        } else if (pathname === "/b") {
          await app.render(req, res, "/", query);
        } else if(req.method === "GET"){
      console.log("req.method");
          await handle(req, res, parsedUrl);
        }
      }
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("internal server error");
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});