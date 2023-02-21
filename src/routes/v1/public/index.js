const express = require("express");
const registerRoutes = require("./register");

const router = express.Router();

router.use('/register', registerRoutes);

module.exports = router;