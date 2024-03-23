import express from 'express';
const PORT=3000;

const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/usuarios',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('usuarios');
})

const server=app.listen(PORT,()=>{
    console.log(`Server online escuchando en puerto ${PORT}`);
});
