const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: { type: String, required: true },
  // Other feedback details can be added here
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
