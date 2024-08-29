const Feedback = require('../models/Feedback');

// Handle feedback submission
exports.submitFeedback = async (req, res) => {
  try {
    const { rating, comment } = req.body;

    if (typeof rating !== 'number' || rating < 1 || rating > 5) {
      return res.status(400).json({ message: 'Invalid rating value' });
    }
    if (typeof comment !== 'string' || comment.trim() === '') {
      return res.status(400).json({ message: 'Comment cannot be empty' });
    }

    const newFeedback = new Feedback({ rating, comment });
    await newFeedback.save();

    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    console.error('Error submitting feedback:', error.message);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};
