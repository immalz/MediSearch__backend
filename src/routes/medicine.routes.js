import { Router } from "express";
import multer from 'multer';
import { v4 as uuid } from 'uuid';
import path from 'path';

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
        const filetypes = /jpeg|jpg|png|gif/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname));

        if (mimetype && extname) {
            return cb(null, true);
        }
        cb("Error: Tipo de archivo no soportado")
    }
}).single('imgURL');

// import path from 'path';
const router = Router();

import * as medicinesCtrl from "../controllers/medicine.controller";
import { authJwt } from '../middlewares';


router.post('/', upload, medicinesCtrl.createMedicine); // [authJwt.verifyToken, authJwt.isModerator ],



router.get('/', medicinesCtrl.getMedicines);

router.get('/count', medicinesCtrl.countMedicines);

router.get('/searchMedicine/:medicineName', medicinesCtrl.searchMedicine);

router.get('/:medicineId', medicinesCtrl.getMedicineById);

router.put('/:medicineId', [authJwt.verifyToken, authJwt.isAdmin], medicinesCtrl.updateMedicineById);

router.delete('/:medicineId', [authJwt.verifyToken, authJwt.isAdmin], medicinesCtrl.deleteProductById);

export default router;