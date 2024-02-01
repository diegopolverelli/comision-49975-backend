import express from 'express';
import { upload } from './utils.js';
import { enviarMail } from './mailing.js';
import fs from 'fs'

const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"))

app.post('/api/mail', upload.array("adjuntos"), async(req,res)=>{
    let {to, subject, message} = req.body

    let adjuntos=[]
    req.files.forEach(archivo=>{
        adjuntos.push({
            path: archivo.path,
            filename: archivo.originalname
        })
    })

    let resultado
    try {
        resultado=await enviarMail(to, subject, message, adjuntos)

        setTimeout(() => {
            req.files.forEach(a=>{
                fs.unlinkSync(a.path)
            })
            console.log("Archivos eliminados del server...!!!")
        }, 3000);

        if(resultado.accepted.length>0){
            res.setHeader('Content-Type','application/json');
            return res.status(200).json({payload:"Mail enviado...!!!"});
        }else{
            res.setHeader('Content-Type','application/json');
            return res.status(500).json({error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`})
        }
        
    } catch (error) {
        console.log(error)
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`})
    }

})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
