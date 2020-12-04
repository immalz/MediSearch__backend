import { Router } from "express";

const router = Router();

import * as pharmCtrl from '../controllers/pharm.controller';
import { authJwt } from '../middlewares';

router.get('/', pharmCtrl.getPharms);

router.post('/request', pharmCtrl.requestPharms);

router.get('/request', pharmCtrl.getRequestPharms);

router.delete('/request/:pharmId', pharmCtrl.deleteRequestPharms);

router.get('/count', [authJwt.verifyToken, authJwt.isAdmin], pharmCtrl.countPharms);



export default router;