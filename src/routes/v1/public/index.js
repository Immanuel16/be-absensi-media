const express = require("express");
const registerRoutes = require("./register");
const bankRoutes = require("./bank");
const areaRoutes = require("./areas");

const router = express.Router();

router.use('/register', registerRoutes);
router.use('/bank-account', bankRoutes);
router.use('/area', areaRoutes);

module.exports = router;