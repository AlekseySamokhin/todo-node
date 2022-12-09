const express = require("express");
const router = express.Router();
const TodoModel = require("../models/Todos");

router.delete("/:id", async (req, res) => {
  console.log("delete");
  try {
    const id = req.params.id;

    const deletedTodo = await TodoModel.findByIdAndDelete({
      _id: id,
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
