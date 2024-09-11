

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// Controllers
const authenticationController = require('../controllers/authenticationController');
const serviceBookingController = require('../controllers/serviceBookingController');
const serviceHistoryController = require('../controllers/serviceHistoryController');
const feedbackController = require('../controllers/feedbackController');

// Authentication Routes
router.post('/auth/login', authenticationController.login);
router.post('/auth/register', authenticationController.register);

// Service Booking Routes
// Protected route - requires authentication
router.post('/book-service', authMiddleware, serviceBookingController.bookService);

// Service History Routes
// Protected route - requires authentication
router.get('/service-history', authMiddleware, serviceHistoryController.getServiceHistory);

// Feedback Routes
router.post('/feedback/submit', feedbackController.submitFeedback);

// Example of a protected route
router.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'You have access to this protected route' });
});

module.exports = router;
