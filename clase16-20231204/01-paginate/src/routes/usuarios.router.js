import { Router } from 'express';
import { usuariosModelo } from '../models/usuarios.model.js';
export const router=Router()

router.get('/',async(req,res)=>{

    let pagina=1
    if(req.query.pagina){
        pagina=req.query.pagina
    }

    let usuarios
    try {
        // usuarios=await usuariosModelo.find().lean()
        usuarios=await usuariosModelo.paginate({},{lean:true, limit:20, page: pagina})
        console.log(usuarios)

    } catch (error) {
        console.log(error)
        usuarios=[]
    }

    let {totalPages, hasNextPage, hasPrevPage, prevPage, nextPage}=usuarios

    console.log(totalPages, hasNextPage, hasPrevPage, prevPage, nextPage)

    res.status(200).render('usuarios',{usuarios:usuarios.docs,
        totalPages, hasNextPage, hasPrevPage, prevPage, nextPage
    })
})