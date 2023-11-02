import express from 'express';
import { router as heroesRouter } from './routes/heroes.router.js';
import { router as villanosRouter } from './routes/villanos.router.js';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/heroes', heroesRouter)
app.use('/api/villanos', villanosRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
