const { createDatabase, dbInstance } = require("./databaseAndInstance");
const models = require("../models");

// CREATE DATABASE
createDatabase();

// TEST DATABASE CONNECTION
(async () => {
  try {
    await dbInstance.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

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
