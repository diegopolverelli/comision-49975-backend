const http = require('http')
const url=require('url')

const PORT=3000

const server=http.createServer((req, res)=>{  // request, response

    console.log(req.url)
    let urlParsed=url.parse(req.url,true)
    console.log(urlParsed)

    switch (urlParsed.pathname) {
        case "/datos":
            let mensaje="DATOS"
            if(urlParsed.query.nombre){
                mensaje+=" "+urlParsed.query.nombre
            }

            res.writeHead(200, {'Content-Type':'text/html; charset=utf8'})
            res.end(mensaje)
                    
            break;

        case "/":
            res.writeHead(200, {'Content-Type':'text/html; charset=utf8'})
            res.end("Hola...!!! soy un server, desarrollado con el módulo http, nativo de NodeJs...!!!")
                    
            break;


        case "/contacto":
            res.writeHead(200, {'Content-Type':'text/html; charset=utf8'})
            res.end("Contacto Page")
                    
            break;
    
        default:
            res.writeHead(404, {'Content-Type':'text/html; charset=utf8'})
            res.end("page not found")

            break;
    }


})

server.listen(PORT, ()=>{
    console.log(`Server online escuchando el puerto ${PORT}`)
})