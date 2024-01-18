import { Router } from 'express';
import { UsuariosController } from '../controller/usuarios.controller.js';
export const router=Router()

// let usuariosController=new UsuariosController
// usuariosController.

router.get('/', UsuariosController.getUsuarios)
router.post('/', UsuariosController.createUsuario)