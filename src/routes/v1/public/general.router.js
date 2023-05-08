const express = require("express");
const generalController = require("../../../controllers/general.controller");
const recruitmenController = require("../../../controllers/recruitment.controller");
const scheduleShootingController = require("../../../controllers/schedule_shooting.controller");

const router = express.Router();

router.get("/ministries-schedule", generalController.getListScheduleMinistries);

router.post("/recruitment/add", recruitmenController.createNewCandidate);

router.post(
  "/shooting-request/add",
  scheduleShootingController.createScheduleShooting
);

module.exports = router;
