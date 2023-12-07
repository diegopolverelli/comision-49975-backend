import express from 'express';
import mongoose from 'mongoose';

const ventasCol='ventas'

const ventasEsquema=new mongoose.Schema({
    name:String,
    size:{
        type: String,
        enum:["small","medium","large"],
        default:"medium"
    },
    price:Number, 
    quantity:Number,
    date:Date, 
})

const ventasModelo=mongoose.model(ventasCol,ventasEsquema);



const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',async(req,res)=>{

    let resultado=await ventasModelo.find()

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({resultado});
})

app.get('/informe',async(req,res)=>{

    let resultado=await ventasModelo.aggregate(
        [
            // {
            //     $match: {size:{$in:["medium"]}}
            // },
            {
                $group:{
                    _id: "$name",
                    totalQuantity: {$sum: "$quantity"}
                }
            }
        ]
    )

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({resultado});

})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

try {
    await mongoose.connect('mongodb+srv://backend49975:CoderCoder@cluster0.dxc9fdl.mongodb.net/?retryWrites=true&w=majority&dbName=clase17')
    console.log(`Conexión a DB establecida`);

} catch (error) {
    console.log(error.message)    
}
