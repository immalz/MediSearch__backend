import { Router } from "express";
import * as authCtrl from '../controllers/auth.controllers';
import * as pharmCtrl from '../controllers/pharm.controller';
import { authJwt } from '../middlewares';
import { verifySignup, verifyRequest } from '../middlewares'

const router = Router();

router.get('/', pharmCtrl.getPharms);

router.get('/count', pharmCtrl.countPharms);

router.get('/last', pharmCtrl.lastPharmAgree);

router.get('/request', pharmCtrl.getRequestPharms); // [authJwt.verifyToken, authJwt.isAdmin]

router.get('/:id', pharmCtrl.getPharmById);

router.get('/request/count', pharmCtrl.countRequestPharms);


router.get('/medicine/count/:_id', pharmCtrl.countMedicineforPharm);

router.post('/', [
    verifySignup.checkDuplicatedUsernameOrEmail,
    verifySignup.checkRolesExisted
], authCtrl.signUpPharms);

router.post('/request', verifyRequest.checkDuplicatedRucOrEmailorRazonSocial, pharmCtrl.createRequestPharms);

router.put('/:pharmId', pharmCtrl.updatePharmacyById);

router.delete('/:pharmId', pharmCtrl.deletePharm);

router.delete('/request/:pharmId', pharmCtrl.deleteRequestPharms); // , [authJwt.verifyToken, authJwt.isAdmin]





export default router;