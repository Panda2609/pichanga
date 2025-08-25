const mongoose = require('mongoose');

const canchaSchema = new mongoose.Schema({
  name: String,
  region: String,      // Puede ser el value o el id de la región
  tipo: String,        // Puede ser el value o el id del tipo de cancha
  horario: String,
  fecha: String,
  image: String
}, { collection: 'canchas' });

module.exports = mongoose.model('Cancha', canchaSchema);