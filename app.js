const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const todoRoutes = require("./routes/todoRoutes");

const { URL, PORT } = require("./config");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .set("strictQuery", true)
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected!");
  })
  .catch((err) => {
    console.error("Don't connect to the database", err);
  });

app.use("/todos", todoRoutes);

app.listen(PORT || 8001, () => {
  console.log(`Listening to http://localhost:${PORT}`);
});
