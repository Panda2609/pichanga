const mongoose = require('mongoose');

const regionSchema = new mongoose.Schema({
  id: Number,
  value: String,
  label: String
}, { collection: 'regiones' });

module.exports = mongoose.model('Region', regionSchema);