// Import intension

const logRequestTime = require("./middlewares/logRequestTime");
const teacherRouter = require("./routes/teacher");
// Import Extension
const express = require("express");
const app = express();

const port = 3001;

app.use(logRequestTime);

app.use("/teachers", teacherRouter);

app.listen(port, () => {
  console.log(`This is port : ${port}`);
});
