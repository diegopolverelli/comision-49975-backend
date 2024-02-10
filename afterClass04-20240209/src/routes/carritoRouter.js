import { Router } from 'express';
export const router=Router()

let carritos=[
    {
        _id: "e100", 
        productos:[]    // {_id:"algo", cantidad:5}
    }
]

router.get('/:idCarrito',(req,res)=>{

    // llamar al dao.findById...
    let carrito=carritos.find(c=>c._id===req.params.idCarrito)

    res.setHeader('Content-Type','application/json')
    res.status(200).json({carrito})
})

router.post("/:idCarrito/producto/:idProducto", (req, res)=>{

    let {idCarrito, idProducto}=req.params

    // llamar al dao.findById...
    let indiceCarrito=carritos.findIndex(c=>c._id===idCarrito)
    if(indiceCarrito===-1){
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`})
    }

    let indiceProducto=carritos[indiceCarrito].productos.findIndex(p=>p._id===idProducto)
    if(indiceProducto!==-1){
        carritos[indiceCarrito].productos[indiceProducto].cantidad++
    }else{
        carritos[indiceCarrito].productos.push({_id:idProducto, cantidad:1})
    }

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({carritoActualizado:carritos[indiceCarrito]});

})