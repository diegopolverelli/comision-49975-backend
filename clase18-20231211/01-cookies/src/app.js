import express from 'express';
import cookieParser from 'cookie-parser'
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('./src/public'))
app.use(cookieParser("codercoder123"))

app.get('/',(req,res)=>{


    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/set',(req,res)=>{

    let info={
        nombre:'Juan',
        color:'red',
        font:'Arial'
    }

    res.cookie("cookie01", info, {})
    res.cookie("cookie02conVto", info, {maxAge: 1000*5})
    res.cookie("cookie03conVto", info, {expires: new Date(2023, 11, 18)})
    res.cookie("cookie04firmada", info, {signed: true})


    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})


app.get('/get',(req,res)=>{

    // console.log(req.cookies)
    console.log(req.cookies.cookie03conVto)
    console.log(req.signedCookies)

    res.setHeader('Content-Type','application/json');
    res.status(200).json({cookiesSinFirmar:req.cookies, cookiesFirmadas:req.signedCookies});
})

app.get('/del',(req,res)=>{

    let cookies=Object.keys(req.cookies)
    console.log(cookies)
    cookies.forEach(cookie=>{
        res.clearCookie(cookie)
    })
    // res.clearCookie()

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})



app.get('/set1',(req,res)=>{

    
    let info={
        nombre:'Juan',
        color:'red',
        font:'Arial'
    }


    // genero cookie sin cookieParser
    res.setHeader('Set-Cookie',[
        "heroe=BATMAN; Max-Age=5;",
        "villano=JOKER"
    ]);

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/get1',(req,res)=>{

    console.log(req.headers.cookie)
    let cookies=req.headers.cookie.split(";")
    console.log(cookies)

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/del1',(req,res)=>{

    res.setHeader('Set-Cookie',[
        "villano=; Max-Age=0;",
        "nombre=; Max-Age=0"
    ]);

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
