const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let contacto = [
    {
        "Nombre": "Angelo",
        "Apellido": "Vargas",
        "Telefono": "8098765665"
      }
];

app.get('/', async (req, res) =>{
    res.status(201).redirect('/contactos');
});

app.get('/contactos', async (req, res) => {
    res.json(contacto);
});

app.post('/contactos', async (req, res) =>{
    const contact = req.body;
    contacto.push(contact);
    res.send('Contacto Añadido correctamente')
});

app.listen(4000, () => {
    console.log('Servidor iniciado en el puerto 4000');
});
