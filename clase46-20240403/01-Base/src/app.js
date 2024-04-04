import express from 'express';
import stripe from "stripe"
const PORT=3000;

// 3) conectar back con Stripe
const stripeInstance=stripe("sk_test_clave_privada_stripe")

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"))

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.post("/pagos", async(req,res)=>{

    let {importe} = req.body
    // validaciones

    // 4) el back solicita a stripe un paymentIntent
    const paymentIntent=await stripeInstance.paymentIntents.create({
            amount: importe, 
            currency: "usd",
            metadata:{
                id_usuario:"1009",
                nombre:"Juan Perez"
            }
    })

    console.log(paymentIntent)
    
    res.setHeader('Content-Type','application/json');
    return res.status(200).json(paymentIntent);



})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
