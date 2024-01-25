// import mongoose from "mongoose";
// import { config } from "../config/config.js";

import { DAO } from "../DAO/factory.js"



// import { usuariosFsDAO as DAO } from "../DAO/usuariosFsDAO.js";
// import { usuariosMongoDAO as DAO } from "../DAO/usuariosMongoDAO.js";
// try {
//     await mongoose.connect(config.database.MONGO_URL, {
//         dbName: config.database.DBNAME
//     })
//     console.log("DB Online...!!!")
// } catch (error) {
//     console.log(error)
// }


class UsuariosService{
    constructor(dao){
        this.dao=new dao()
    }

    async getUsers(){
        return await this.dao.get()
    }

    async getUserById(id){
        return await this.dao.getBy({_id:id})
    }

    async getUserByEmail(email){
        return await this.dao.getBy({email})
    }

    async createUser(nombre, email){

        return await this.dao.create({nombre, email})

    }
}

export const usuariosService=new UsuariosService(DAO)