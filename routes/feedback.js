const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

// Define the feedback submission route
router.post('/submit', feedbackController.submitFeedback);

module.exports = router;
