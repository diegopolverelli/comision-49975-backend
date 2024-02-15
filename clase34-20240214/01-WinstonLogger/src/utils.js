import {fileURLToPath} from 'url';
import { dirname } from 'path';
import winston from 'winston'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;

const funcionTr1=winston.format((info)=>{
    if(typeof info.message==="object"){
        info.message=JSON.stringify(info.message)
    }
    if(info.level==="error"){
        info.fecha=new Date().toUTCString()
        if(typeof info.message==="string"){
            info.message=info.message.toUpperCase()
        }
        return info
    }else{
        return info
    }
})

const logger=winston.createLogger(
    {
        transports: [
            new winston.transports.Console(
                {
                    level: "debug",
                    // format: winston.format.simple()
                    format: winston.format.combine(
                        funcionTr1(),
                        winston.format.colorize(),
                        winston.format.timestamp(),
                        winston.format.simple(),
                    )
                }
            ),
            new winston.transports.Console(
                {
                    level: "silly",
                    // format: winston.format.prettyPrint()
                    format: winston.format.combine(
                        (winston.format((info)=>{
                            if(info.level==="silly"){
                                info.fecha=new Date().toUTCString()
                                if(typeof info.message==="string"){
                                    info.message=info.message.toUpperCase()
                                }
                                return info
                            }
                        }))(),
                        winston.format.prettyPrint()
                    )
                }
            ),
            new winston.transports.File(
                {
                    level:"error",
                    filename:"./src/logs/errorLogs.log",
                    format: winston.format.combine(
                        winston.format.timestamp(),
                        winston.format.json()
                    )
                }
            )
        ]
    }
)


const loggerPersonalizado=winston.createLogger(
    {
        levels:{grave:0, medio:1, leve:2},
        transports:[
            new winston.transports.Console(
                {
                    level: "leve",
                    format: winston.format.combine(
                        winston.format.colorize({
                            colors:{grave:"red", medio:"yellow", leve:"green"}
                        }),
                        winston.format.simple()
                    )
                }
            )
        ]
    }
)


export const middLogg=(req, res, next)=>{
    req.logger=logger
    req.loggerPersonalizado=loggerPersonalizado

    next()
}
