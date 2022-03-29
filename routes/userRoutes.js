const express = require("express");
const {
  loginUser,
  logoutUser,
  registerUser,
} = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/user/register").post(registerUser);

router.route("/user/login").post(loginUser);

router.route("/user/logout").get(logoutUser);

module.exports = router;
