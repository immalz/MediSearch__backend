import app from './app';
import './database';


require("regenerator-runtime/runtime");

require('dotenv').config();

app.listen(process.env.PORT);

console.log('Server on port', process.env.PORT);