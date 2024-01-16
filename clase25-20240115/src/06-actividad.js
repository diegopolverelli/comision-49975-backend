import express from 'express';
import mongoose from 'mongoose'
import { config } from './config/06-config.js';

const PORT=config.PORT;

console.log(config)

console.log("PRUEBA PORT:",config.PRUEBA_PORT)

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

try {
    await mongoose.connect(config.MONGO_URL, {dbName: config.DBNAME})
    console.log(`DB Online...!!! Base: ${config.DBNAME}`)
} catch (error) {
    console.log(error)
}

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
