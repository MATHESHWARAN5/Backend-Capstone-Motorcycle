// const ServiceBooking = require('../models/ServiceBooking');

// // Function to handle booking a service
// const bookService = async (req, res) => {
//  console.log('book service' ) 
//  console.log(req.body)

//   try {
//     // Extract data from request body
//     const { userId, serviceType, dateTime, make, model, registrationNumber } = req.body;

//     // Create a new service booking
//     const newServiceBooking = new ServiceBooking({
//       userId,
//       serviceType,
//       dateTime,
//       make,
//       model,
//       registrationNumber,
//       // Add any other necessary fields
//     });

//     // Save the service booking to the database
//     await newServiceBooking.save();

//     res.status(201).json({ success: true, message: 'Service booked successfully' });
//   } catch (error) {
//     console.error('Error booking service:', error);
//     res.status(500).json({ success: false, message: 'Failed to book service' });
//   }
// };

// module.exports = {
//   bookService,
// };


// Import necessary modules
const ServiceBooking = require('../models/ServiceBooking');

// Controller function to handle service booking requests
const bookService = async (req, res) => {
  try {
    // Extract data from request body
    const { serviceType, dateTime, make, model, registrationNumber } = req.body;

    // Create a new service booking
    const newServiceBooking = new ServiceBooking({
      serviceType,
      dateTime,
      make,
      model,
      registrationNumber
    });

    // Save the service booking to the database
    await newServiceBooking.save();

    res.status(201).json({ success: true, message: 'Service booked successfully' });
  } catch (error) {
    console.error('Error booking service:', error);
    res.status(500).json({ success: false, message: 'Failed to book service' });
  }
};

// Export the controller function
module.exports = {
  bookService
};
