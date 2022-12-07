const todoModel = require("../models/todos");

// Create todo
exports.create = async (req, res) => {
  if (!req.body.title) {
    res.status(400).send({ message: "Title can't be empty!" });
  }

  const todo = new todoModel({
    title: req.body.title,
  });

  await todo
    .save()
    .then((data) => {
      res.send({
        todo: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating todo",
      });
    });
};
