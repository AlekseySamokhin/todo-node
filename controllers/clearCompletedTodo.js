const express = require("express");
const router = express.Router();
const TodoModel = require("../models/Todos");

router.delete("/", async (req, res) => {
  try {
    console.log("clear completed todo");

    await TodoModel.deleteMany(
      { completed: true },
      { new: true }
    );

    const todolist = await TodoModel.find({});

    res.json(todolist);
  } catch (err) {
    res.status(500).send(err.message);
    process.exit();
  }
});

module.exports = router;
