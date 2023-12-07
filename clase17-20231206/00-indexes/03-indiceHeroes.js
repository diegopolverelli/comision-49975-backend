import mongoose from "mongoose";

const heroesEsquema = new mongoose.Schema({
    id: {
        type: Number
    },
    name: String,
    alias: String, 
    powers: {
        type: [String]
    }, 
    team: String,
    publisher: String,
    enemies:{
        type: [
            {
                name: String,
                powers: {
                    type: [
                        String
                    ]
                }
            }
        ]
    }

}, { collection: 'heroes' })

heroesEsquema.index({'enemies.name':-1})

export const heroesModelo = mongoose.model('heroes', heroesEsquema)

try {
    await mongoose.connect('mongodb+srv://backend49975:CoderCoder@cluster0.dxc9fdl.mongodb.net/?retryWrites=true&w=majority&dbName=clase17')
    console.log(`Conexión a DB establecida`)

    let resultado=await heroesModelo.find({'enemies.name':'Ajax'})
    console.log(JSON.stringify(resultado, null, 5))

    resultado=await heroesModelo.find({'enemies.name':'Ajax'}).explain('executionStats')
    console.log(JSON.stringify(resultado.executionStats, null, 5))

} catch (error) {
    console.log(error.message)
}

process.exit()
