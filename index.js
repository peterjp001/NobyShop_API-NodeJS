require("express-async-errors");
const config = require("config");
const express = require("express");
const app = express();
app.use(express.json());

// APP SERVER ROUTE
require("./routes/")(app);

const port = config.get("app_port") || 3001;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
