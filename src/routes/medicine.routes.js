import { Router } from "express";
// import upload from '../libs/multer';

// import path from 'path';
const router = Router();

import * as medicinesCtrl from "../controllers/medicine.controller";
import { authJwt } from '../middlewares';



// const upload = multer({
//     storage,
//     dest: path.join(__dirname, '../public/images'),
//     limit: { fileSize: 2000000 },
//     fileFilter: (req, file, cb) => {
//         const filetypes = /jpeg|jpg|png|gif/;
//         const mimetype = filetypes.test(file.mimetype);
//         const extname = filetypes.test(path.extname(file.originalname));

//         if (mimetype && extname) {
//             return cb(null, true);
//         }
//         cb("Error: Tipo de archivo no soportado")
//     }
// }).single('image');


router.post('/', authJwt.verifyToken, medicinesCtrl.createMedicine); // [authJwt.verifyToken, authJwt.isModerator ],

router.get('/', medicinesCtrl.getMedicines);

router.get('/count', medicinesCtrl.countMedicines);

router.get('/searchMedicine/:medicineName', medicinesCtrl.searchMedicine);

router.get('/:medicineId', medicinesCtrl.getMedicineById);

router.put('/:medicineId', [authJwt.verifyToken, authJwt.isModerator, authJwt.isAdmin], medicinesCtrl.updateMedicineById);

router.delete('/:medicineId', [authJwt.verifyToken, authJwt.isModerator, authJwt.isAdmin], medicinesCtrl.deleteProductById);

export default router;