import { Router } from "express";
const router = Router();

import * as medicinesCtrl from "../controllers/medicine.controller";
import { authJwt } from '../middlewares';

router.post('/', [authJwt.verifyToken, authJwt.isModerator], medicinesCtrl.createMedicine);

router.get('/', medicinesCtrl.getMedicines);

router.get('/:medicineId', medicinesCtrl.getMedicineById);

router.put('/:medicineId', [authJwt.verifyToken, authJwt.isModerator], medicinesCtrl.updateMedicineById);

router.delete('/:medicineId', [authJwt.verifyToken, authJwt.isAdmin], medicinesCtrl.deleteProductById);

export default router;