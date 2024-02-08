export class CustomError{
    static CustomError(nombre, mensaje, statusCode, codigoInterno, descripcion=""){
        let error=new Error(mensaje)
        error.name=nombre
        error.codigo=statusCode
        error.codigoInterno=codigoInterno
        error.descripcion=descripcion

        return error
        // throw new Error("Solo se aceptan argumentes... ")
    }
}

export class OtroCustomError extends Error{
    constructor(nombre, mensaje, statusCode, descripcion){
        super(mensaje)
        this.name=nombre
        this.codigo=statusCode
        this.descripcion=descripcion
    }
}

// throw new Error("Error 1")
// throw new OtroCustomError("Error x", "mensaje error", 400, "algo... descrip")
