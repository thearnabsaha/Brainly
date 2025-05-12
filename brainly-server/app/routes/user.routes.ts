import express from 'express';
import { userProfile, userSignin, userSignup } from '../controller/user.controller';
import { jwtAuth } from '../jwt/jwtAuth';

const router = express.Router();

router.post('/signup', userSignup);
router.post('/signin', userSignin);
router.get('/user', jwtAuth, userProfile);

export default router;