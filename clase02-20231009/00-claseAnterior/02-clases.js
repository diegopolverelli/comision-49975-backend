
class Persona{

    static especie='humano'
    #password=''

    constructor(nombre, apellido, email, password){
        this.nombre=nombre
        this.apellido=apellido
        this.email=email
        this.#password=password
    }

    static verEspecie(){
        return Persona.especie
    }

    verPassword(){
        return this.#password
    }

    verNombreCompleto(){
        // return `el nombre completo es: ${this.nombre} ${this.apellido} `
        return "el nombre completo es "+this.nombre+" "+this.apellido
    }

    setNombre(nom){
        this.nombre=nom
    }
} // fin de la class


let per01=new Persona('Julian', 'Alvarez', 'jalvarez@test.com', '123')
let per02=new Persona('Romina', 'Beltran', 'rbeltran@test.com', '456')

console.log(per01.email)
console.log(per02.apellido)

console.log(per02.nombre)

per02.setNombre('Maria')

console.log(per02.nombre)
console.log(per01.verNombreCompleto())
console.log(per01)



console.log(Persona.especie)
console.log(Persona.verEspecie())

console.log(per01.verPassword())

per02.apellido='Moralez'
console.log(per02.verNombreCompleto())


// Persona.verEspecie()
// Persona.especie


// manejador managers

class UsersManager{
    constructor(){
        this.usuarios=[]
    }

    getUsuarios(){
        return this.usuarios
    }

    crearUsuario(nombre, email){
        let existe=this.usuarios.find(u=>u.email===email)
        if(existe){
            console.log(`Usuario ${email} existente...!!!`)
            return 
        }

        this.usuarios.push({
            nombre, email
        })
    }
}

const userManager=new UsersManager()
userManager.crearUsuario('Diego','diego@test.com')
userManager.crearUsuario('Roman','roman@test.com')
userManager.crearUsuario('Diego R.','diego@test.com')
console.log(userManager.getUsuarios())
