const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario')
// GET todos los usuarios
router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST nuevo usuario
router.post('/', async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body);
    const savedUsuario = await nuevoUsuario.save();
    res.status(201).json(savedUsuario);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
