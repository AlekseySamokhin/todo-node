const express = require("express");
const router = express.Router();
const TodoModel = require("../models/TodoModel");

router.get("/", async (req, res) => {
  console.log("getTodos");
  try {
    const todos = await TodoModel.find({});
    res.json(todos);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
