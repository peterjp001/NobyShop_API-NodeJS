const express = require("express");
const studentController = require("../controllers/student.controller");
const studentRouter = express.Router();

studentRouter.get("/", studentController.createStudent);

studentRouter.post("/", studentController.findAllStudent);

module.exports = studentRouter;
