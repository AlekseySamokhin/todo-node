const express = require("express");
const router = express.Router();
const TodoModel = require("../models/Todos");

router.get("/", async (req, res) => {
  console.log("get todos");
  try {
    const todolist = await TodoModel.find({});

    res.json(todolist);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
