import express from 'express';
import authRoutes from './auth/auth.router';
import appRoutes from './apps';
import publicRoutes from './public'


const router = express.Router();

router.use('/auth', authRoutes);
router.use('/apps', appRoutes);
router.use('/public', publicRoutes);

export default router;