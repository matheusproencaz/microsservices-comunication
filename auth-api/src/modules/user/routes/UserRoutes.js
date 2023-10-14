import { Router } from 'express';
import AuthenticationMiddleware from '../../../middlewares/AuthenticationMiddleware';
import UserController from '../controller/UserController';


const router = new Router();
router.post('/api/user/auth', UserController.getAccessToken);

router.use(AuthenticationMiddleware);
router.get('/api/user/email/:email', UserController.findByEmail);

export default router;