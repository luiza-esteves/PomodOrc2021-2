import { Router } from 'express';
import taskListRoutes from './taskListRoutes';

const router = Router();

router.use('/tasklist', taskListRoutes);

export default router;