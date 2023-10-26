const http = require('http')

const PORT=3000

const server=http.createServer((req, res)=>{  // request, response

    res.writeHead(200, {'Content-Type':'text/html; charset=utf8'})
    res.end("Hola...!!! soy un server, desarrollado con el módulo http, nativo de NodeJs...!!!")

})

server.listen(PORT, ()=>{
    console.log(`Server online escuchando el puerto ${PORT}`)
})