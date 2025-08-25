const express = require('express');
const router = express.Router();
const Cancha = require('../models/Cancha');

// Ejemplo de ruta GET
router.get('/', async (req, res) => {
  try {
    const canchas = await Cancha.find();
    res.json(canchas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// POST nueva cancha
router.post('/', async (req, res) => {
  try {
    const nuevaCancha = new Cancha(req.body);
    const savedCancha = await nuevaCancha.save();
    res.status(201).json(savedCancha);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
module.exports = router;