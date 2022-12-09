const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use("/todos", routes);

module.exports = app;
