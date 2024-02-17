export const TIPOS_ERROR={
    ARGUMENTOS:400,
    VALIDACION:400, 
    DB:500,
    AUTENTICACION:401,
    AUTORIZACION:403,
    SERVER:500,
    INDETERMINADO:500
}

// https://refactoring.guru/es/design-patterns/factory-method

// https://github.com/andersontr15/clean-code-javascript-es?tab=readme-ov-file#solid

// http://localhost:3000/api/sessions/callbackGithub
// App ID: 726405

// Client ID: Iv1.6e12a2c1f628e300
// 0acf1b1bd8d61a94399b97c39fc76f1ed41f7e3e

// Guardar imagenes en MongoDB (tamaño mayor a 16m):
// https://www.mongodb.com/docs/drivers/node/current/fundamentals/gridfs/


// URI Conexión MongoDB Atlas
// 'mongodb+srv://backend49975:CoderCoder@cluster0.dxc9fdl.mongodb.net/?retryWrites=true&w=majority&dbName=clase14'
// 'mongodb://127.0.0.1:27017/pruebas_mongo'

// Var entorno con powerShell:
// $env:NOMBRE_VARIABLE = "valor"
// echo $env:MONGO_URL

// Var entorno con CMD:
// set NOMBRE_VARIABLE=valor
// echo %NOMBRE_VARIABLE%


// especificar colección en el esquema:
const usuariosEsquema= new Schema({
    nombre: String,
    apellido: String,
    codigo: Number,

},{collection:'usuariosBig'});


// Configurar express-handlebars para que tome lectura de Atlas
app.engine('handlebars', engine({
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}));


// timestamps en mongoose (createdAt y updatedAt)
const schema=moongoose.Schema({

},{timestamps:true, strict:false})

// {timestamps:{updatedAt:"fecMod", createdAt:"fecAlt"}}


// zona horaria en NodeJS
const nDate = new Date().toLocaleString('es-AR', {
    timeZone: 'America/Argentina/Buenos_Aires'
});


// autoimportacion VSCode???
// https://stackoverflow.com/questions/62503006/vscode-add-js-extension-on-import-autocomplete

// Configuracion Nest, para ValidationPipe, a nivel endpoint, para verificar lo que llega por un body
//   @Post()
//   create(@Body(new ValidationPipe({whitelist: true, forbidNonWhitelisted: true,})) createUsuarioDto: CreateUsuarioDto) {
//     const usuarioCreado = this.usuariosService.create(createUsuarioDto);
//     return {status:'success', usuarioCreado}
//   }

// Instalaciones requeridas para ValidationPipe
// yarn add class-validator class-transformer

// Validaciones concretas (se realizan sobre el tipo de datos asociado a la variable decorada; CreateUserDto en este caso)
// import { IsOptional, IsString } from "class-validator";
// export class CreateUserDto {
//   @IsString()
//   @IsOptional()
//   first_name: any;

//   @IsString()
//   email: any;

//   @IsString()
//   password: any;
// }

// Validaciones posibles incluidas en class-validator
https://github.com/typestack/class-validator#validation-decorators

// Configuración de Nest, para ValidationPipe, a nivel app;
  app.useGlobalPipes( 
    new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    })
   );




// Muestra versión de Node, y datos del sistema operativo y cpu's
console.log(process.version);
console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());

// Valida que un dato sea un Objeto Id de Mongo válido. 
if (mongoose.Types.ObjectId.isValid(idUsuario)) {
  // El valor proporcionado es un ObjectId válido
}

// Para instalar Jest y usar imports del EM6. Se usa Babel
//https://babeljs.io/setup#installation
//https://jestjs.io/es-ES/docs/expect


// Función para filtrar arrays, enviando como parámetro un objeto
function filtrarPorObjeto(array, filtro) {
    // return array.filter((elemento) =>
    //     Object.entries(filtro).every(([clave, valor]) => elemento[clave] === valor)
    // );

    return array.filter((elemento) =>{
        
        console.log(Object.entries(filtro))
        let resultado=Object.entries(filtro).every(([clave, valor]) => elemento[clave] === valor)
        return resultado
    }
    );
}





// Ejemplo petición con librería Axios:
const peticionConAxios=(res)=>{
  //construimos nuestra peticion
  const myInit = {
    method: 'GET',
    headers: {
      // 'Authorization': token
    },
    mode: 'cors',
    cache: 'default'
  };

  // let destination = 'http://www.simiapi.com/ApiSimiweb/response/v21/inmueblesDestacados/total/:cantidad';
  let destination = 'http://localhost:3000/login';

  //obtenemos los resultados
  axios.get(destination, myInit)
    .then((result) => {
      console.clear()
      console.log(result.data)
      res.send(result.data)
    })
    .catch((error) => {
      console.error(error)
    })
}



// Configurar cabeceras y cors
const corsPersonalizado=(req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
};



// Commander, opciones complejas:
program.addOption(new Option('-p, --port <number>', 'specify port number')
  .default(80, 'puerto por defecto: 80')
  .env('PORT')
);

program.addOption(new Option('-s, --size <type>', 'specify size of screen')
  .choices(['small', 'medium', 'large'])
  .env('SIZE')
);


// Recuperar token de un header (alternativamente se puede hacer con split(' ') y tomar el [1]
auth = auth.substring("Bearer ".length() - 1, auth.length());

https://github.com/diegopolverelli/Programacion-Backend-51080-ejercicios-clase

// excluir carpetas de nodemon:
// CLI:
// nodemon --ignore ./src/sessions/ ./src/appSession.js
// package.json:
//   "scripts": {
//     "start": "nodemon --ignore ./src/sessions/ ./src/appSession.js",
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },

// generar un nodemon.json con este contenido, en la misma carpeta donde está
// package.json (o desde donde ejecutemos nodemon):
// {
//     "ignore":["*.json"]
// }


// zona horaria en NodeJS
// const nDate = new Date().toLocaleString('es-AR', {
//     timeZone: 'America/Argentina/Buenos_Aires'
// });


// timestamps en mongoose (createdAt y updatedAt)
// const schema=moongoose.Schema({

// },{timestamps:true})




// envio de datos vía script de JavaScript:
/*
<script>
    const form  = document.getElementById('loginForm');
    form.addEventListener('submit',evt=>{
        evt.preventDefault();
        const data = new FormData(form);
        console.log(data)
        const obj = {};
        data.forEach((value,key)=>obj[key]=value);
        console.log(obj)

        const email = document.getElementById("email").value
        const password = document.getElementById("password").value

        const body = { email, password }

        console.log(body);

        fetch('/api/sessions/login',{
            method:'POST',
            body:JSON.stringify(body),
            headers: {
                'Content-Type':'application/json'
            }
        }).then(result=>{
            console.log(result.status)
            return result.json()
        }).then(json=>{
            console.log(json);
            localStorage.setItem('CoderToken',json.token)
            document.cookie=`CoderToken=${json.token};max-age=3600`
            document.location.href=`/?token=${json.token}`;
        });
    })
</script>
*/

/*
<script>
    let datos=document.getElementById('datos');
    let btnDatos=document.getElementById('btnDatos');

    btnDatos.addEventListener('click',(e)=>{
        e.preventDefault();

        fetch('/datos',{
            method:'GET',
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Bearer '+localStorage.getItem('CoderToken')
            }
        }).then(result=>{
            return result.text()
        }).then(data=>{
            datos.innerHTML=data;

            let cookies=document.cookie;
            console.log(cookies) 
        });


    })
</script>
*/



    // misResponses(req, res, next){
    //     res.sendSuccess = payload => res.send({status: "success", payload})
    //     res.sendServerError = error => res.status(500).send({status: "error", error })
    //     res.sendUserError = error => res.status(400).send({status: "error", error})
    //     res.sendNoAuthenticatedError = error => res.status(401).send({status: "error", error})
    //     res.sendNoAuthorizatedError = error => res.status(403).send({status: "error", error})
        
    //     next()
    // }




    handlePolicies = policies => (req, res, next) => {
        if(policies.includes('PUBLIC')) return next()

        if(policies.length > 0) {
            const authHeaders = req.headers.authorization
            if(!authHeaders) return res.sendNoAuthenticatedError('Unauthenticated')

            const tokenArray = authHeaders.split(" ")
            const token = (tokenArray.length > 1) ? tokenArray[1] : tokenArray[0]

            const user = jwt.verify(token, 'secret')

            if(!policies.includes(user.role.toUpperCase()) ) {
                return res.sendNoAuthorizatedError("Unauthorizated")
            }

            req.user = user
            return next()
        }

        next()
    }








// variables como objects keys:
var foo = 'Hello',
    bar = 'World';
 
var myObj = {};
myObj[foo] = bar; 




// Códigos ANSI básicos para dar formato al texto en la terminal:

//         Colores:
//         \x1b[30m - Negro
//         \x1b[31m - Rojo
//         \x1b[32m - Verde
//         \x1b[33m - Amarillo
//         \x1b[34m - Azul
//         \x1b[35m - Magenta
//         \x1b[36m - Cyan
//         \x1b[37m - Blanco

//         Estilo de fuente:
//         \x1b[1m - Negrita
//         \x1b[3m - Itálica
//         \x1b[4m - Subrayado
//         \x1b[22m - Quitar negrita
//         \x1b[23m - Quitar itálica
//         \x1b[24m - Quitar subrayado

//         Color de fondo:
//         \x1b[40m - Negro
//         \x1b[41m - Rojo
//         \x1b[42m - Verde
//         \x1b[43m - Amarillo
//         \x1b[44m - Azul
//         \x1b[45m - Magenta
//         \x1b[46m - Cyan
//         \x1b[47m - Blanco

//         Resetear el estilo de fuente:
//         \x1b[0m

//         Para utilizar estos códigos en un string, debes concatenarlos al inicio del texto que quieras formatear y luego concatenar el código para resetear el estilo al final del texto.
//  EJ:    console.log('\x1b[34m\x1b[1mEjemplo\x1b[0m');






const path=require('path')
const fs=require('fs')

let ruta=path.join(__dirname,'archivos','usuarios.json') 

function getUsers(){
    if(fs.existsSync(ruta)){
        return JSON.parse(fs.readFileSync(ruta,'utf-8'))
    }else{
        return []
    }
}

function saveUsers(users){
    fs.writeFileSync(ruta, JSON.stringify(users, null, 5))    
}

// npm:
// npm list   --depth=4 // lista dependencias; Recursivas, hasta 4to nivel
// npm ls dependencia   // busca la dependencia en node_modules (raíz, y sub dependencias)
// npm info dependencia // busca en internet, info de la dependencia
// npm view dependencia // idem npm info


// http://localhost:3000/socket.io/socket.io.js

// https://www.youtube.com/watch?v=wfogZfIS03U     Expresiones Regulares 

// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet

// Ejemplos de expresiones regulares que sirven para validar emails (ej. para
// correr con JavaScript):
// Patrón corto
let reCorto = /\S+@\S+\.\S+/
// Patrón Medio
let reMedio = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/
// Patrón Largo
let reLargo = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
let res=reCorto.test('prueba@correo.com') // true
console.log(res)
res=reMedio.test('prueba@correo.com') // true
console.log(res)
res=reLargo.test('prueba@correo.com') // true
console.log(res)

// --------------------------------------
// --------------------------------------
// --------------------------------------


// nodemon.json
// {
//     "ignore": ["*.json", "*.js"]
// }


let heroesConVillanos = [
    {
        id: 1,
        name: "Spider-Man",
        alias: "Peter Parker",
        powers: ["Wall-crawling", "Web-shooting", "Superhuman strength"],
        team: "Avengers",
        publisher: "Marvel",
        enemies: [
            { name: "Green Goblin", powers: ["Advanced technology", "Glider"] },
            { name: "Venom", powers: ["Symbiote bonding", "Superhuman strength"] },
            { name: "Doctor Octopus", powers: ["Mechanical arms", "Genius intellect"] },
            { name: "Sandman", powers: ["Shape-shifting sand body", "Superhuman strength"] }
        ]
    },
    {
        id: 2,
        name: "Superman",
        alias: "Clark Kent",
        powers: ["Superhuman strength", "Flight", "Heat vision"],
        team: "Justice League",
        publisher: "DC",
        enemies: [
            { name: "Lex Luthor", powers: ["Genius intellect", "Wealth"] },
            { name: "Doomsday", powers: ["Invulnerability", "Adaptive evolution"] },
            { name: "Brainiac", powers: ["Advanced technology", "Superhuman intellect"] },
            { name: "Darkseid", powers: ["Omega beams", "Superhuman strength"] }
        ]
    },
    {
        id: 3,
        name: "Iron Man",
        alias: "Tony Stark",
        powers: ["Powered armor", "Genius-level intellect", "Flight"],
        team: "Avengers",
        publisher: "Marvel",
        enemies: [
            { name: "Mandarin", powers: ["Rings of power", "Mystical abilities"] },
            { name: "Whiplash", powers: ["Whips with energy projection", "Engineering skills"] },
            { name: "Obadiah Stane", powers: ["Advanced technology", "Business acumen"] },
            { name: "Ultron", powers: ["Artificial intelligence", "Advanced weaponry"] }
        ]
    },
    {
        id: 4,
        name: "Wonder Woman",
        alias: "Diana Prince",
        powers: ["Superhuman strength", "Lasso of Truth", "Flight"],
        team: "Justice League",
        publisher: "DC",
        enemies: [
            { name: "Ares", powers: ["God of War", "Immortality"] },
            { name: "Cheetah", powers: ["Enhanced strength", "Agility"] },
            { name: "Circe", powers: ["Magic spells", "Immortality"] },
            { name: "Darkseid", powers: ["Omega beams", "Superhuman strength"] }
        ]
    },
    {
        id: 5,
        name: "Black Widow",
        alias: "Natasha Romanoff",
        powers: ["Expert spy", "Skilled hand-to-hand combatant", "Weaponry"],
        team: "Avengers",
        publisher: "Marvel",
        enemies: [
            { name: "Taskmaster", powers: ["Photographic reflexes", "Martial arts skills"] },
            { name: "Red Guardian", powers: ["Enhanced strength", "Soviet super-soldier serum"] },
            { name: "Winter Soldier", powers: ["Bionic arm", "Assassin training"] }
        ]
    },
    {
        id: 6,
        name: "Batman",
        alias: "Bruce Wayne",
        powers: ["Intelligence", "Peak human physical condition", "Advanced technology"],
        team: "Justice League",
        publisher: "DC",
        enemies: [
            { name: "Joker", powers: ["Criminal mastermind", "Maniacal humor"] },
            { name: "Two-Face", powers: ["Dual personality", "Coin-based decisions"] },
            { name: "Penguin", powers: ["Criminal underworld connections", "Trick umbrellas"] },
            { name: "Ra's al Ghul", powers: ["Immortality", "Martial arts mastery"] }
        ]
    },
    {
        id: 7,
        name: "Aquaman",
        alias: "Arthur Curry",
        powers: ["Superhuman strength", "Hydrokinesis", "Telepathy with sea life"],
        team: "Justice League",
        publisher: "DC",
        enemies: [
            { name: "Black Manta", powers: ["Advanced technology", "Underwater combat skills"] },
            { name: "Ocean Master", powers: ["Control over sea and weather", "Trident mastery"] },
            { name: "King Shark", powers: ["Superhuman strength", "Shark-like attributes"] }
        ]
    },
    {
        id: 8,
        name: "Captain America",
        alias: "Steve Rogers",
        powers: ["Superhuman strength", "Enhanced agility", "Indomitable will"],
        team: "Avengers",
        publisher: "Marvel",
        enemies: [
            { name: "Red Skull", powers: ["Superhuman intellect", "Adversarial combat skills"] },
            { name: "Winter Soldier", powers: ["Bionic arm", "Assassin training"] },
            { name: "Crossbones", powers: ["Enhanced strength", "Expert combatant"] }
        ]
    },
    {
        id: 9,
        name: "Flash",
        alias: "Barry Allen",
        powers: ["Super speed", "Time travel", "Speed force manipulation"],
        team: "Justice League",
        publisher: "DC",
        enemies: [
            { name: "Reverse-Flash", powers: ["Speedster abilities", "Time manipulation"] },
            { name: "Zoom", powers: ["Temporal manipulation", "Speedster abilities"] },
            { name: "Captain Cold", powers: ["Cryogenic weaponry", "Cold generation"] },
            { name: "Gorilla Grodd", powers: ["Telepathy", "Enhanced intelligence"] }
        ]
    },
    {
        id: 10,
        name: "Black Panther",
        alias: "T'Challa",
        powers: ["Enhanced senses", "Vibranium suit", "Skilled warrior"],
        team: "Avengers",
        publisher: "Marvel",
        enemies: [
            { name: "Killmonger", powers: ["Enhanced strength", "Wakandan combat training"] },
            { name: "Man-Ape", powers: ["Enhanced strength", "Gorilla-like abilities"] },
            { name: "Klaw", powers: ["Sonic emitter", "Vibranium manipulation"] }
        ]
    },
    {
        id: 11,
        name: "Green Lantern",
        alias: "Hal Jordan",
        powers: ["Ring-generated constructs", "Flight", "Energy manipulation"],
        team: "Justice League",
        publisher: "DC",
        enemies: [
            { name: "Sinestro", powers: ["Yellow power ring", "Fear manipulation"] },
            { name: "Atrocitus", powers: ["Red power ring", "Rage empowerment"] },
            { name: "Parallax", powers: ["Fear embodiment", "Reality manipulation"] }
        ]
    },
    {
        id: 12,
        name: "Thor",
        alias: "Thor Odinson",
        powers: ["Mjolnir (hammer)", "Control over lightning", "Superhuman durability"],
        team: "Avengers",
        publisher: "Marvel",
        enemies: [
            { name: "Loki", powers: ["Trickery", "Sorcery"] },
            { name: "Hela", powers: ["Death magic", "Immortality"] },
            { name: "Malekith", powers: ["Dark magic", "Reality manipulation"] },
            { name: "Surtur", powers: ["Fire manipulation", "Giant form"] }
        ]
    },
    {
        id: 13,
        name: "Batwoman",
        alias: "Kate Kane",
        powers: ["Martial arts", "Detective skills", "Advanced technology"],
        team: "Bat Family",
        publisher: "DC",
        enemies: [
            { name: "Alice", powers: ["Madness manipulation", "Martial arts"] },
            { name: "Mad Hatter", powers: ["Mind control technology", "Obsession with hats"] },
            { name: "The Many Arms of Death", powers: ["Assassin skills", "Mercenary group"] }
        ]
    },
    {
        id: 14,
        name: "Hulk",
        alias: "Bruce Banner",
        powers: ["Superhuman strength", "Invulnerability", "Regenerative healing"],
        team: "Avengers",
        publisher: "Marvel",
        enemies: [
            { name: "Abomination", powers: ["Enhanced strength", "Regeneration"] },
            { name: "The Leader", powers: ["Genius intellect", "Gamma radiation manipulation"] },
            { name: "Red Hulk", powers: ["Superhuman strength", "Heat manipulation"] }
        ]
    },
    {
        id: 15,
        name: "Zatanna",
        alias: "Zatanna Zatara",
        powers: ["Magic spells", "Sorcery", "Illusion manipulation"],
        team: "Justice League Dark",
        publisher: "DC",
        enemies: [
            { name: "Constantine", powers: ["Occult knowledge", "Hellblazer abilities"] },
            { name: "Nick Necro", powers: ["Dark magic", "Necromancy"] },
            { name: "Felix Faust", powers: ["Sorcery", "Dark rituals"] }
        ]
    },
    {
        id: 16,
        name: "Doctor Strange",
        alias: "Stephen Strange",
        powers: ["Mystic arts", "Reality manipulation", "Dimensional travel"],
        team: "Defenders",
        publisher: "Marvel",
        enemies: [
            { name: "Baron Mordo", powers: ["Sorcery", "Dark magic"] },
            { name: "Dormammu", powers: ["Dark dimension ruler", "Reality manipulation"] },
            { name: "Shuma-Gorath", powers: ["Chaos magic", "Reality warping"] }
        ]
    },
    {
        id: 17,
        name: "Green Arrow",
        alias: "Oliver Queen",
        powers: ["Archery skills", "Peak human physical condition", "Strategic mind"],
        team: "Justice League",
        publisher: "DC",
        enemies: [
            { name: "Deathstroke", powers: ["Enhanced strength", "Master tactician"] },
            { name: "Merlyn", powers: ["Expert marksman", "Assassin skills"] },
            { name: "Komodo", powers: ["Archery skills", "Biological enhancements"] }
        ]
    },
    {
        id: 18,
        name: "Scarlet Witch",
        alias: "Wanda Maximoff",
        powers: ["Reality manipulation", "Energy projection", "Telekinesis"],
        team: "Avengers",
        publisher: "Marvel",
        enemies: [
            { name: "Agatha Harkness", powers: ["Witchcraft", "Mentor to Scarlet Witch"] },
            { name: "Chthon", powers: ["Elder God", "Dark magic"] },
            { name: "Magneto", powers: ["Magnetism manipulation", "Master strategist"] }
        ]
    },
    {
        id: 19,
        name: "Martian Manhunter",
        alias: "J'onn J'onzz",
        powers: ["Shape-shifting", "Telepathy", "Super strength"],
        team: "Justice League",
        publisher: "DC",
        enemies: [
            { name: "Ma'alefa'ak", powers: ["Fire manipulation", "Mental abilities"] },
            { name: "White Martians", powers: ["Advanced shape-shifting", "Psychic powers"] },
            { name: "Fernus", powers: ["Fire manipulation", "Psychic powers"] }
        ]
    },
    {
        id: 20,
        name: "Deadpool",
        alias: "Wade Wilson",
        powers: ["Regenerative healing", "Expert marksman", "Fourth wall breaking"],
        team: "None",
        publisher: "Marvel",
        enemies: [
            { name: "Taskmaster", powers: ["Photographic reflexes", "Martial arts skills"] },
            { name: "Cable", powers: ["Telekinesis", "Time travel"] },
            { name: "Ajax", powers: ["Enhanced strength", "Regeneration"] }
        ]
    }
];

let heroes = [
    {
        id: 1,
        name: "Spider-Man",
        alias: "Peter Parker",
        powers: ["Wall-crawling", "Web-shooting", "Superhuman strength"],
        team: "Avengers",
        publisher: "Marvel"
    },
    {
        id: 2,
        name: "Superman",
        alias: "Clark Kent",
        powers: ["Superhuman strength", "Flight", "Heat vision"],
        team: "Justice League",
        publisher: "DC"
    },
    {
        id: 3,
        name: "Iron Man",
        alias: "Tony Stark",
        powers: ["Powered armor", "Genius-level intellect", "Flight"],
        team: "Avengers",
        publisher: "Marvel"
    },
    {
        id: 4,
        name: "Wonder Woman",
        alias: "Diana Prince",
        powers: ["Superhuman strength", "Lasso of Truth", "Flight"],
        team: "Justice League",
        publisher: "DC"
    },
    {
        id: 5,
        name: "Black Widow",
        alias: "Natasha Romanoff",
        powers: ["Expert spy", "Skilled hand-to-hand combatant", "Weaponry"],
        team: "Avengers",
        publisher: "Marvel"
    },
    {
        id: 6,
        name: "Batman",
        alias: "Bruce Wayne",
        powers: ["Intelligence", "Peak human physical condition", "Advanced technology"],
        team: "Justice League",
        publisher: "DC"
    },
    {
        id: 7,
        name: "Aquaman",
        alias: "Arthur Curry",
        powers: ["Superhuman strength", "Hydrokinesis", "Telepathy with sea life"],
        team: "Justice League",
        publisher: "DC"
    },
    {
        id: 8,
        name: "Captain America",
        alias: "Steve Rogers",
        powers: ["Superhuman strength", "Enhanced agility", "Indomitable will"],
        team: "Avengers",
        publisher: "Marvel"
    },
    {
        id: 9,
        name: "Flash",
        alias: "Barry Allen",
        powers: ["Super speed", "Time travel", "Speed force manipulation"],
        team: "Justice League",
        publisher: "DC"
    },
    {
        id: 10,
        name: "Black Panther",
        alias: "T'Challa",
        powers: ["Enhanced senses", "Vibranium suit", "Skilled warrior"],
        team: "Avengers",
        publisher: "Marvel"
    },
    {
        id: 11,
        name: "Green Lantern",
        alias: "Hal Jordan",
        powers: ["Ring-generated constructs", "Flight", "Energy manipulation"],
        team: "Justice League",
        publisher: "DC"
    },
    {
        id: 12,
        name: "Thor",
        alias: "Thor Odinson",
        powers: ["Mjolnir (hammer)", "Control over lightning", "Superhuman durability"],
        team: "Avengers",
        publisher: "Marvel"
    },
    {
        id: 13,
        name: "Batwoman",
        alias: "Kate Kane",
        powers: ["Martial arts", "Detective skills", "Advanced technology"],
        team: "Bat Family",
        publisher: "DC"
    },
    {
        id: 14,
        name: "Hulk",
        alias: "Bruce Banner",
        powers: ["Superhuman strength", "Invulnerability", "Regenerative healing"],
        team: "Avengers",
        publisher: "Marvel"
    },
    {
        id: 15,
        name: "Zatanna",
        alias: "Zatanna Zatara",
        powers: ["Magic spells", "Sorcery", "Illusion manipulation"],
        team: "Justice League Dark",
        publisher: "DC"
    },
    {
        id: 16,
        name: "Doctor Strange",
        alias: "Stephen Strange",
        powers: ["Mystic arts", "Reality manipulation", "Dimensional travel"],
        team: "Defenders",
        publisher: "Marvel"
    },
    {
        id: 17,
        name: "Green Arrow",
        alias: "Oliver Queen",
        powers: ["Archery skills", "Peak human physical condition", "Strategic mind"],
        team: "Justice League",
        publisher: "DC"
    },
    {
        id: 18,
        name: "Scarlet Witch",
        alias: "Wanda Maximoff",
        powers: ["Reality manipulation", "Energy projection", "Telekinesis"],
        team: "Avengers",
        publisher: "Marvel"
    },
    {
        id: 19,
        name: "Martian Manhunter",
        alias: "J'onn J'onzz",
        powers: ["Shape-shifting", "Telepathy", "Super strength"],
        team: "Justice League",
        publisher: "DC"
    },
    {
        id: 20,
        name: "Deadpool",
        alias: "Wade Wilson",
        powers: ["Regenerative healing", "Expert marksman", "Fourth wall breaking"],
        team: "None",
        publisher: "Marvel"
    }
];

let villanos = [
    {
        id: 1,
        name: "Joker",
        alias: "Unknown",
        powers: ["Criminal mastermind", "Insanity", "Trickery"],
        team: "Injustice League",
        publisher: "DC"
    },
    {
        id: 2,
        name: "Magneto",
        alias: "Erik Lehnsherr",
        powers: ["Magnetism manipulation", "Control over metal", "Leadership"],
        team: "Brotherhood of Mutants",
        publisher: "Marvel"
    },
    {
        id: 3,
        name: "Lex Luthor",
        alias: "Alexander Luthor",
        powers: ["Genius-level intellect", "Wealth", "Power suit"],
        team: "Injustice League",
        publisher: "DC"
    },
    {
        id: 4,
        name: "Loki",
        alias: "Loki Laufeyson",
        powers: ["Shape-shifting", "Illusions", "Sorcery"],
        team: "Asgardian rogues",
        publisher: "Marvel"
    },
    {
        id: 5,
        name: "Two-Face",
        alias: "Harvey Dent",
        powers: ["Duality obsession", "Coin flipping", "Expert marksman"],
        team: "None",
        publisher: "DC"
    },
    {
        id: 6,
        name: "Green Goblin",
        alias: "Norman Osborn",
        powers: ["Superhuman strength", "Glider flight", "Goblin gadgets"],
        team: "Sinister Six",
        publisher: "Marvel"
    },
    {
        id: 7,
        name: "Darkseid",
        alias: "Uxas",
        powers: ["Omega Beams", "Superhuman strength", "Immortality"],
        team: "New Gods",
        publisher: "DC"
    },
    {
        id: 8,
        name: "Thanos",
        alias: "Thanos",
        powers: ["Superhuman strength", "Reality manipulation", "Infinity Gauntlet"],
        team: "Black Order",
        publisher: "Marvel"
    },
    {
        id: 9,
        name: "Catwoman",
        alias: "Selina Kyle",
        powers: ["Acrobatics", "Thievery skills", "Whip mastery"],
        team: "None",
        publisher: "DC"
    },
    {
        id: 10,
        name: "Doctor Doom",
        alias: "Victor von Doom",
        powers: ["Genius-level intellect", "Armor suit", "Sorcery"],
        team: "None",
        publisher: "Marvel"
    },
    {
        id: 11,
        name: "Harley Quinn",
        alias: "Harleen Quinzel",
        powers: ["Acrobatics", "Deadly weapons", "Unpredictability"],
        team: "Injustice League",
        publisher: "DC"
    },
    {
        id: 12,
        name: "Sabretooth",
        alias: "Victor Creed",
        powers: ["Superhuman strength", "Enhanced senses", "Regenerative healing"],
        team: "Brotherhood of Mutants",
        publisher: "Marvel"
    },
    {
        id: 13,
        name: "Ra's al Ghul",
        alias: "Unknown",
        powers: ["Longevity", "Martial arts mastery", "Strategic genius"],
        team: "League of Assassins",
        publisher: "DC"
    },
    {
        id: 14,
        name: "Venom",
        alias: "Eddie Brock",
        powers: ["Symbiote bonding", "Superhuman strength", "Shape-shifting"],
        team: "None",
        publisher: "Marvel"
    },
    {
        id: 15,
        name: "Deathstroke",
        alias: "Slade Wilson",
        powers: ["Enhanced strength", "Master tactician", "Regenerative healing"],
        team: "Injustice League",
        publisher: "DC"
    },
    {
        id: 16,
        name: "Mystique",
        alias: "Raven Darkholme",
        powers: ["Shape-shifting", "Agility", "Combat expertise"],
        team: "Brotherhood of Mutants",
        publisher: "Marvel"
    },
    {
        id: 17,
        name: "Penguin",
        alias: "Oswald Cobblepot",
        powers: ["Cunning mind", "Wealth", "Umbrella gadgets"],
        team: "None",
        publisher: "DC"
    },
    {
        id: 18,
        name: "Red Skull",
        alias: "Johann Schmidt",
        powers: ["Strategic genius", "Superhuman durability", "Hatred for Captain America"],
        team: "Hydra",
        publisher: "Marvel"
    },
    {
        id: 19,
        name: "Enchantress",
        alias: "June Moone",
        powers: ["Magic spells", "Sorcery", "Reality manipulation"],
        team: "Suicide Squad",
        publisher: "DC"
    },
    {
        id: 20,
        name: "Kingpin",
        alias: "Wilson Fisk",
        powers: ["Superhuman strength", "Master tactician", "Criminal empire"],
        team: "None",
        publisher: "Marvel"
    }
];

let pets = [
    {
        id: 1,
        breed: "Labrador Retriever",
        origin: "United Kingdom",
        size: "Large",
        temperament: ["Outgoing", "Even-tempered", "Gentle"],
        lifespan: "10-12 years"
    },
    {
        id: 2,
        breed: "German Shepherd",
        origin: "Germany",
        size: "Large",
        temperament: ["Loyal", "Intelligent", "Confident"],
        lifespan: "9-13 years"
    },
    {
        id: 3,
        breed: "Golden Retriever",
        origin: "United Kingdom",
        size: "Large",
        temperament: ["Intelligent", "Friendly", "Devoted"],
        lifespan: "10-12 years"
    },
    {
        id: 4,
        breed: "French Bulldog",
        origin: "France",
        size: "Small",
        temperament: ["Adaptable", "Playful", "Affectionate"],
        lifespan: "10-12 years"
    },
    {
        id: 5,
        breed: "Bulldog",
        origin: "United Kingdom",
        size: "Medium",
        temperament: ["Docile", "Willful", "Friendly"],
        lifespan: "8-10 years"
    },
    {
        id: 6,
        breed: "Poodle",
        origin: "Germany / France",
        size: "Various (Standard, Miniature, Toy)",
        temperament: ["Intelligent", "Active", "Alert"],
        lifespan: "10-18 years"
    },
    {
        id: 7,
        breed: "Beagle",
        origin: "United Kingdom",
        size: "Small",
        temperament: ["Friendly", "Curious", "Merry"],
        lifespan: "10-15 years"
    },
    {
        id: 8,
        breed: "Rottweiler",
        origin: "Germany",
        size: "Large",
        temperament: ["Good-natured", "Loyal", "Courageous"],
        lifespan: "8-10 years"
    },
    {
        id: 9,
        breed: "Yorkshire Terrier",
        origin: "United Kingdom",
        size: "Small",
        temperament: ["Affectionate", "Sprightly", "Tomboyish"],
        lifespan: "12-15 years"
    },
    {
        id: 10,
        breed: "Dachshund",
        origin: "Germany",
        size: "Small",
        temperament: ["Clever", "Stubborn", "Devoted"],
        lifespan: "12-16 years"
    },
]

const starWarsCharacters = [
    {
        id: 1,
        name: "Luke Skywalker",
        affiliation: "Hero",
        species: "Human",
        weapon: "Lightsaber",
        side: "Light"
    },
    {
        id: 2,
        name: "Darth Vader",
        affiliation: "Villain",
        species: "Human",
        weapon: "Lightsaber",
        side: "Dark"
    },
    {
        id: 3,
        name: "Princess Leia Organa",
        affiliation: "Hero",
        species: "Human",
        weapon: "Blaster",
        side: "Light"
    },
    {
        id: 4,
        name: "Emperor Palpatine",
        affiliation: "Villain",
        species: "Human",
        weapon: "Lightsaber",
        side: "Dark"
    },
    {
        id: 5,
        name: "Han Solo",
        affiliation: "Hero",
        species: "Human",
        weapon: "Blaster",
        side: "Light"
    },
    {
        id: 6,
        name: "Boba Fett",
        affiliation: "Villain",
        species: "Human",
        weapon: "Blaster",
        side: "Neutral"
    },
    {
        id: 7,
        name: "Obi-Wan Kenobi",
        affiliation: "Hero",
        species: "Human",
        weapon: "Lightsaber",
        side: "Light"
    },
    {
        id: 8,
        name: "Count Dooku",
        affiliation: "Villain",
        species: "Human",
        weapon: "Lightsaber",
        side: "Dark"
    },
    {
        id: 9,
        name: "Rey",
        affiliation: "Hero",
        species: "Human",
        weapon: "Lightsaber",
        side: "Light"
    },
    {
        id: 10,
        name: "Kylo Ren",
        affiliation: "Villain",
        species: "Human",
        weapon: "Lightsaber",
        side: "Dark"
    },
    {
        id: 11,
        name: "Yoda",
        affiliation: "Hero",
        species: "Yoda's species",
        weapon: "Lightsaber",
        side: "Light"
    },
    {
        id: 12,
        name: "Maul",
        affiliation: "Villain",
        species: "Dathomirian",
        weapon: "Double-bladed lightsaber",
        side: "Dark"
    },
    {
        id: 13,
        name: "Chewbacca",
        affiliation: "Hero",
        species: "Wookiee",
        weapon: "Bowcaster",
        side: "Light"
    },
    {
        id: 14,
        name: "General Grievous",
        affiliation: "Villain",
        species: "Kaleesh",
        weapon: "Multiple lightsabers",
        side: "Dark"
    },
    {
        id: 15,
        name: "Anakin Skywalker",
        affiliation: "Hero",
        species: "Human",
        weapon: "Lightsaber",
        side: "Light"
    },
    {
        id: 16,
        name: "Jabba the Hutt",
        affiliation: "Villain",
        species: "Hutt",
        weapon: "None",
        side: "Neutral"
    },
    {
        id: 17,
        name: "Lando Calrissian",
        affiliation: "Hero",
        species: "Human",
        weapon: "Blaster",
        side: "Light"
    },
    {
        id: 18,
        name: "Admiral Thrawn",
        affiliation: "Villain",
        species: "Chiss",
        weapon: "Strategist",
        side: "Dark"
    },
    {
        id: 19,
        name: "Padmé Amidala",
        affiliation: "Hero",
        species: "Human",
        weapon: "Blaster",
        side: "Light"
    },
    {
        id: 20,
        name: "Asajj Ventress",
        affiliation: "Villain",
        species: "Dathomirian",
        weapon: "Dual lightsabers",
        side: "Dark"
    },
]

const demonSlayer = [
    {
        id: 1,
        name: "Tanjiro Kamado",
        powers: ["Breathing Techniques", "Water Breathing"],
        role: "Main Protagonist",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 2,
        name: "Nezuko Kamado",
        powers: ["Demon Abilities", "Blood Demon Art"],
        role: "Main Protagonist",
        team: "None",
        demonSlayer: false
    },
    {
        id: 3,
        name: "Zenitsu Agatsuma",
        powers: ["Breathing Techniques", "Thunder Breathing"],
        role: "Main Character",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 4,
        name: "Inosuke Hashibira",
        powers: ["Beast Breathing", "Boar Mask"],
        role: "Main Character",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 5,
        name: "Kyojuro Rengoku",
        powers: ["Flame Breathing", "Fire Sword"],
        role: "Hashira",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 6,
        name: "Enmu",
        powers: ["Morphing", "Blood Demon Art"],
        role: "Lower Moon One",
        team: "Twelve Kizuki",
        demonSlayer: false
    },
    {
        id: 7,
        name: "Rui",
        powers: ["Spider Threads", "Blood Demon Art"],
        role: "Lower Moon Five",
        team: "Twelve Kizuki",
        demonSlayer: false
    },
    {
        id: 8,
        name: "Shinobu Kocho",
        powers: ["Insect Breathing", "Venomous Wasp"],
        role: "Hashira",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 9,
        name: "Muzan Kibutsuji",
        powers: ["Demon Abilities", "Blood Manipulation"],
        role: "Main Antagonist",
        team: "None",
        demonSlayer: false
    },
    {
        id: 10,
        name: "Giyu Tomioka",
        powers: ["Water Breathing", "Water Hashira"],
        role: "Hashira",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 11,
        name: "Muichiro Tokito",
        powers: ["Mist Breathing", "Mist Hashira"],
        role: "Hashira",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 12,
        name: "Tengen Uzui",
        powers: ["Sound Breathing", "Sound Hashira"],
        role: "Hashira",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 13,
        name: "Akaza",
        powers: ["Upper Moon Three", "Demon Abilities"],
        role: "Twelve Kizuki",
        team: "None",
        demonSlayer: false
    },
    {
        id: 14,
        name: "Kanao Tsuyuri",
        powers: ["Flower Breathing", "Kaleidoscope Sword"],
        role: "Demon Slayer",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 15,
        name: "Kyogai",
        powers: ["Temari Ball", "Demon Abilities"],
        role: "Demon",
        team: "Twelve Kizuki",
        demonSlayer: false
    },
    {
        id: 16,
        name: "Genya Shinazugawa",
        powers: ["Mouth Demon Slayer", "Demon Abilities"],
        role: "Demon Slayer",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 17,
        name: "Sanemi Shinazugawa",
        powers: ["Wind Breathing", "Wind Hashira"],
        role: "Hashira",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 18,
        name: "Kokushibo",
        powers: ["Upper Moon One", "Demon Abilities"],
        role: "Twelve Kizuki",
        team: "None",
        demonSlayer: false
    },
    {
        id: 19,
        name: "Mitsuri Kanroji",
        powers: ["Love Breathing", "Love Hashira"],
        role: "Hashira",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 20,
        name: "Yushiro",
        powers: ["Demon Abilities", "Blood Manipulation"],
        role: "Demon",
        team: "None",
        demonSlayer: false
    }
];
