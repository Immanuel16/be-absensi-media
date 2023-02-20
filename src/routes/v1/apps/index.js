import express from 'express';
import passport from 'passport';
import userProfileRoutes from "./user_profiles"

require('../../../utils/passport.util');

const router = express.Router();

/* middleware for all api has login */
router.use(passport.authenticate('user', {session: false}));

router.use('/users', userProfileRoutes);


export default router;