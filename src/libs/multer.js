import multer from 'multer'
import path from 'path'
import { v4 as uuid } from 'uuid';

// Settings
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/images'),
    filename: (req, file, cb) => {
        cb(null, uuid() + path.extname(file.originalname));
    }
});

export default multer({ storage });