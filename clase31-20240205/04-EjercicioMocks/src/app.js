import express from 'express';
import { generaCompra } from './mock.js';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/compras',(req,res)=>{

    let {cantidad}=req.query
    if(!cantidad || cantidad===0){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ingrese la cantidad...!!!`})
    }

    let compras=generaCompra(cantidad)

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:compras});
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
