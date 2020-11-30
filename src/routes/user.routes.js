import { Router } from "express";
const router = Router();

import * as userCtrl from "../controllers/user.controller";
import { authJwt, verifySignup } from "../middlewares";

router.get('/', userCtrl.getUsers);

router.get('/count', userCtrl.countUsers);

router.get('/:id', userCtrl.findRole);

router.post('/', [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.checkRolesExisted
], userCtrl.createUser)

export default router;