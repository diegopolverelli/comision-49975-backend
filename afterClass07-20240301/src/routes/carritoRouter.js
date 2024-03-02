import { Router } from 'express';
import { agregaProductoCarrito, comprarCarrito, getCarritoById } from '../controllers/carrito.controller.js';
import { passportView } from '../utils.js';
export const router=Router()

// let carritos=[
//     {
//         _id: "e100", 
//         productos:[]    // {_id:"algo", cantidad:5}
//     }
// ]

router.get('/:idCarrito', getCarritoById)
router.get('/:idCarrito/comprar', passportView("jwt"), comprarCarrito)
router.post("/:idCarrito/producto/:idProducto", agregaProductoCarrito)