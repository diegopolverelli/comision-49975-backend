const UserManager = require("./00-modulo/UserManager");


const um=new UserManager("./00-archivos/usuarios.json")

const entorno=async()=>{
    
    try {
        console.log(await um.getUsers())
        await um.addUser("Mario", "msantos@test.com","123")
        await um.addUser("Emilio", "eravena@test.com","456")
        await um.addUser("Gabriel", "gmedina@test.com","789")
        await um.addUser("Mario", "msantos@test.com","123")
        await um.addUser("Pablo", "plampone@test.com","000")

        console.log(await um.getUsers())
        await um.login("msantos1990@test.com","123")
        await um.login("msantos@test.com","abc")
        await um.login("msantos@test.com","123")

    } catch (error) {
        console.log(error.message)
    }

}

entorno()