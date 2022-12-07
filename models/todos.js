const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    requred: true,
  },
  // completed: {
  //   type: Boolean,
  //   default: false,
  // },
});

const Todos = new mongoose.model("Todo", todoSchema);

module.exports = Todos;
