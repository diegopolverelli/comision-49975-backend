const fs = require('fs');

let archivoLectura='./00-archivos/package.json'
let archivoNuevo='./00-archivos/packageINFO.json'

const entorno=async()=>{

    try {
        let contenidoStr=await fs.promises.readFile(archivoLectura, "utf-8")
        let contenidoObj=JSON.parse(contenidoStr)
        let size=fs.statSync(archivoLectura).size
    
        const info={
            contenidoStr, contenidoObj, size
        }
    
        await fs.promises.writeFile(archivoNuevo, JSON.stringify(info, null, 5))
    } catch (error) {
        throw new Error("Ocurrió un error "+error.message)        
    }

}

entorno()