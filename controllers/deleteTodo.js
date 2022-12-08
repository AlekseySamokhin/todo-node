const express = require("express");
const router = express.Router();
const TodoModel = require("../models/todo");

router.delete("/:id", async (req, res) => {
  try {
    const _id = req.params.id;

    const deletedTodo = await TodoModel.findByIdAndDelete({
      _id,
    });

    if (!deletedTodo) {
      return res.status(404).json({ message: "Unable to delete" });
    }

    res.json("Delete done");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
