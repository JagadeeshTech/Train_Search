const express = require('express');
const Train = require('../models/train');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const trains = await Train.find();
    res.json(trains);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const train = new Train({
    name: req.body.name,
    origin: req.body.origin,
    destination: req.body.destination,
    departureTime: req.body.departureTime,
    arrivalTime: req.body.arrivalTime,
    price: req.body.price,
  });

  try {
    const newTrain = await train.save();
    res.status(201).json(newTrain);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
