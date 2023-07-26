const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Usuarios = require('./back-End/baseDeDatos/Models/usuarios');
const Respuestas = require('./back-End/baseDeDatos/Models/respuestas');
const Preguntas = require('./back-End/baseDeDatos/Models/preguntas');
const Encuestas = require('./back-End/baseDeDatos/Models/encuestas');

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});

app.get('/login', (req, res) => {
  const username = req.query.username;
  const password = req.query.password;

  connection.query(
    'SELECT * FROM usuarios WHERE nombre_usuario = ? AND contraseña = ?',
    [username, password],
    (error, results) => {
      if (error) {
        res.send('Error al consultar la base de datos');
      } else if (results.length > 0) {
        res.send('Inicio de sesión exitoso');
      } else {
        res.send('Nombre de usuario o contraseña incorrectos. ¿Desea registrarse?');
      }
    }
  );
});

app.get('/inicio', (req, res) => {
  res.send('Bienvenido a la página de inicio');
});

async function main() {
  // Conectar con la base de datos
  await mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true });

  // Crear una nueva encuesta
  const encuesta = new Encuesta({
    titulo: 'Mi encuesta',
    descripcion: 'Esta es una encuesta de prueba',
    nombre: 'Juan'
  });
  await encuesta.save();
  console.log('Encuesta creada:', encuesta);

  // Buscar encuestas por título
  const encuestas = await Encuesta.find({ titulo: 'Mi encuesta' });
  console.log('Encuestas encontradas:', encuestas);

}

main();