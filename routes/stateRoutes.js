const express = require("express");
const { createState, getState } = require("../controllers/stateController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/state/create").post(createState);

router.route("/master/get-state").get(getState);

module.exports = router;
