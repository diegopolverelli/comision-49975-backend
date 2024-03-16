import {Sequelize} from "sequelize"

const sequelize=new Sequelize("", "root", "123", {
    host:"localhost", port:"3306", dialect:"mysql",
    // logging: false,
})

const nombreBD="basePrueba"

async function creaDB(){
    try {
        await sequelize.query(`CREATE DATABASE IF NOT EXISTS ${nombreBD}`)
        console.log("DB Creada...!!!")
    } catch (error) {
        console.log("Error al crear DB. Detalle:"+error.message)
    } finally {
        sequelize.close()
    }
}

creaDB()