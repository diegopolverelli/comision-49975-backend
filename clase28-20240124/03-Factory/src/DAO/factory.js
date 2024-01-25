import mongoose from 'mongoose'
import { config } from '../config/config.js'

const persistencia=config.generales.PERSISTENCE
export let DAO

switch (persistencia) {
    case "FS":
        let {usuariosFsDAO} = await import("./usuariosFsDAO.js")
        DAO=usuariosFsDAO
        break;

    case "MONGO":
        try {
            await mongoose.connect(config.database.MONGO_URL, {
                dbName: config.database.DBNAME
            })
            console.log("DB Online...!!!")
        } catch (error) {
            console.log(error)
        }
        let {usuariosMongoDAO} = await import("./usuariosMongoDAO.js")
        DAO=usuariosMongoDAO
        break;

    default:
        console.log("Error en persistencia seleccionada...!!!")
        process.exit()
        break;
}