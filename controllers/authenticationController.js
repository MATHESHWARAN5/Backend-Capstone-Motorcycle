
// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');

// // Route to handle user login
// router.post('/login', async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         // Check if user exists
//         const user = await User.findOne({ username });
//         if (!user) {
//             return res.status(401).json({ message: 'Invalid username or password' });
//         }

//         // Validate password
//         const isValidPassword = await user.isValidPassword(password);
//         if (!isValidPassword) {
//             return res.status(401).json({ message: 'Invalid username or password' });
//         }

//         // If user exists and password is valid, send success response
//         res.json({ message: 'Login successful', user });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// // Route to handle user registration
// router.post('/register', async (req, res) => {
//     const { username, password, email } = req.body;

//     try {
//         // Check if username or email already exists
//         const existingUser = await User.findOne({ $or: [{ username }, { email }] });
//         if (existingUser) {
//             return res.status(400).json({ message: 'Username or email already exists' });
//             // return res.status(400).json({ message:  'User registered successfully' });
//         }

//         // Create new user
//         const newUser = new User({ username, password, email });
//         await newUser.save();

//         // Send success response
//         res.status(201).json({ message: 'User registered successfully', user: newUser });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });


// module.exports = router;

// authenticationController.js



// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// // Function to register a new user
// const register = async (req, res) => {
//     const { username, password, email } = req.body;

//     try {
//         // Check if user already exists
//         const existingUser = await User.findOne({ $or: [{ username }, { email }] });
//         if (existingUser) {
//             return res.status(400).json({ message: 'Username or email already exists' });
//         }

//         // Hash the password
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Create new user
//         const newUser = new User({ username, password: hashedPassword, email });
//         await newUser.save();

//         res.status(201).json({ message: 'User registered successfully', user: newUser });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // Function to log in an existing user
// const login = async (req, res) => {
//     const { username, password } = req.body;
// console.log(req.body)
//     try {
//         // Check if user exists
//         const user = await User.findOne({ username });
//         console.log(user)
//         if (!user) {
//             return res.status(401).json({ message: 'No user Found' });
//         }

//         // Validate password
//         const isValidPassword = await bcrypt.compare(password, user.password);
//         console.log(isValidPassword)
//         if (!isValidPassword) {
            
//             return res.status(401).json({ message: 'Invalid  password' });
//         }

//         // Generate JWT token
//         const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//         res.json({ message: 'Login successful', token });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// module.exports = {
//     register,
//     login
// };



// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// // Function to register a new user
// const register = async (req, res) => {
//     const { username, password, email } = req.body;

//     try {
//         // Check if user already exists
//         const existingUser = await User.findOne({ $or: [{ username }, { email }] });
//         if (existingUser) {
//             return res.status(400).json({ message: 'Username or email already exists' });
//         }

//         // Hash the password
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Create new user
//         const newUser = new User({ username, password: hashedPassword, email });
//         await newUser.save();

//         res.status(201).json({ message: 'User registered successfully', user: newUser });
//     } catch (error) {
//         console.error('Registration error:', error); // Log error details
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// };

// // Function to log in an existing user
// const login = async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         // Check if user exists
//         const user = await User.findOne({ username });
//         if (!user) {
//             return res.status(401).json({ message: 'No user found' });
//         }

//         // Validate password
//         const isValidPassword = await bcrypt.compare(password, user.password);
//         if (!isValidPassword) {
//             return res.status(401).json({ message: 'Invalid password' });
//         }

//         // Generate JWT token
//         const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//         res.json({ message: 'Login successful', token });
//     } catch (error) {
//         console.error('Login error:', error); // Log error details
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// };

// module.exports = {
//     register,
//     login
// };














// controllers/authenticationController.js

const User = require('../models/User');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Check if the password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        // Authentication successful
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

module.exports = {
    register,
    login,
};
