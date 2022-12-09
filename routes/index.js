const express = require("express");

const todosRouter = require("./todosRouter");

const router = express.Router();

router.use("/", todosRouter);

module.exports = router;
