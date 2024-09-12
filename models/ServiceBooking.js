const mongoose = require('mongoose');

const ServiceBookingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    serviceType: {
        type: String,
        required: true,
        enum: ['Oil Change', 'Tire Replacement', 'Brake Service'], // Optional: restrict to specific service types
    },
    dateTime: {
        type: Date,
        required: true
    },
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields automatically
});

const ServiceBooking = mongoose.model('ServiceBooking', ServiceBookingSchema);

module.exports = ServiceBooking;
