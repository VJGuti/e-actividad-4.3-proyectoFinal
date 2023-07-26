const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const respuestaSchema = new Schema({
  usuario: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  pregunta: {
    type: Schema.Types.ObjectId,
    ref: 'Pregunta',
    required: true
  },
  respuestaSeleccionada: {
    type: String,
    required:true
  },
  fecha:{
      type : Date,
      default : Date.now
   },
   nombre:{
       type : String,
       required:true
   }
});

respuestaSchema.methods.mostrarFecha = function() {
  const fecha = new Date(this.fecha);
  return fecha.toLocaleString();
}

const Respuestas = mongoose.model('Respuesta', respuestaSchema);

module.exports = Respuestas;