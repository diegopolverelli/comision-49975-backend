import { Negocio } from "../DAO/classes/negocios.dao.js";
import { Orden } from "../DAO/classes/ordenes.dao.js";
import { Usuario } from "../DAO/classes/usuarios.dao.js";

const usuariosService=new Usuario()
const negociosService=new Negocio()
const ordenesService=new Orden()

export const getOrdenes=async(req,res)=>{
    let ordenes=await ordenesService.get()
    if(!ordenes){
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`})
    }else{
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({ordenes});
    }
}

export const getOrdenById=async(req,res)=>{
    let orden=await ordenesService.getById(req.params.oid)
    if(!orden){
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`})
    }else{
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({orden});
    }
}

export const createOrden=async(req,res)=>{

    let {usuarioId, negocioId, pedido}=req.body

    // validaciones por cuenta del alumno...
    let usuario=await usuariosService.getById(usuarioId)
    let negocio=await negociosService.getById(negocioId)

    // PEDIDO: [{id:2, cantidad:4}, {id:3, cantidad:2}]

    let error=false
    let total=0
    pedido.forEach(item=>{
        let producto=negocio.productos.find(p=>p.id===item.id)
        if(!producto){
            console.log(`El producto con id ${item.id} no existe en el local ${negocio.nombre}`)
            error=true
            return 
        }

        item.descrip=producto.descrip
        item.precio=producto.precio
        item.subtotal=producto.precio*item.cantidad

        total+=producto.precio*item.cantidad

    })

    if(error){
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`})
    }

    // console.log(pedido)

    let numero=Date.now()
    let nuevaOrden=await ordenesService.create(
        {
            numero, 
            usuario: usuarioId,
            negocio: negocioId,
            productos: pedido, 
            total
        }
    )

    if(!nuevaOrden){
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`})
    }else{
        usuario.ordenes.push(nuevaOrden._id)
        await usuariosService.update(usuarioId, usuario)
        
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({nuevaOrden});
    }


}

