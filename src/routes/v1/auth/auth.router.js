const express = require("express");
const controller = require("../../../controllers/auth.controller");
const middleware = require("../../../middlewares/auth.middlewares");

const router = express.Router();

router.post("/login", middleware.authUser, controller.authUser);
router.put("/forgot-password", controller.changePassword);
// router.post('/loginTest', controller.authUserTest);

module.exports = router;
