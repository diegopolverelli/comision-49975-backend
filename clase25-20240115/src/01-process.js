import fs from 'fs'

console.log("Directorio del script:", process.cwd())
console.log("ID de proceso:", process.pid)
console.log("Desde donde ejecuto el script:", process.title)
console.log("S.O.:", process.platform)

console.log("path:",process.env.path)
console.log("Argumentos que vienen por consola:", process.argv)
