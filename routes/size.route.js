const express = require("express");
const sizeController = require("../controllers/size.controller");
const sizeRouter = express.Router();

sizeRouter.post("/", sizeController.createSize);
sizeRouter.get("/", sizeController.findAllSize);
sizeRouter.get("/:id", sizeController.findSizeById);
sizeRouter.put("/:id", sizeController.updateSize);
sizeRouter.delete("/:id", sizeController.deleteSizeById);

module.exports = sizeRouter;
