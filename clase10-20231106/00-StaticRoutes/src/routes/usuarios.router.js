import { Router } from 'express';
export const router=Router()

let usuarios=[]

let status='true'
console.log(status)

status=Boolean(status)
console.log(status)

router.post('/',(req,res)=>{

    let {nombre, email}=req.body
    
    // falta validar...!!!

    // falta generar id...

    usuarios.push({nombre, email})

    res.status(200).json({usuarios})
})