import __dirname from './utils.js';
import path from 'path';
import express from 'express';
import { engine } from 'express-handlebars';

import mongoose from 'mongoose';

import { productoModelo } from './dao/models/producto.modelo.js';
import { generaProducto } from './mocks/productos.mocks.js';

import { router as vistasRouter } from './routes/vistasRouter.js';
import { router as carritosRouter } from './routes/carritoRouter.js';
import { CarritoDAO } from './dao/carrito.dao.js';

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

app.use(express.static(path.join(__dirname, '/public')));

app.use("/", vistasRouter)
app.use("/api/carritos", carritosRouter)

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('OK');
})

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
