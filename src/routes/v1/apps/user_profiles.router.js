const express = require("express");
const userProfileController = require("../../../controllers/user.controller");
const userProfileMiddleware = require("../../../middlewares/user.middlewares");

const router = express.Router();

router.get("/detail", userProfileController.getCrewDetail);
router.get("/birthdays", userProfileController.getCrewBirthdays);
router.get(
  "/total-ministry-report",
  userProfileController.getTotalMinistryCrew
);
router.get("/ministry", userProfileController.getCrewMinistryHistory);
router.get("/absence", userProfileController.getListUserAbsence);
router.get("/bank-account", userProfileController.getBankCrew);
router.get("", userProfileController.getAllCrew);

module.exports = router;
