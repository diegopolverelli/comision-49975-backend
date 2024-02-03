
export const getUsuarios=async(req,res)=>{
    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"getUsuarios"});
}

export const getUsuarioById=async(req,res)=>{
    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"getUsuarioById"});
}

export const createUsuario=async(req,res)=>{
    res.setHeader('Content-Type','application/json');
    return res.status(201).json({payload:"createUsuario"});
}