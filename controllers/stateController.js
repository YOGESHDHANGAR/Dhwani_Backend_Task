const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const State = require("../models/stateModel");
const sendToken = require("../utils/jwtToken");
const crypto = require("crypto");
const cloudinary = require("cloudinary");

//Create State
exports.createState = catchAsyncErrors(async (req, res, next) => {
  const { state_name } = req.body;

  await State.create({
    state_name,
  });

  res.status(200).json({
    success: true,
    status: 200,
    message: "Operation performed successfully",
  });
});

//Get State
exports.getState = catchAsyncErrors(async (req, res, next) => {
  const stateList = await State.find();

  res.status(200).json({
    success: true,
    status: 200,
    message: "State Detail",
    state: stateList,
  });
});
