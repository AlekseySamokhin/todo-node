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
});

// delete fields __v and rename _id on id
todoSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const Todos = mongoose.model("TodoList", todoSchema);

module.exports = Todos;
