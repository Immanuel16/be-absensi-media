const express = require("express");
const passport = require("passport");
const userProfileRoutes = require("./user_profiles.router");
const absensiRoutes = require("./absensi.router");
const accountsRoutes = require("./account.router");
const historyCashRoutes = require("./riwayat_kas.router");
const generalController = require("../../../controllers/general.controller");

// import express from 'express';
// import passport from 'passport';
// import userProfileRoutes from "./user_profiles"

require("../../../utils/passport.util");

const router = express.Router();

/* middleware for all api has login */
router.use(passport.authenticate("user", { session: false }));
router.put("/sapaan-gembala", generalController.updatePastorGreetings);
router.use("/users", userProfileRoutes);
router.use("/absensi", absensiRoutes);
router.use("/accounts", accountsRoutes);
router.use("/history-cash", historyCashRoutes);

module.exports = router;
