const express = require("express");
const TodoController = require("../controllers/todo");
const router = express.Router();

router.post("/", TodoController.create);

module.exports = router;
