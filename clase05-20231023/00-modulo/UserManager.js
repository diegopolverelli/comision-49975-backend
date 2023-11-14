const fs=require('fs')
const crypto=require('crypto')

class UserManager{
    constructor(rutaArchivo){
        this.path=rutaArchivo
    }

    async getUsers(){
        if(fs.existsSync(this.path)){
            return JSON.parse(await fs.promises.readFile(this.path,"utf-8"))
        }else{
            return []
        }
    } //fin getUsers

    async addUser(nombre, email, password){
        let usuarios=await this.getUsers()

        let id=1
        if(usuarios.length>0){
            id=usuarios[usuarios.length -1].id +1

            let existe=usuarios.find(u=>u.email===email)
            if(existe){
                console.log(`El usuario con email ${email} ya está registrado...!!!`)
                return 
            }

        }

        let usuario={
            id, nombre, email, 
            password:crypto.createHmac("sha256","coder123").update(password).digest("hex")
        }

        usuarios.push(usuario)

        await fs.promises.writeFile(this.path, JSON.stringify(usuarios,null,5))

    } // fin addUser

    async login(email, password){
        let usuarios=await this.getUsers()
        let usuario=usuarios.find(u=>u.email===email)
        if(usuario){
            if(usuario.password===crypto.createHmac("sha256","coder123").update(password).digest("hex")){
                console.log(`El usuario ${usuario.nombre}, con email ${email} ingresó correctamente...!!!`)
            }else{
                console.log(`El usuario ${email} ingresó credenciales inválidas`)
            }
        }else{
            console.log(`El usuario ${email} no existe`)
        }
    }

}

module.exports=UserManager