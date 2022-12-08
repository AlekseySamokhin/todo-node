const express = require("express");
const router = express.Router();
const TodoModel = require("../models/todo");

router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateTitle = req.body;

    if (!updateTitle) {
      throw Error("Update title cannot be empty");
    }

    const updatedTodo = await TodoModel.findByIdAndUpdate(id, updateTitle, {
      new: true,
    });

    res.json(updatedTodo);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
