require("regenerator-runtime/runtime");
import "@babel/polyfill";
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import pkg from '../package.json';

import medicineRoutes from './routes/medicine.routes';
import authRoutes from './routes/auth.routes';
import pharmRoutes from './routes/pharm.routes';

import { createRoles } from './libs/initialSetup'
import userRoutes from './routes/user.routes'
const app = express();
createRoles();



app.set('pkg', pkg);

app.use(cors());

app.use('/uploads', express.static(path.resolve('uploads')));

app.use(morgan('dev'));
app.use(express.json());
app.get('/', (req, res) => {
    res.json({
        author: app.get('pkg').author,
        name: app.get('pkg').name,
        description: app.get('pkg').description,
        version: app.get('pkg').version,
        scripts: app.get('pkg').scripts
    });
})

app.use('/api/farmacias', pharmRoutes);
app.use('/api/medicamentos', medicineRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/usuario', userRoutes);

export default app;