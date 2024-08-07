// Import necessary modules and controllers
const express = require('express');
const router = express.Router();
// const authenticationController = require('../controllers/authenticationController');
const serviceBookingController = require('../controllers/serviceBookingController');
const serviceHistoryController = require('../controllers/serviceHistoryController');
const feedbackController = require('../controllers/feedbackController');
const authenticationController = require('../controllers/authenticationController');

// Define routes
// router.post('/auth', authenticationController);
router.post('/auth', authenticationController.login);
router.post('/register', authenticationController.register);

 // This line is causing the error
 router.post('/book-service', serviceBookingController.bookService);

router.get('/service-history', serviceHistoryController.getServiceHistory);
router.post('/submit-feedback', feedbackController.submitFeedback);

module.exports = router;
