import express from 'express';
import cluster from 'cluster'
import { router as pruebasRouter } from './routes/pruebaRouter.js';
import os from 'os'

if(cluster.isPrimary){
    console.log(os.cpus())
    console.log(os.cpus().length)
    console.log(`Proceso Principal - pid ${process.pid}. Generando workers...`)
    // cluster.fork()
    // cluster.fork()
    // cluster.fork()
    for(let i=0; i<os.cpus().length; i++){
        cluster.fork()
    }

    cluster.on("exit", worker=>{
        console.log(`Soy el proceso primario. El worker ${worker.id} a terminado. Generando nuevo worker...`)
        cluster.fork()
    })

    cluster.on("message",(worker, mensaje)=>{
        console.log(`Soy el proceso principal. Recibi un mensaje que dice "${mensaje}"`)
    })
}else{
    console.log(`Worker ${cluster.worker.id} - pid: ${process.pid}`)
    const PORT=3000;
    
    const app=express();
    
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    
    app.use("/", pruebasRouter)
    
    app.get('/',(req,res)=>{
        res.setHeader('Content-Type','text/plain');
        res.status(200).send('OK');
    })
    
    const server=app.listen(PORT,()=>{
        console.log(`Server escuchando en puerto ${PORT}`);
    });
}

