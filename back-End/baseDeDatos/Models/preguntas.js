const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const preguntaSchema = new Schema({
  texto: {
    type: String,
    required: true
  },
  opciones: [{
    type: String
  }],
  respuestas: [{
    type: Schema.Types.ObjectId,
    ref: 'Respuesta'
  }],
  fecha: {
    type: Date,
    default: Date.now
  },
  nombre: {
    type: String,
    required: true
  }
});

preguntaSchema.methods.mostrarFecha = function() {
  const fecha = new Date(this.fecha);
  return fecha.toLocaleString();
}

const Preguntas = mongoose.model('Pregunta', preguntaSchema);

module.exports = Preguntas;