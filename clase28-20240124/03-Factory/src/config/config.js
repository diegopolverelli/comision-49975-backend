import dotenv from 'dotenv'

dotenv.config({
    override:true,
    path:"./src/.env"
})

export const config={
    generales:{
        PORT:process.env.PORT||3000,
        PERSISTENCE:process.env.PERSISTENCE||"FS"
    },
    database:{
        MONGO_URL:process.env.MONGO_URL,
        DBNAME:process.env.DBNAME
    }
}