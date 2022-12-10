const express = require("express");
const cors = require("cors");

const routes = require("./routes");
const localCongig = require("./config");

const app = express();

app.use(
  cors({
    origin: localCongig,
  })
);

app.use(express.urlencoded({ extended: true }));

app.use("/todos", routes);

module.exports = app;
