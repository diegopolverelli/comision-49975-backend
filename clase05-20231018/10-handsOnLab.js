const fs=require('fs')

class UserManager{
    constructor(rutaArchivo){
        this.path=rutaArchivo
    }

    getUsuarios(){
        if(fs.existsSync(this.path)){
            // return lo que lees del archivo (pasado por JSON.parse())
            return JSON.parse(fs.readFileSync(this.path, "utf-8"))
        }else{
            return []
        }
    }

    grabaUsuarios(nombre, apellido){
        let usuarios=this.getUsuarios()

        // grabas usuario... con push
        usuarios.push({nombre, apellido})

        fs.writeFileSync(this.path, JSON.stringify(usuarios))
    }


}

let userManager=new UserManager('./archivos/usuarios.json')
userManager.grabaUsuarios('Juan', 'Perez')