import __dirname from './utils.js';
import path from 'path';
import express from 'express';
import { engine } from 'express-handlebars';
import { initPassport } from './config/passport.config.js';
import passport from 'passport';

import mongoose from 'mongoose';

import { productoModelo } from './dao/models/producto.modelo.js';
import { generaProducto } from './mocks/productos.mocks.js';

import { router as vistasRouter } from './routes/vistasRouter.js';
import { router as carritosRouter } from './routes/carritoRouter.js';
import { router as sessionsRouter } from './routes/sessionsRouter.js';
import { CarritoDAO } from './dao/carrito.dao.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { CustomError, TIPOS_ERROR, error1, error2, error3, error4 } from './utils/errores.js';

const PORT = 3000;

const app = express();

let usuarioTest = {}

app.use((req, res, next) => {
    req.user = usuarioTest

    next()
})

app.engine('handlebars', engine({
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
initPassport()
app.use(passport.initialize())

app.use(express.static(path.join(__dirname, '/public')));

app.use("/", vistasRouter)
app.use("/api/sessions", sessionsRouter)
app.use("/api/carritos", carritosRouter)

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('OK');
})

app.get('/prueba',(req,res)=>{
    
    if(req.query.error==="1"){
        throw new CustomError("Error prueba", "Error /prueba", TIPOS_ERROR.ARGUMENTOS, "Error prueba, descrip...")
    }

    try {
        if(req.query.error==="2"){
            console.log(nananana)
        }
    } catch (error) {
        throw new CustomError("Error prueba", "Error /prueba try/catch", TIPOS_ERROR.ARGUMENTOS, error.message)
    }


    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        mensaje:"/prueba OK...!!!"
    });
});

app.get('/pruebaasync',async(req,res,next)=>{
    
    try {
        if(req.query.error==="0"){
            throw new CustomError("Error prueba", "Error /prueba", TIPOS_ERROR.ARGUMENTOS, "Error prueba, descrip...")
        }
        if(req.query.error==="1"){
            error1()
        }
        if(req.query.error==="2"){
            await error2()
        }
        if(req.query.error==="3"){
            await error3()
        }
        if(req.query.error==="4"){
            await error4()
        }
        
    } catch (error) {
        return next(error)
    }

    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        mensaje:"/prueba async OK...!!!"
    });
});

app.get('/crearProductos', async (req, res) => {

    let { cantidad, inicializa } = req.query
    if (!cantidad || cantidad === 0) {
        res.setHeader('Content-Type', 'application/json');
        return res.status(400).json({ error: `Ingrese la cantidad de productos a generar` })
    }

    if (inicializa) {
        try {
            let resultado = await productoModelo.deleteMany({})
            console.log(resultado)
        } catch (error) {
            console.log(error.message)
            res.setHeader('Content-Type', 'application/json');
            return res.status(500).json({ error: `Error inesperado en el servidor - Intente más tarde, o contacte a su administrador` })
        }
    }

    let productos = []
    for (let i = 0; i < cantidad; i++) {
        productos.push(generaProducto())
    }

    try {
        let productosAlta = await productoModelo.insertMany(productos)
        res.setHeader('Content-Type', 'application/json');
        return res.status(200).json({ payload: productosAlta });
    } catch (error) {
        console.log(error.message)
        res.setHeader('Content-Type', 'application/json');
        return res.status(500).json({ error: `Error inesperado en el servidor - Intente más tarde, o contacte a su administrador` })
    }

})

app.use(errorHandler)

try {
    await mongoose.connect("mongodb+srv://backend49975:CoderCoder@cluster0.dxc9fdl.mongodb.net/?retryWrites=true&w=majority&dbName=afterClass04")
    console.log("DB Online...!!!")

    const carritoService=new CarritoDAO()
    await carritoService.deleteAll()  // TODO: quitar esta linea...!!!
    let carritoTest=await carritoService.create()
    usuarioTest = {   // simula el usuario que guarda passport en req.user luego del login...
        nombre: "Sandra", email: "sandra@test.com",
        rol: "user",
        carrito_id: carritoTest._id
    }
} catch (error) {
    console.log(error.message)
}

const server = app.listen(PORT, () => {
    console.log(`Server escuchando en puerto ${PORT}`);
});
