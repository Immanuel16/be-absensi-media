const express = require("express");
const generalController = require("../../../controllers/general.controller");
const recruitmenController = require("../../../controllers/recruitment.controller");
const scheduleShootingController = require("../../../controllers/schedule_shooting.controller");
const rsvpRetreatController = require("../../../controllers/rsvp.controller");
const userController = require("../../../controllers/user.controller");
const historyCashController = require("../../../controllers/riwayat_kas.controller");

const router = express.Router();

router.get("/ministries-schedule", generalController.getListScheduleMinistries);
router.get("/ministries-division", generalController.getListDivision);
router.get("/sapaan-gembala", generalController.getPastorGreetings);
router.put("/sapaan-gembala", generalController.updatePastorGreetings);

router.post("/recruitment/add", recruitmenController.createNewCandidate);
router.get("/recruitments", recruitmenController.getListCandidate);

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
