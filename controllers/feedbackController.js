
const Feedback = require('../models/Feedback');

const submitFeedback = async (req, res) => {
    try {
        const {  rating, comment } = req.body;
        
        const feedback = new Feedback({
            // userId,
            // serviceBookingId,
            rating,
            comment
        });

        await feedback.save();

        res.status(201).json({ message: 'Feedback submitted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    submitFeedback
};
