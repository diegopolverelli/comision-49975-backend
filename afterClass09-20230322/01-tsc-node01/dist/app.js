"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('OK');
});
app.get('/usuarios', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('usuarios');
});
const server = app.listen(PORT, () => {
    console.log(`Server online escuchando en puerto ${PORT}`);
});
