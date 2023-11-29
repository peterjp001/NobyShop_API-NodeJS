module.exports = {
  MSG_REQUIRE_FIELD: (field) => `Please enter the *${field}*`,
  MSG_LENGTH: (name, { min = 0, max = 0 }) => {
    if (min > 0) {
      return `${name} length must be at least ${min} characters`;
    } else if (max > 0) {
      return `${name} length must not be greater than ${max} characters`;
    }
  },
  MSG_ID_NOT_FOUND: (modelName, id) => `${modelName} with the given ID: ${id}, not found!`,
  SQZ_VALIDATION_ERROR_DESCRIPTION: "This error occurred because some fields do not match the required validation constraints.",
  SQZ_UNIQUE_CONSTRAINT_ERROR: "This error occurred because some fields UNIQUE."
};
