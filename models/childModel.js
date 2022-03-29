const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const childSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [50, "Name cannot exceed 30 characters"],
  },
  sex: {
    type: String,
    required: [true, "Please Enter Your sex"],
  },

  dob: {
    type: String,
    required: [true, "Please Enter Your dob"],
  },

  father_name: {
    type: String,
    required: [true, "Please Enter Father's Name"],
    maxLength: [50, "Name cannot exceed 50 characters"],
  },
  mother_name: {
    type: String,
    required: [true, "Please Enter Mother's Name"],
    maxLength: [50, "Name cannot exceed 50 characters"],
  },
  district_id: {
    // type: mongoose.Schema.ObjectId,
    type: Number,
    // ref: "District",
    required: [true, "Please Enter Your district_id"],
  },
  photo: {
    type: String,
    // required: true,
  },
});

module.exports = mongoose.model("Child", childSchema);
