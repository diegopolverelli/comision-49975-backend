
export const getMascotas=async(req,res)=>{

    let mascotas=["mascotas..."]

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({mascotas});
}

export const createMascota=async(req,res)=>{
    let {nombre, especie}=req.body
    if(!nombre || !especie){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete los datos...!!!`})
    }


    // validaciones correspondientes
    
    let nuevaMascota="nuevaMascota"

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({nuevaMascota});
}