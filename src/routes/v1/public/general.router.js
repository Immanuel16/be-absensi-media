const express = require("express");
const generalController = require("../../../controllers/general.controller");

const router = express.Router();

router.get("/ministries-schedule", generalController.getListScheduleMinistries);

module.exports = router;
