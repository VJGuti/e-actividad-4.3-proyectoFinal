const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const encuestaSchema = new Schema({
  titulo: {
    type: String,
    required: true
  },
  descripcion: {
    type: String
  },
  preguntas: [{
    type: Schema.Types.ObjectId,
    ref: 'Pregunta'
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

encuestaSchema.methods.mostrarFecha = function() {
  const fecha = new Date(this.fecha);
  return fecha.toLocaleString();
}

const Encuestas = mongoose.model('Encuesta', encuestaSchema);

module.exports = Encuestas;