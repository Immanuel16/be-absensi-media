const express = require("express");
const userProfileController = require("../../../controllers/user.controller");
const userProfileMiddleware = require("../../../middlewares/user.middlewares");

const router = express.Router();

router.get('/detail', userProfileController.getCrewDetail);
router.get('/birthdays', userProfileController.getCrewBirthdays);
router.get('/ministry', userProfileController.getCrewMinistryHistory);

module.exports = router;