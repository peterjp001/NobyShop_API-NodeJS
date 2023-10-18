const express = require("express");
const app = express();
const studentRouter = require("./routes/student.route");

app.use(express.json());
app.use("/api/v1/students", studentRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
