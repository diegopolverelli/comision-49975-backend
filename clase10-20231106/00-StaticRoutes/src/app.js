import express from 'express';
import __dirname from './utils.js';

import { router as usuariosRouter} from './routes/usuarios.router.js';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'))

app.use('/api/usuarios', usuariosRouter )


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
