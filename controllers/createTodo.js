const express = require("express");
const router = express.Router();
const TodoModel = require("../models/TodoModel");

router.post("/", async (req, res) => {
  console.log("createTodos");
  try {
    const todo = new TodoModel({
      title: req.body.title,
    });

    await todo.save();

    res.json(todo);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
