const express = require("express");
const router = express.Router();
const TodoModel = require("../models/TodoModel");

router.delete("/:id", async (req, res) => {
  console.log("deleteTodos");
  try {
    if (!req.params.id) {
      throw Error("How to delete todo without id?");
    }
    const deletedTodo = await TodoModel.findByIdAndDelete({
      _id: req.params.id,
    });

    if (!deletedTodo) {
      return res.status(404).json({ message: "Unable to delete" });
    }

    res.json("delete done");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
