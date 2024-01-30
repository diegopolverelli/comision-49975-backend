import { Router } from 'express';
import { createOrden, getOrdenById, getOrdenes } from '../controllers/ordenes.controller.js';
export const router=Router()

router.get('/', getOrdenes)
router.get('/:oid', getOrdenById)
router.post('/', createOrden)
