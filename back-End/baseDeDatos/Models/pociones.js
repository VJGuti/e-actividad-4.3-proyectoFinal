const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pocionesSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    ref: 'Pregunta'
  },
  precio: {
    type: Number,
    default: Date.now
  },
  cantidad: {
    type: Number,
    default: Date.now
  },
  descripcion: {
    type: String
  },
  clasificacion: {
    type: String,
    required: true
  }
});

const Pociones = mongoose.model('Pocion', pocionesSchema);

module.exports = Pociones;