import os from 'os'

// export const errorArgumentos=(usuario)=>{
export const errorArgumentos=({name, ...otros})=>{

    // let {name, ...otros}=usuario

    return `
Error en argumentos:
Argumentos obligatorios:
    - name: esperado tipo string, recibido ${name}   
Argumentos opcionales:
    - powers, alias, team, publisher, recibidos ${JSON.stringify(otros)}

Fecha: ${new Date().toUTCString()}
Usuario: ${os.userInfo().username}
`

}