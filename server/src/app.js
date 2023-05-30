const express = require("express");
const morgan = require("morgan");
const router = require("./routes/index");
const routerMain = require("./routes/index");
require("./db.js");

const app = express();
app.use(morgan("dev"));

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
app.use("/", routerMain);

module.exports = app;
