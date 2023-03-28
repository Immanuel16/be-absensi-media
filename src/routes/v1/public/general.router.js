const express = require("express");
const generalController = require("../../../controllers/general.controller");
const recruitmenController = require("../../../controllers/recruitment.controller");

const router = express.Router();

router.get("/ministries-schedule", generalController.getListScheduleMinistries);

router.post("/recruitment/add", recruitmenController.createNewCandidate);

module.exports = router;
