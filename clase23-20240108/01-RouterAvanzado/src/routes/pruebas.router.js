import { Router } from 'express';
export const router=Router()

router.get('/',(req,res)=>{

    res.setHeader('Content-Type','application/json')
    res.status(200).json({mensaje:"PRUEBA...!!!"})
})

router.get('/:numero([0-9]+)',(req,res)=>{

    let {numero}=req.params
    numero=Number(numero)
    console.log(numero, typeof(numero))

    res.setHeader('Content-Type','application/json')
    res.status(200).json({numero})
})

router.get('/:palabra([a-zA-Z%20]+)',(req,res)=>{

    let {palabra}=req.params

    res.setHeader('Content-Type','application/json')
    res.status(200).json({palabra})
})

let errores={
    a:"Error Software",
    b:"Error Hardware",
    c:"Error Usuario"
}

router.param("codigo",(req,res,next,codigo)=>{
    req.mensaje="Error desconocido"
    if(errores[codigo]){
        req.mensaje=errores[codigo]
    }

    return next()
})

router.get('/error/:codigo',(req,res)=>{

    let codigo=req.params.codigo
    // let mensaje="Error desconocido"
    // if(errores[codigo]){
    //     mensaje=errores[codigo]
    // }

    res.setHeader('Content-Type','application/json')
    res.status(200).json({mensaje:req.mensaje})
})

router.get('/error/:nombre/:codigo',(req,res)=>{

    let {nombre, codigo }=req.params
    // let mensaje="Error desconocido"
    // if(errores[codigo]){
    //     mensaje=errores[codigo]
    // }

    res.setHeader('Content-Type','application/json')
    res.status(200).json({mensaje:req.mensaje, reportadoPor:nombre})
})


router.get('*',(req,res)=>{

    res.setHeader('Content-Type','application/json')
    res.status(404).json({error:"Page not found"})
})

