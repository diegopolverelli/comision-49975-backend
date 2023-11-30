import { usuarioModelo } from "./models/usuarios.modelo.js";

export class ManagerUsuarios{
    async listarUsuarios(){
        try {
            return await usuarioModelo.find().lean()
        } catch (error) {
            console.log(error)
            return null
        }
    }
}