import express from 'express';
import * as controller from '../../../controllers/auth.controller';
import * as middleware from '../../../middlewares/auth.middlewares';

const router = express.Router();

router.post('/login', middleware.authUser, controller.authUser);
// router.post('/loginTest', controller.authUserTest);

export default router;