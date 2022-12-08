const express = require("express");

const getTodos = require("../controllers/getTodos");
const createTodo = require("../controllers/createTodo");
const deleteTodo = require("../controllers/deleteTodo");
const updateTodo = require("../controllers/updateTodo");

const todosRouter = express.Router();

todosRouter.get("/", getTodos);
todosRouter.post("/", createTodo);
todosRouter.delete("/:id", deleteTodo);
todosRouter.patch("/:id", updateTodo);

module.exports = todosRouter;
