const Sequelize = require("sequelize");
const AppError = require("../utils/CustomError");
const logger = require("../utils/logger");

const { sqzError } = require("../utils/errorHandler");

module.exports = (error, req, res, next) => {
  // handle sequelize errors
  if (error instanceof Sequelize.ValidationError) {
    res.status(500).send(...sqzError(error));
  }

  // handle custom errors from controller
  if (error instanceof AppError && error.name === "AppError") {
    const errorApp = JSON.parse(error.message);
    logger.error(":::::::::::::::::::::AppError:", error);
    res.status(errorApp.code).send({ error_message: errorApp.message });
  }

  if (error instanceof Error && error.name !== "AppError") {
    logger.error("::::::::::UNCAUGHT_APP_ERROR", error);
    res.status(500).send("Semething went wrong");
  }
};
