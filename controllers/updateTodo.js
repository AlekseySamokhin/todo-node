const express = require("express");
const router = express.Router();
const TodoModel = require("../models/TodoModel");

router.patch("/:id", async (req, res) => {
  console.log("updateTodo");
  console.log(req.params.id);
  console.log(req.body);

  try {
    if (!req.body.title) {
      throw Error("Empty Title");
    }
    const updatedTodo = await TodoModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: "Empty Title" });
    }

    res.json(updatedTodo);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
