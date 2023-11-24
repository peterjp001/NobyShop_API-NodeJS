const express = require("express");
const colorController = require("../controllers/color.controller");
const colorRouter = express.Router();

colorRouter.post("/", colorController.createColor);
colorRouter.get("/", colorController.findAllColor);
colorRouter.get("/:id", colorController.findColorById);
colorRouter.put("/:id", colorController.updateColor);
colorRouter.delete("/:id", colorController.deleteColorById);

module.exports = colorRouter;
