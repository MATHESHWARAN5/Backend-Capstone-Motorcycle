// const mongoose = require('mongoose');

// const feedbackSchema = new mongoose.Schema({
//   rating: { type: Number, min: 1, max: 5, required: true },
//   comment: { type: String, required: true },
//   // Other feedback details can be added here
// });

// const Feedback = mongoose.model('Feedback', feedbackSchema);

// module.exports = Feedback;


// models/Feedback.js
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    serviceBookingId: { type: mongoose.Schema.Types.ObjectId, ref: 'ServiceBooking' },
    rating: { type: Number, min: 1, max: 5 },
    comment: String,
    // Other feedback details
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
