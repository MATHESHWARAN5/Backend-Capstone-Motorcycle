// // routes/authRoutes.js

// // const express = require('express');
// // const router = express.Router();
// // const User = require('../models/User');

// // // User registration
// // router.post('/register', async (req, res) => {
// //     const { username, password, email } = req.body;

// //     try {
// //         // Check if user already exists
// //         const existingUser = await User.findOne({ $or: [{ username }, { email }] });
// //         if (existingUser) {
// //             return res.status(400).json({ message: 'Username or email already exists' });
// //         }

// //         // Create new user
// //         const newUser = new User({ username, password, email });
// //         await newUser.save();

// //         res.status(201).json({ message: 'User registered successfully', user: newUser });
// //     } catch (error) {
// //         res.status(500).json({ message: error.message });
// //     }
// // });

// // // User login
// // router.post('/login', async (req, res) => {
// //     const { username, password } = req.body;

// //     try {
// //         // Check if user exists
// //         const user = await User.findOne({ username });
// //         if (!user) {
// //             return res.status(401).json({ message: 'Invalid username or password' });
// //         }

// //         // Validate password
// //         const isValidPassword = await user.isValidPassword(password);
// //         if (!isValidPassword) {
// //             return res.status(401).json({ message: 'Invalid username or password' });
// //         }

// //         res.json({ message: 'Login successful', user });
// //     } catch (error) {
// //         res.status(500).json({ message: error.message });
// //     }
// // });

// // module.exports = router;

// const express = require('express');
// const router = express.Router();
// const authenticationController = require('../controllers/authenticationController');

// // User registration route
// router.post('/register', authenticationController.register);

// // User login route
// router.post('/login', authenticationController.login);

// module.exports = router;

// backend/routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Registration endpoint
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // Check if the user already exists
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: 'Username or email already exists' });

        user = new User({
            username,
            email,
            password: await bcrypt.hash(password, 10),
        });

        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Login endpoint
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ message: 'Invalid username or password' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid username or password' });

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, message: 'Login successful' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
