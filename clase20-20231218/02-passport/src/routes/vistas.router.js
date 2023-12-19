import { Router } from 'express';
export const router=Router()

const auth=(req, res, next)=>{
    if(!req.session.usuario){
        return res.redirect('/login')
    }

    next()
}

const auth2=(req, res, next)=>{
    if(req.session.usuario){
        return res.redirect('/perfil')
    }

    next()
}

router.get('/',(req,res)=>{

    // let login=false
    // if(req.session.usuario){
    //     login=true
    // }

    res.setHeader('Content-Type','text/html')
    res.status(200).render('home', {login:req.session.usuario?true:false})
})

router.get('/registro', auth2, (req,res)=>{

    let {error}=req.query

    res.setHeader('Content-Type','text/html')
    res.status(200).render('registro', {error, login:false})
})

router.get('/login', auth2, (req,res)=>{

    let {error, mensaje}=req.query

    res.setHeader('Content-Type','text/html')
    res.status(200).render('login', {error, mensaje, login:false})
})

router.get('/perfil', auth, (req,res)=>{

    let usuario=req.session.usuario

    res.setHeader('Content-Type','text/html')
    res.status(200).render('perfil', {usuario, login:true})
})

router.get('/productos', auth, (req,res)=>{

    let usuario=req.session.usuario

    res.setHeader('Content-Type','text/html')
    res.status(200).render('productos', {usuario})
})