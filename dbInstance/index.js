const { createDatabase, dbInstance } = require("./databaseAndInstance");
const models = require("../models");

// CREATE DATABASE
createDatabase();

// MODELS
const modelInstance = models(dbInstance);

// SYNC MODELS
(async () => {
  try {
    await dbInstance.sync();
    //CREATE DATABASE
  } catch (error) {
    console.log(error);
  }
})();

module.exports = modelInstance;
