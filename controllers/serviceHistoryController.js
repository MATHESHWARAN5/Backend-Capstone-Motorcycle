
const ServiceBooking = require('../models/ServiceBooking')

const getServiceHistory = async (req, res) => {
    res.send("service added")
    try {
        // Assuming userId is available in request headers or request body
        const userId = req.user.id; // Example: req.user.id or req.body.userId
        
        // Query service bookings for the given user ID
        const serviceHistory = await ServiceBooking.find({ userId });

        // Return the service history as a response
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
