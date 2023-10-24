const fs = require('fs');
const path=require('path');
// const fsPromesas=require('fs').promises;
// fsPromesas.writeFile()


console.log("__dirname:",__dirname);
console.log("__dirname + ruta archivo",__dirname+"/00-archivos/archivos.txt")
console.log(path.join(__dirname,"00-archivos","archivos.txt"))

// let archivo="./00-archivos/archivos.txt";
// let archivo=__dirname+"/00-archivos/archivos.txt";
let archivo=path.join(__dirname,"00-archivos","archivos.txt")

let texto3=`
“Debe trabajar el hombre
Para ganarse su pan;
Pues la miseria, en su afán
De perseguir de mil modos,
Llama a la puerta de todos
Y entra en la del haragán”.

“Muchas cosas pierde el hombre
Que a veces la vuelve a hallar;
Pero los debo enseñar,
Y es güeno que lo recuerden:
Si la vergüenza se pierde,
Jamás se la vuelve a encontrar”.

José Hernandez - fragmento del Martin Fierro`

// fs.promises.writeFile().then

const entorno=async ()=>{
    try {
        await fs.promises.writeFile(archivo, texto3, {encoding:"utf-8"});
        // await fs.existsSync()
        let lectura=await fs.promises.readFile(archivo, "utf-8")
        console.log(lectura)
        await fs.promises.appendFile(archivo, "\n\nEditorial Prentice Hall")

        setTimeout(async() => {
            await fs.promises.unlink(archivo)
        }, 2000);

        return "holis...!!!"
    } catch (error) {
        console.log("Ocurrio un error:", error.message)   
    }
}

entorno().then(res=>console.log(res));
// console.log(entorno())

