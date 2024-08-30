// const express = require('express');
// const router = express.Router();
// const feedbackController = require('../controllers/feedbackController');

// // Define the feedback submission route
// router.post('/submit', feedbackController.submitFeedback);

// module.exports = router;


// routes/feedbackRoutes.js
const express = require('express');
const { submitFeedback } = require('../controllers/feedbackController');

const router = express.Router();

router.post('/submit', submitFeedback);

module.exports = router;
