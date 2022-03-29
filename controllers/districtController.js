const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const District = require("../models/districtModel");
const sendToken = require("../utils/jwtToken");
const crypto = require("crypto");

//Create District
exports.createDistrict = catchAsyncErrors(async (req, res, next) => {
  const { state_id, district_name } = req.body;

  await District.create({
    state_id,
    district_name,
  });

  res.status(200).json({
    success: true,
    status: 200,
    message: "Operation performed Successfully",
  });
});

//Get District by ID
exports.getDistrict = catchAsyncErrors(async (req, res, next) => {
  const districtList = await District.find();

  res.status(200).json({
    success: true,
    status: 200,
    message: "District Detail",
    district: districtList,
  });
});
