const colorRouter = require("./color.route");

module.exports = (app) => {
  app.use("/api/v1/colors", colorRouter);
};
