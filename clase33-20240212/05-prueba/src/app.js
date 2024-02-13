import express from 'express';
import saludar from '49975-zebra'

const PORT=3000

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})


const server=app.listen(PORT,()=>{
    console.log(saludar(`Server escuchando en puerto ${PORT}`));
});
