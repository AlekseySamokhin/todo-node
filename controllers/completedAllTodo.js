const express = require("express");
const router = express.Router();
const TodoModel = require("../models/Todos");

router.patch("/", async (req, res) => {
  console.log("complete all todos");

  try {
    const todolist = await TodoModel.updateMany(
      {},
      { $set: { completed: false } },
      { upsert: true }
    );

    console.log(todolist);

    res.json(todolist);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
