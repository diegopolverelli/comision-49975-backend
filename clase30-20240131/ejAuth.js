function accesos(permisos=[]){
    return function(req, res, next){
        // pasar los permisos todo a Upper Case
        if(permisos.includes("PUBLIC")){
            return next()
        }

        if(!req.user){
            res.setHeader('Content-Type','application/json');
            return res.status(401).json({error:`error autenticacion. No estas logueado...!!!`})
        }

        if(!permisos.includes(req.user.rol.toUpperCase())){
            res.setHeader('Content-Type','application/json');
            return res.status(403).json({error:`No tiene permisos para el recurso`})
        }

        return next()
    }
}