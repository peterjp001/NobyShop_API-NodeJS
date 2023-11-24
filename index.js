const config = require("config");
const express = require("express");
const app = express();
app.use(express.json());
require("./routes/")(app);

// APP SERVER ROUTE
const port = config.get("app_port") || 3001;

app.get("/", (req, res) => {
  res.send("Hello welcome to my first api with Node/Express/Sequelize");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
