import {Command, Option} from 'commander'

const programa=new Command()

programa
    .option("-p, --port <port>", "Puerto donde va a escuchar el server", 3000)
    .option("-d, --debug", "Si está presente este flag, se activa al modo debug")
    .option("-n, --numeros [numeros...]", "Numeros para sumar...",[1,2,3])
    .requiredOption("-u, --user <user>", "Usuario que ejecuta el script", )
    .addOption(new Option("-m, --mode <mode>", "Modo de ejecución del script (prod / dev / test)").choices(["dev","test","prod"]).default("dev"))


programa.allowUnknownOption()

programa.parse()

let opts=programa.opts()
console.log(opts)
console.log(opts.numeros)

console.log(programa.args)