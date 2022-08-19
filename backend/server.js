require("dotenv").config();
require("./models/User.model");
require("./models/Challenges.model");
require("./models/Curriculum.model");
require("./models/ScheduledMeetings.model");
const express = require("express");
const cors = require("cors");
const { urlencoded, json } = require("body-parser");
const morgan = require("morgan");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(morgan("dev"));
connectDB();

// app.use("/v1", require("./routes/general.route"));
app.use("/v1/auth", require("./routes/auth.route"));
app.use("/v1/admin", require("./routes/admin.route"));
app.use("/v1/user", require("./routes/user.route"));

const server = app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Process terminated");
  });
});

process.on("unhandledRejection", (err) => {
  console.log(`an unhandled rejection occurred: ${err}`);
  process.exit(1);
});

process.on("uncaughtException", (err) => {
  console.log(`an uncaught exception occurred: ${err}`);
  process.exit(1);
});

process.on("exit", (code) => {
  console.log(`Process exited with code ${code}`);
});

process.on("SIGINT", () => {
  console.log("Process terminated");
  process.exit(0);
});
