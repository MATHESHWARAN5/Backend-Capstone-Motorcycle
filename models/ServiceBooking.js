

const mongoose = require('mongoose');

const ServiceBookingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    serviceType: {
        type: String,
        required: true
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
    },
    registrationNumber: {
        type: String,
        required: true
    }
});

const ServiceBooking = mongoose.model('ServiceBooking', ServiceBookingSchema);

module.exports = ServiceBooking;
