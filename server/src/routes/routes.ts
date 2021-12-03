
import {Router} from 'express';
import taskListRoutes from './taskListRoutes';
import taskRoutes from './taskRoutes';

const router = Router();

router.use('/tasklist', taskListRoutes);
router.use('task', taskRoutes);

export default router;