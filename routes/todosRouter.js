const express = require("express");

const createTodo = require("../controllers/createTodo");
const getTodos = require("../controllers/getTodos");
const updateTodo = require("../controllers/updateTodo");
const deleteTodo = require("../controllers/deleteTodo");

const completedAllTodo = require("../controllers/completedAllTodo");

const clearCompletedTodo = require("../controllers/clearCompletedTodo");

const todosRouter = express.Router();

todosRouter.post("/", createTodo);
todosRouter.get("/", getTodos);
todosRouter.patch("/:id", updateTodo);
todosRouter.delete("/:id", deleteTodo);
todosRouter.patch("/", completedAllTodo);

todosRouter.delete("/", clearCompletedTodo);

module.exports = todosRouter;
