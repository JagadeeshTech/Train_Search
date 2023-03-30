
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/train-details', { useNewUrlParser: true, useUnifiedTopology: true });

const trainSchema = new mongoose.Schema({
  from: String,
  to: String,
  departureTime: Date,
  arrivalTime: Date,
  trainNumber: String,
});

const Train = mongoose.model('Train', trainSchema);

app.use(express.json());

app.get('/trains', async (req, res) => {
  const { from, to } = req.query;
  const trains = await Train.find({ from, to });
  res.send(trains);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
