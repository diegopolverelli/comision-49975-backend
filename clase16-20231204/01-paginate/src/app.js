import __dirname from './utils.js';
import path from 'path';
import express from 'express';
import {engine} from 'express-handlebars';
import mongoose from 'mongoose';

import { router as usuariosRouter } from './routes/usuarios.router.js';

const PORT=3000;

const app=express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'/views'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'/public')));

app.use('/', usuariosRouter)


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

try {
    await mongoose.connect('mongodb+srv://backend49975:CoderCoder@cluster0.dxc9fdl.mongodb.net/?retryWrites=true&w=majority&dbName=clase16')
    console.log(`Conexión a DB establecida`)

} catch (error) {
    console.log(error)
}
