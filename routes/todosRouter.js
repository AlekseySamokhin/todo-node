const express = require("express");

const createTodo = require("../controllers/createTodo");
const getTodos = require("../controllers/getTodos");
const updateTodo = require("../controllers/updateTodo");
const deleteTodo = require("../controllers/deleteTodo");

const todosRouter = express.Router();

todosRouter.post("/", createTodo);
todosRouter.get("/", getTodos);
todosRouter.patch("/:id", updateTodo);
todosRouter.delete("/:id", deleteTodo);

module.exports = todosRouter;
