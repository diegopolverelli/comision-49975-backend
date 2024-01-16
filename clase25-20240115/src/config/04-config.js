import dotenv from 'dotenv'

dotenv.config(
    {
        override: true,
        path:"./src/.env"
    }
)

export const config={
    PORT:process.env.PORT||8080,
    PRUEBA_PORT:process.env.PRUEBA_PORT,
    MONGO_URL:process.env.MONGO_URL, 
    DBNAME:process.env.DBNAME
}