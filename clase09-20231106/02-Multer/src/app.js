import express from 'express';
import fs from 'fs'
// import multer from 'multer'

// const upload = multer({ dest: './src/uploads/' })
import { upload } from './utils.js';
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./src/public'))

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('OK');
})

app.post('/profile', upload.single('foto'), function (req, res, next) {
    // req.file es el archivo del `foto`
    // req.body contendrá los campos de texto, si los hubiera.
    console.log(req.file)
    console.log(req.body)

    if(req.file.mimetype.substring(0,5).toLocaleLowerCase()!=='image'){
        console.log('subi algo que no es imagen')
        fs.unlinkSync(req.file.path)
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Solo se admiten imagenes`})
    }

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:'ok'});
})

const server = app.listen(PORT, () => {
    console.log(`Server escuchando en puerto ${PORT}`);
});
