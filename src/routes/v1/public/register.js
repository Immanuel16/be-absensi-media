const express = require("express");
const userProfileController = require("../../../controllers/user.controller");
const userProfileMiddleware = require("../../../middlewares/user.middlewares");

const router = express.Router();

router.post('', userProfileMiddleware.registerCrew, userProfileController.registerCrew);

module.exports = router;