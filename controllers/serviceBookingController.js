

const ServiceBooking = require('../models/ServiceBooking');

const bookService = async (req, res) => {
    try {
        const { userId, serviceType, dateTime, make, model, registrationNumber } = req.body;

        // Validate required fields
        if (!userId || !serviceType || !dateTime || !make || !model || !registrationNumber) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Create a new service booking entry
        const newBooking = new ServiceBooking({
            userId,
            serviceType,
            dateTime,
            make,
            model,
            registrationNumber
        });

        // Save to database
        await newBooking.save();
        res.status(201).json({ message: 'Service booked successfully', data: newBooking });
    } catch (error) {
        console.error('Error booking service:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { bookService };
