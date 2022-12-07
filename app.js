const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const TodoRoute = require("./routes/todo");

const { URL, PORT } = require("./config");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose
  .set("strictQuery", true)
  .connect(URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Databse Connected Successfully!!");
  })
  .catch((err) => {
    console.log("Could not connect to the database", err);
    process.exit();
  });

app.use("/todo", (req, res) => {
  console.log(1);
  TodoRoute;
});

app.get("/", (req, res) => {
  res.json({ message: "Hello Crud Node Express" });
});

app.listen(PORT || 8001, () => {
  console.log(`Listening to http://localhost:${PORT || 8001}`);
});
