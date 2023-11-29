const colorRouter = require("./color.route");
const sizeRouter = require("./size.route");
const expressAsyncError = require("../middlewares/expressAsyncError");

const baseRoute = "/api/v1";

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("Hello welcome to NobyShop api");
  });
  app.use(`${baseRoute}/colors`, colorRouter);
  app.use(`${baseRoute}/sizes`, sizeRouter);

  // handle global express-async-errors
  app.use(expressAsyncError);
};
