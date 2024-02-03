

export const getNegocios=async(req, res)=>{
    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"getNegocios"});
}

export const getNegocioById=async(req, res)=>{
    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"getNegocioById"});
}

export const createNegocio=async(req,res)=>{
    res.setHeader('Content-Type','application/json');
    return res.status(201).json({payload:"createNegocio"});
}

export const addProducto=async(req,res)=>{
    res.setHeader('Content-Type','application/json');
    return res.status(201).json({payload:"addProducto"});
}