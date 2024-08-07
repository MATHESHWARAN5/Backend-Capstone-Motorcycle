// /server/models/ServiceBooking.js

const mongoose = require('mongoose');

const serviceBookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  serviceType: String,
  dateTime: Date,
  make: String,
  model: String,
  registrationNumber: String,
  // Other service booking details
});

const ServiceBooking = mongoose.model('ServiceBooking', serviceBookingSchema);

module.exports = ServiceBooking;