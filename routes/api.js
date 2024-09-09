


const express = require('express');
const router = express.Router();

// Import the controllers
const authenticationController = require('../controllers/authenticationController');
const serviceBookingController = require('../controllers/serviceBookingController');
const serviceHistoryController = require('../controllers/serviceHistoryController');
const feedbackController = require('../controllers/feedbackController');

// Define routes

// Authentication Routes
router.post('/auth/login', authenticationController.login);
router.post('/auth/register', authenticationController.register);

// Service Booking Routes
router.post('/book-service', serviceBookingController.bookService);
router.get('/service-history', serviceHistoryController.getServiceHistory);

// Feedback Routes
router.post('/feedback/submit', feedbackController.submitFeedback);

module.exports = router;

