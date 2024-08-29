// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// require('dotenv').config();
// const feedbackRoutes = require('./routes/feedback'); 

// const app = express();

// // Middleware setup
// app.use(bodyParser.json());
// app.use(cors());


// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, dbName: 'motorcycle', useUnifiedTopology: true })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('Error connecting to MongoDB:', err));

// // Routes
// const apiRoutes = require('./routes/api');
// app.use('/api', apiRoutes);
// app.use('/api/feedback', feedbackRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


// // app.use(cors(corsOptions));


// const corsOptions = {
//   origin: ['http://localhost:5173', 'https://motorcycle-frondend.vercel.app/'], // Add your frontend URL here
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
//   optionsSuccessStatus: 200,
// };

// app.use(cors(corsOptions));








// // server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();

// // Middleware setup
// app.use(bodyParser.json());
// app.use(cors());

// // Import routes
// const apiRoutes = require('./routes/api');

// // Use routes
// app.use('/api', apiRoutes);

// // Global error handler
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: 'Internal Server Error' });
// });

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   dbName: 'motorcycle' // Ensure this matches your MongoDB setup
// })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Error connecting to MongoDB:', err));

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });









const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const {apiRoutes} = require('./routes/api.js')
require('dotenv').config();
    // const apiRoutes = './routes/api';

const app = express();
const port = process.env.PORT || 5001;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());



// Use routes
// app.use('/api', apiRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'motorcycle'
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
