export class UsuariosReadDTO{
    constructor(usuario){
        this.first_name=usuario.nombre.toUpperCase()
        this.last_name=usuario.apellido?usuario.apellido.toUpperCase():"no definido"
        this.email=usuario.email
        this.rol="user"
    }
}

export class UsuarioSaveDTO{
    constructor(usuario){
        this.nombre=usuario.first_name+" "+usuario.last_name
        this.email=usuario.email
        this.password="123"
    }
}