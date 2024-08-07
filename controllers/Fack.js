// /server/controllers/serviceHistoryController.js

// const ServiceBooking = require('../models/ServiceBooking');

const ServiceBooking = require('../models/ServiceBooking');

const getServiceHistory = async (req, res) => {
    try {
        // Extract user ID from the request (assuming it's available in the request headers or body)
        const userId = req.user.id; // Example: req.user.id or req.body.userId
        
        // Query service bookings for the given user ID
        const serviceHistory = await ServiceBooking.find({ userId });

        // If no service history found, send an appropriate response
        if (!serviceHistory || serviceHistory.length === 0) {
            return res.status(404).json({ message: 'No service history found for the user' });
        }

        // If service history is found, send it as a response
        res.status(200).json(serviceHistory);
    } catch (err) {
        // Handle errors
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    getServiceHistory
};




