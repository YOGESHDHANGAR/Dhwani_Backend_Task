const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Child = require("../models/childModel");
const sendToken = require("../utils/jwtToken");
const crypto = require("crypto");
const cloudinary = require("cloudinary");

// Create a child Profile
exports.childProfileCreate = catchAsyncErrors(async (req, res, next) => {
  const { name, sex, dob, father_name, mother_name, district_id, photo } =
    req.body;

  const childProfile = await Child.create({
    name,
    sex,
    dob,
    father_name,
    mother_name,
    district_id,
    photo,
  });

  res.status(200).json({
    success: true,
    status: 200,
    message: "Operation performed successfully",
  });
});

// Get all childs list
exports.getChildProfileList = catchAsyncErrors(async (req, res, next) => {
  const childsProfileList = await Child.find();

  res.status(200).json({
    success: true,
    status: 200,
    message: "Child Profile Detail",
    child_profile: childsProfileList,
  });
});
