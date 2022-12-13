const { request } = require("express");
const express = require("express");
const router = express.Router();
const TodoModel = require("../models/Todos");

router.patch("/", async (req, res) => {
  try {
    console.log("complete all todos");

    const { isCompletedAll } = req.body;
    
    const todolist = await TodoModel.updateMany(
      {},
      { completed: isCompletedAll },
      { new: true }
    );

    res.json(todolist);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
