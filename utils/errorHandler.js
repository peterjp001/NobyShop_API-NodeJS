const constant = require("./constant");
const logger = require("./logger");

// Handle Sequelize error from object
const sequelizeErrorReader = (error, description = "") => {
  const sqzValidationError = [];
  error.errors.forEach((element) => {
    sqzValidationError.push({ [element.path]: element.message });
  });
  return { error: sqzValidationError, description };
};

// Handle Sequelize Errors
const sqzError = (error) => {
  const errorsResponse = [];

  switch (error.name) {
    case "SequelizeValidationError":
      errorsResponse.push(sequelizeErrorReader(error, constant.SQZ_VALIDATION_ERROR_DESCRIPTION));
      logger.error(":::::::::::::::Fields validation constraint error:", error);
      break;

    case "SequelizeUniqueConstraintError":
      errorsResponse.push(sequelizeErrorReader(error, constant.SQZ_UNIQUE_CONSTRAINT_ERROR));
      logger.error(":::::::::::::::Unique constraint error:", error);
      break;

    case "SequelizeForeignKeyConstraintError":
      // errorsResponse.push(sequelizeErrorReader(error, constant.SQZ_VALIDATION_ERROR_DESCRIPTION));
      logger.error(":::::::::::::::Foreign key constraint error:", error.message);
      break;

    default:
      logger.error("::::::::::::::: Sequelize errors:", error.message);
      break;
  }

  return errorsResponse;
};

// stringify error before sending to express async error
const errorstringify = (message, code = 500) => {
  return JSON.stringify({ message, code });
};

module.exports = { sqzError, errorstringify };
