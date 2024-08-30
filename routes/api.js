
// const express = require('express');
// const router = express.Router();
// // const authenticationController = require('../controllers/authenticationController');
// const serviceBookingController = require('../controllers/serviceBookingController');
// const serviceHistoryController = require('../controllers/serviceHistoryController');
// const feedbackController = require('../controllers/feedbackController');
// const authenticationController = require('../controllers/authenticationController');

// // Define routes
// // router.post('/auth', authenticationController);
// router.post('/auth', authenticationController.login);
// router.post('/register', authenticationController.register);

//  // This line is causing the error
//  router.post('/book-service', serviceBookingController.bookService);

// router.get('/service-history', serviceHistoryController.getServiceHistory);
// router.post('/submit-feedback', feedbackController.submitFeedback);

// module.exports = router;













// routes/api.js

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
