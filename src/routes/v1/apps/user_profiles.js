const express = require("express");
const userProfileController = require("../../../controllers/user.controller");
const userProfileMiddleware = require("../../../middlewares/user.middlewares");

const router = express.Router();

router.get('/detail', userProfileController.getCrewDetail);

module.exports = router;