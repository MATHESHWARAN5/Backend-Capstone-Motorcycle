// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// const JWT_SECRET = process.env.JWT_SECRET;

// // Middleware to verify token
// const authMiddleware = async (req, res, next) => {
//   const token = req.header('Authorization')?.replace('Bearer ', '');

//   if (!token) return res.status(401).json({ message: 'No token provided' });

//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);
//     req.user = await User.findById(decoded.id);
//     if (!req.user) return res.status(401).json({ message: 'User not found' });
//     next();
//   } catch (error) {
//     console.error('Token verification error:', error.message);
//     res.status(401).json({ message: 'Invalid token' });
//   }
// };

// module.exports = authMiddleware;






const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = async (req, res, next) => {
  // Extract token from 'Authorization' header
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Find the user associated with the token
    req.user = await User.findById(decoded.id);
    if (!req.user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    console.error('Token verification error:', error.message);
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;
