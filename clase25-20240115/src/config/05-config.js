import dotenv from 'dotenv'

const mode="prod"

dotenv.config(
    {
        override: true,
        path:mode==="dev"?"./src/.env.development":"./src/.env.production"
    }
)

export const config={
    PORT:process.env.PORT||8080,
    PRUEBA_PORT:process.env.PRUEBA_PORT,
    MONGO_URL:process.env.MONGO_URL, 
    DBNAME:process.env.DBNAME
}