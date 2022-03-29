const express = require("express");
const {
  createDistrict,
  getDistrict,
} = require("../controllers/districtController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/district/create").post(createDistrict);

router.route("/master/get-district").get(getDistrict);

module.exports = router;
