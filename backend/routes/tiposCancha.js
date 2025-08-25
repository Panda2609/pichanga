const express = require('express');
const router = express.Router();
const TipoCancha = require('../models/TipoCancha');

// GET todos los tipos de cancha
router.get('/', async (req, res) => {
  try {
    const tipos = await TipoCancha.find();
    res.json(tipos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST nuevo tipo de cancha
router.post('/', async (req, res) => {
  try {
    const nuevoTipo = new TipoCancha(req.body);
    const savedTipo = await nuevoTipo.save();
    res.status(201).json(savedTipo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
