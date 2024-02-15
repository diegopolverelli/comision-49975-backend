import {fileURLToPath} from 'url';
import { dirname } from 'path';
import winston from 'winston'
import { config } from './config/config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;

const logger=winston.createLogger(
    {
        transports:[
            new winston.transports.File(
                {
                    level:"error", 
                    filename: "./src/logs/errorLogs.log",
                    format: winston.format.combine(
                        winston.format.timestamp(),
                        winston.format.json()
                    )
                }
            ),
            new winston.transports.File(
                {
                    level:"warn", 
                    filename: "./src/logs/warningLogs.log",
                    format: winston.format.combine(
                        winston.format.timestamp(),
                        winston.format.json()
                    )
                }
            )
        ]
    }
)


const transporteConsola=new winston.transports.Console(
    {
        level: "silly",
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
        )
    }
)

if(config.MODE==="development"){
    console.log("ingreso")
    logger.add(transporteConsola)
}


export const middLogg=(req, res, next)=>{
    req.logger=logger

    next()
}


