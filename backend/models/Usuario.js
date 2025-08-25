const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: String,
  email: { type: String, unique: true },
  password: String,
}, { collection: 'usuarios' });

module.exports = mongoose.model('Usuario', usuarioSchema);