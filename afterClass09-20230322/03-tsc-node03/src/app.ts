import express from 'express';
const PORT=3000;

const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{

    let nombre:string="Jose"
    // nombre=104

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK...!!! :)');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
