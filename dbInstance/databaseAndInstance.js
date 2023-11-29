const config = require("config");
const Sequelize = require("sequelize");
const logger = require("../utils/logger");

// CREATE DATABASE
const createDatabase = async () => {
  try {
    const databaseServerConnection = new Sequelize(`mysql://${config.get("db.username")}:${""}@${config.get("db.host")}:${config.get("db.port")}`);
    await databaseServerConnection.query(`CREATE DATABASE IF NOT EXISTS ${config.get("db.name")}`);
    logger.info("Database created successfully.");
  } catch (error) {
    logger.error(`Error while creating database "${config.get("db.name")}"`, error);
  }
};

// CREATE SEQUELIZE INSTANCE FOR DATABASE CONNECTION
const dbInstance = new Sequelize(config.get("db.name"), config.get("db.username"), "", {
  host: config.get("db.host"),
  port: config.get("db.port"),
  dialect: "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
  logging: (msg) => logger.info(msg)
});

// TEST DATABASE CONNECTION
dbInstance
  .authenticate()
  .then(() => {
    logger.info("Connection has been established successfully.");
  })
  .catch((err) => {
    logger.error("Unable to connect to the database:", err);
  });

module.exports = { dbInstance, createDatabase };
