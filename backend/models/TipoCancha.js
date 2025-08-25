const mongoose = require('mongoose');

const tipoCanchaSchema = new mongoose.Schema({
  value: String,
  label: String
}, { collection: 'tiposCanchas' });

module.exports = mongoose.model('TipoCancha', tipoCanchaSchema);