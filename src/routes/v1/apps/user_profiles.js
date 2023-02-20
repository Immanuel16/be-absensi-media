import express from 'express';
import * as userProfileController from "../../../controllers/user.controller";
import * as userProfileMiddleware from "../../../middlewares/user.middlewares";

const router = express.Router();

router.post('/register', userProfileMiddleware.registerCrew, userProfileController.registerCrew);

export default router;