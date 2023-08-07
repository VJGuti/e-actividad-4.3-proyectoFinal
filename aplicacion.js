const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Usuarios = require('./back-End/baseDeDatos/Models/usuarios');
const Respuestas = require('./back-End/baseDeDatos/Models/respuestas');
const Preguntas = require('./back-End/baseDeDatos/Models/preguntas');
const Encuestas = require('./back-End/baseDeDatos/Models/encuestas');

const Pociones = require('./back-End/baseDeDatos/Models/pociones');


app.get('/inicio', (req, res) => {
  res.send('Bienvenido a la página de inicio');
});

(async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/posiones_formulario_bd', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión exitosa a MongoDB');
  } catch (error) {
    console.error('Error de conexión a MongoDB:', error);
  }
})();


app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
})