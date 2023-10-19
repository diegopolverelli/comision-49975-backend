const fs=require('fs')

const archivo="./archivos/archivo.txt"

let texto2=`El universo es una perversa inmensidad hecha de ausencia.
Uno no está en casi ninguna parte.
Sin embargo, en medio de las infinitas desolaciones hay una buena noticia: el amor.
Los Hombres Sensibles de Flores tomaban ese rumbo cuando querían explicar el cosmos. 
Y hasta los Refutadores de Leyendas tuvieron que admitir, casi sin reservas, que el amor
existe. Eso sí, nadie debe confundir el amor con la dicha. Al contrario: a veces se
piensa que amor y pena son una misma cosa. Especialmente en el barrio del Ángel Gris,
que es también el barrio del desencuentro.

Alejandro Dolina - fragmento del libro "Crónicas del Ángel Gris"`


console.log("Inicio de programa")

const manejoError=()=>{}

fs.writeFile(archivo, texto2, (error)=>{
    if(error){
        console.log("Pasaron cosas...:", error.message)
    }else{
        console.log("Archivo guardado OK...!!!")

        if(fs.existsSync(archivo)){
            fs.readFile(archivo, "utf-8", (error, datosLeidos)=>{
                if(error){
                    console.log("Pasaron cosas...:", error.message)
                }else{
                    console.log(datosLeidos)

                    fs.appendFile(archivo, "\n\nEditorial Sudamericana",(error)=>{
                        if(error){
                            console.log(error.message)
                        }else{
                            console.log("Archivo modificado...!!!")

                            setTimeout(()=>{
                                fs.unlink(archivo,(error)=>{
                                    if(error){
                                        console.log(error.message)
                                    }else{
                                        console.log("Fin programa")
                                    }
                                })
                            },2000)

                        }
                    })


                }
            })
        }

    }
})

