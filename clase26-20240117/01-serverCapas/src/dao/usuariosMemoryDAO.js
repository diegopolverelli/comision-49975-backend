
export class UsuariosMemoryDAO{
    constructor(){
        this.usuarios=[{id:1, nombre:"Lorena", password:"123"}]
    }

    get(){
        return this.usuarios
    }

    getBy(email){
        let usuario=this.usuarios.find(u=>u.email===email)
        return usuario
    }

    create(usuario){
        let id=1
        if(this.usuarios.length>0){
            id=this.usuarios[this.usuarios.length-1].id + 1
        }

        usuario.id=id

        this.usuarios.push(usuario)

        return usuario

    }
}