const express = require("express");
const router = express.Router();
const TodoModel = require("../models/Todos");

router.patch("/:id", async (req, res) => {
  console.log("update");
  try {
    const id = req.params.id;
    const updateTodo = req.body;

    const { title, completed } = updateTodo;

    if (!title) {
      throw Error("Update title cannot be empty");
    }

    const updatedTodo = await TodoModel.findByIdAndUpdate(
      id,
      { title, completed },
      {
        new: true,
      }
    );

    res.json(updatedTodo);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
