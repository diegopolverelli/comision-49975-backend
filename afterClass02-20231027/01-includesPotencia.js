const path=require('path')
let numeros=[1,2,3,4,5]
console.log("incluye el 7???",numeros.includes(7))
console.log("incluye el 3???",numeros.includes(3))


console.log("Dirname:", __dirname)
let rutaAbsoluta=path.join(__dirname,"archivos","archivo.txt")
console.log(rutaAbsoluta)

let nombres=['Martina', 'Mariela', 'Sandra', 'Ana', 'Jimena', 'Marcelo', 'Julian', 'Ernesto']
console.log("incluye Sandra???",nombres.includes("Sandra"))
console.log("incluye el Maxi???",nombres.includes("Maxi"))

let texto=`En cierta ocasión en que el padre Nicanor llevó al 
castaño un tablero y una caja de fichas para invitarlo a jugar a las 
damas, José Arcadio Buendía no aceptó, según dijo, porque nunca 
pudo entender el sentido de una contienda entre dos adversarios que 
estaban de acuerdo en los principios`

console.log("Texto incluye 'tablero'?",texto.includes("tablero"))

