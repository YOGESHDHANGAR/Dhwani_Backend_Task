const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

const errorMiddleware = require("./middleware/error");

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "config/config.env" });
}

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Route Imports
const child = require("./routes/childRoutes");
const district = require("./routes/districtRoutes");
const state = require("./routes/stateRoutes");
const user = require("./routes/userRoutes");

app.use("/api", child);
app.use("/api", district);
app.use("/api", state);
app.use("/api", user);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
