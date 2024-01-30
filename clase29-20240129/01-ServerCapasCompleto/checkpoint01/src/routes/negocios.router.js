import { Router } from 'express';
import { addProducto, createNegocio, getNegocioById, getNegocios } from '../controllers/negocios.controller.js';
export const router=Router()

router.get('/', getNegocios)
router.get('/:nid', getNegocioById)
router.post('/', createNegocio)
router.post('/:nid/producto', addProducto)