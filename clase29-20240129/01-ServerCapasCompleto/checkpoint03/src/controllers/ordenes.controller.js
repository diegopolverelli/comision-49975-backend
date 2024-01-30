
export const getOrdenes=async(req,res)=>{
    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"getOrdenes"});
}

export const getOrdenById=async(req,res)=>{
    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"getOrdenById"});
}

export const createOrden=async(req,res)=>{
    res.setHeader('Content-Type','application/json');
    return res.status(201).json({payload:"createOrden"});
}

