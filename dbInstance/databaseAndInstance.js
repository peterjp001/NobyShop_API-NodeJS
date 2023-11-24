const config = require("config");
const Sequelize = require("sequelize");

// CREATE DATABASE
module.exports.createDatabase = async () => {
  try {
    const databaseServerConnection = new Sequelize(`mysql://${config.get("db.username")}:${""}@${config.get("db.host")}:${config.get("db.port")}`);
    await databaseServerConnection.query(`CREATE DATABASE IF NOT EXISTS ${config.get("db.name")}`);
    console.log("Database created successfully.");
  } catch (error) {
    console.log(`Error while creating database "${config.get("db.name")}"`, error);
  }
};

// CREATE SEQUELIZE INSTANCE FOR DATABASE CONNECTION
module.exports.dbInstance = new Sequelize(config.get("db.name"), config.get("db.username"), "", {
  host: config.get("db.host"),
  port: config.get("db.port"),
  dialect: "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});
