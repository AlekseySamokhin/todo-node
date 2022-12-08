const express = require("express");
const router = express.Router();
const TodoModel = require("../models/todo");

router.post("/", async (req, res) => {
  try {
    const title = req.body.title;

    if (!title) {
      throw new Error("Title cannot be empty");
    }

    const todo = new TodoModel({
      title,
    });

    const savedTodo = await todo.save();

    res.json(savedTodo);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
