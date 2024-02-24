export class CustomError extends Error{
    constructor(nombre, mensaje, codigo=500, descrip=""){
        super(mensaje)
        this.name=nombre
        this.codigo=codigo
        this.descrip=descrip
    }
}

export const TIPOS_ERROR={
    ARGUMENTOS:400,
    VALIDACION:400, 
    DB:500,
    AUTENTICACION:401,
    AUTORIZACION:403,
    SERVER:500,
    INDETERMINADO:500
}

export const error1=()=>{
    throw new CustomError("error1", "error fn sync anidada", TIPOS_ERROR.ARGUMENTOS, "error descrip")
} 

export const error2=async()=>{
    try {
        throw new CustomError("error2", "error fn async anidada", TIPOS_ERROR.ARGUMENTOS, "error descrip")
    } catch (error) {
        throw new CustomError(error.name?error.name:"error generico", error.message, error.codigo?error.codigo:TIPOS_ERROR.INDETERMINADO, error.descrip?error.descrip:"Error indeterminado...")
    }
} 

export const error3=async()=>{
    try {
        console.log(blablabla)
    } catch (error) {
        throw new CustomError(error.name?error.name:"error generico", error.message, error.codigo?error.codigo:TIPOS_ERROR.INDETERMINADO, error.descrip?error.descrip:"Error indeterminado...")
    }
} 

export const error4=async()=>{
    throw new CustomError("Error validacion...", "Error validacion mensaje...", TIPOS_ERROR.ARGUMENTOS, "descrip error validacion")
}
