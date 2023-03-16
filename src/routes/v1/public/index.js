const express = require("express");
const registerRoutes = require("./register.router");
const bankRoutes = require("./bank.router");
const areaRoutes = require("./areas.router");

const router = express.Router();

router.use('/register', registerRoutes);
router.use('/bank-account', bankRoutes);
router.use('/area', areaRoutes);

module.exports = router;