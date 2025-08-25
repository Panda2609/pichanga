const express = require('express');
const router = express.Router();
const Region = require('../models/Region');

// GET todas las regiones
router.get('/', async (req, res) => {
  try {
    const regiones = await Region.find();
    res.json(regiones);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST nueva región
router.post('/', async (req, res) => {
  try {
    const nuevaRegion = new Region(req.body);
    const savedRegion = await nuevaRegion.save();
    res.status(201).json(savedRegion);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
