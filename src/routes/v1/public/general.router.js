const express = require("express");
const generalController = require("../../../controllers/general.controller");
const recruitmentController = require("../../../controllers/recruitment.controller");
const scheduleShootingController = require("../../../controllers/schedule_shooting.controller");
const rsvpRetreatController = require("../../../controllers/rsvp.controller");
const userController = require("../../../controllers/user.controller");
const historyCashController = require("../../../controllers/riwayat_kas.controller");
const logErrorController = require("../../../controllers/api_log.controller");

const router = express.Router();

router.get("/ministries-schedule", generalController.getListScheduleMinistries);
router.get("/ministries-division", generalController.getListDivision);
router.get("/sapaan-gembala", generalController.getPastorGreetings);
router.put("/sapaan-gembala", generalController.updatePastorGreetings);

router.get("/log-errors", recruitmentController.getListCandidate);

router.post("/recruitment/add", recruitmentController.createNewCandidate);
router.get("/recruitments", recruitmentController.getListCandidate);

router.post(
  "/shooting-request/add",
  scheduleShootingController.createScheduleShooting
);

router.get("/shooting/list", scheduleShootingController.getListSchedule);

router.get("/cash", historyCashController.getAllHistoryCash);

/* retreat */
router.post("/retreat/add", rsvpRetreatController.createAvailRetreat);

router.get("/retreat/list", rsvpRetreatController.getListRetreat);

/* get list user */
router.get("/crew/list", userController.getListUserAbsence);

module.exports = router;
