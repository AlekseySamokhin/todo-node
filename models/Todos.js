const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
}).method("toJSON", function () {
  const { __v, _id, ...other } = this.toObject();

  other.id = _id;

  return other;
});

const Todos = mongoose.model("todos", todoSchema);

module.exports = Todos;
