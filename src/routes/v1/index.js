const express = require("express");
const authRoutes = require("./auth/auth.router");
const appRoutes = require("./apps");
const publicRoutes = require("./public");

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/apps', appRoutes);
router.use('/public', publicRoutes);

module.exports = router;