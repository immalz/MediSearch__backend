import { Router } from "express";
const router = Router();

import * as authCtrl from '../controllers/auth.controllers'
import { verifySignup } from '../middlewares'

router.post('/signup', [
    verifySignup.checkDuplicatedUsernameOrEmail,
    verifySignup.checkRolesExisted
], authCtrl.signUp);

router.post('/signin', authCtrl.signIn);

/* PARA LAS FARMACIAS */

router.post('/signin/pharmacy', authCtrl.signInPharm);

export default router;