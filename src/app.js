import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import pkg from '../package.json';
import medicineRoutes from "./routes/medicine.routes";
import authRoutes from "./routes/auth.routes";

import { createRoles, createPharms } from './libs/initialSetup'
import userRoutes from './routes/user.routes'
const app = express();
createRoles();
createPharms();

app.set('pkg', pkg);

//cambiar la configuracion cors para produccion
app.use(cors());


app.use(morgan('dev'));
app.use(express.json());
app.get('/', (req, res) => {
    res.json({
        author: app.get('pkg').author,
        name: app.get('pkg').name,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    });
})
app.use('src/uploads', express.static(path.resolve('src/images')));
app.use('/api/medicamentos', medicineRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/usuario', userRoutes);

export default app;