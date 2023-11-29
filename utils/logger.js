const winston = require("winston");

// Define your Winston logger
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(), // Log to console
    new winston.transports.File({ filename: "app.log" }) // Log to a file
  ],
  format: winston.format.combine(winston.format.timestamp(), winston.format.simple())
});

module.exports = logger;
