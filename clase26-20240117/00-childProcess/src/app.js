import express from 'express';
import {fork} from 'child_process'
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

let visitas=0
app.get('/',(req,res)=>{

    visitas++

    res.setHeader('Content-Type','text/plain');
    res.status(200).send(`Home Page. Visitas: ${visitas}`);
})

const calculo=()=>{
    console.log("inicio calculo")
    console.time("Demora en el calculo:")

    let numero=0

    for(let i=0; i<15_000_000_000; i++){
        numero++
    }

    console.log("fin calculo")
    console.timeEnd("Demora en el calculo:")

    return numero
}

app.get('/calculoPesado',(req,res)=>{
    
    let resultado=`Resultado: ${calculo()}`

    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        resultado
    });
});

app.get('/calculoFork',(req,res)=>{
    let child=fork("./src/calculo.js")

    child.send(`Soy el proceso con pid ${process.pid}, y necesito que te ejecutes...!!!`)

    child.on("message", resultado=>{
        res.setHeader('Content-Type','application/json');
        res.status(200).json({
            resultado
        });

    })
    
    // let resultado=`Resultado: ${calculo()}`

});

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
