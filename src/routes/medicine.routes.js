import { Router } from "express";
import path from 'path';
import multer from 'multer';
import { v4 as uuid } from 'uuid';

import { authJwt } from '../middlewares';
import * as medicinesCtrl from "../controllers/medicine.controller";

const router = Router();

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null, uuid() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage,
    dest: path.join(__dirname, '../../uploads'),
    limit: { fileSize: 2000000 },
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|webp|jfif/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname));

        if (mimetype && extname) {
            return cb(null, true);
        }
        cb("Error: Tipo de archivo no soportado")
    }
}).single('imgURL');

// CONSULTA MEDICINES
router.post('/:_id', upload, medicinesCtrl.createMedicine); // [authJwt.verifyToken, authJwt.isModerator ],

router.get('/', medicinesCtrl.getMedicines);

router.get('/count', medicinesCtrl.countMedicines);

router.get('/last', medicinesCtrl.lastMedicineAgree);

router.get('/:medicineId', medicinesCtrl.getMedicineById);

router.get('/types/all', medicinesCtrl.getTypes);

router.get('/types/:typeId', medicinesCtrl.getTypeById);

router.get('/types/count', medicinesCtrl.countTypes);

router.put('/:medicineId', medicinesCtrl.updateMedicineById); //[authJwt.verifyToken, authJwt.isAdmin]

router.delete('/:medicineId', medicinesCtrl.deleteProductById); //

router.delete('/types/:typeId', medicinesCtrl.deleteTypeById);


// CONSULTA DE MEDICAMENTOS POR FARMACIA

router.get('/pharmacy/:_id', medicinesCtrl.getMedicinesForPharmacy);


export default router;