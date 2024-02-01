import express from 'express';
import { enviarWS } from './whatsApp.js';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/ws',async(req,res)=>{

    let {mensaje, numero}=req.query

    try {
        let resultado=await enviarWS(mensaje, numero)

        res.setHeader('Content-Type','application/json');
        return res.status(200).json({resultado});
        
    } catch (error) {
        console.log(error)
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`})
        
    }


})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
