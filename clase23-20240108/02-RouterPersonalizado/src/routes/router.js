import { Router } from 'express'

export class MiRouter{
    constructor(){
        this.router=Router()
        this.init()
    }

    init(){}

    getRouter(){
        return this.router
    }

    get(ruta, ...funciones){ // ... son aquí el operador rest, que alamacena los argumentos que lleguen en un array llamado funciones
        this.router.get(ruta, this.misRespuestas, this.agregaTryCatch(funciones))
    }

    post(ruta, ...funciones){ // ... son aquí el operador rest, que alamacena los argumentos que lleguen en un array llamado funciones
        this.router.post(ruta, this.misRespuestas, this.agregaTryCatch(funciones))
    }

    misRespuestas=(req, res, next)=>{
        res.success=(respuesta)=>res.status(200).json({status:"OK", respuesta})
        res.successAlta=(respuesta, itemNuevo)=>res.status(201).json({status:"OK", respuesta, itemNuevo})
        res.errorCliente=(error)=>res.status(400).json({status:"Bad Request", error})
        res.errorServer=(error)=>res.status(500).json({status:"Server Error", error})
        res.errorAuth=(error)=>res.status(401).json({status:"Auth Error", error})
        next()
    }

    agregaTryCatch(funciones){
        return funciones.map(funcion=>{
            return async(...params)=>{
                try {
                    funcion.apply(this, params)
                } catch (error) {
                    params[1].errorServer("Error inesperado. Contacte al administrador")
                }
            }
        })
    }

}