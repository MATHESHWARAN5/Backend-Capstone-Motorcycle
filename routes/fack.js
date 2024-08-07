// // /server/routes/api.js

// // const express = require('express');
// // const router = express.Router();
// const authenticationController = require('../controllers/authenticationController');
// const serviceBookingController = require('../controllers/serviceBookingController fack');
// const serviceHistoryController = require('../controllers/serviceHistoryController');
// const feedbackController = require('../controllers/feedbackController');

// // Authentication routes
// router.post('/register', authenticationController.register);
// router.post('/login', authenticationController.login);

// // Service booking routes
// router.post('/book-service', serviceBookingController.bookService);

// // Service history routes
// router.get('/service-history', serviceHistoryController.getServiceHistory);

// // Feedback routes
// router.post('/submit-feedback', feedbackController.submitFeedback);







// // Define a POST route '/endpoint'
// router.post('/endpoint', (req, res) => {
//     // This is the callback function that handles the POST request
//     // It receives two parameters: req (request) and res (response)
    
//     // Extract data from the request body
//     const requestData = req.body;

//     // Perform validation on the received data (if needed)
//     if (!requestData || !requestData.name) {
//         return res.status(400).json({ error: 'Name is required' });
//     }

//     // Process the received data
//     const greeting = `Hello, ${requestData.name}!`;

//     // Send back a response
//     res.status(200).json({ message: greeting });
// });

// // Export the router
// module.exports = router;















// const express = require('express');
// const router = express.Router();

// // Define a POST route '/endpoint'
// router.post('/endpoint', (req, res) => {
//     // This is the callback function that handles the POST request
//     // It receives two parameters: req (request) and res (response)
    
//     // Extract data from the request body
//     const requestData = req.body;

//     // Perform validation on the received data (if needed)
//     if (!requestData || !requestData.name) {
//         return res.status(400).json({ error: 'Name is required' });
//     }

//     // Process the received data
//     const greeting = `Hello, ${requestData.name}!`;

//     // Send back a response
//     res.status(200).json({ message: greeting });
// });

// // Authentication routes
// router.post('/register', authenticationController);
// router.post('/login', authenticationController);

// // Service booking routes
// router.post('/book-service', serviceBookingController.getServiceHistory);

// // Service history routes
// router.get('/service-history', serviceHistoryController.getServiceHistory);

// // Feedback routes
// router.post('/submit-feedback', feedbackController.submitFeedback);

// // Export the router
// module.exports = router;






