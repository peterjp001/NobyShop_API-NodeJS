const Sequelize = require("sequelize");
const dbInstance = new Sequelize("sequelize_db", "root", "", {
  host: "localhost",
  dialect: "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

(async () => {
  try {
    await dbInstance.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

(async () => {
  try {
    await dbInstance.sync();
  } catch (error) {
    console.log(error);
  }
})();

module.exports = dbInstance;
