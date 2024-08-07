// const Feedback = require('../server/models/Feedback');

const Feedback = require('../models/Feedback');

const submitFeedback = async (req, res) => {
    try {
        // Extract feedback data from the request body
        const { userId, message, rating } = req.body;

        // Create a new feedback object
        const feedback = new Feedback({
            userId,
            message,
            rating
        });

        // Save the feedback to the database
        await feedback.save();

        // Send a success response
        res.status(201).json({ message: 'Feedback submitted successfully' });
    } catch (err) {
        // Handle errors
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    submitFeedback
};
