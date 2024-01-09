import { Router } from 'express';
export const router=Router()

const m1=(req,res,next)=>{
    console.log("mid01...!!!")
    next()
}

const m2=(req,res,next)=>{
    console.log("mid02...!!!")
    next()
}

const m3=(req,res,next)=>{
    console.log("mid03...!!!")
    next()
}

const handler=(req,res)=>{
    res.setHeader('Content-Type','application/json')
    res.status(200).json({mensaje:"PRUEBA...!!!"})
}

let funciones=[m1, m2, m3, handler]

// router.get('/', m1, m2, m3, handler)
router.get('/', funciones)