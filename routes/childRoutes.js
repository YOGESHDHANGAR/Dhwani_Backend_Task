const express = require("express");
const {
  childProfileCreate,
  getChildProfileList,
} = require("../controllers/childController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/beneficiary/child-profile-create").post(childProfileCreate);

router.route("/beneficiary/get-child-profile").get(getChildProfileList);

module.exports = router;
