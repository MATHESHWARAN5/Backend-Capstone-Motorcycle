

// const jwt = require('jsonwebtoken');

// const authMiddleware = (req, res, next) => {
//     // Get the authorization header
//     const authHeader = req.headers['authorization'];
//     console.log("Authorization header:", authHeader);

//     // Check if the authorization header is present
//     if (!authHeader) {
//         return res.status(401).json({ message: 'No token provided' });
//     }

//     // Extract token from header
//     const token = authHeader.split(' ')[1]; // "Bearer <token>"
//     console.log("Extracted token:", token);

//     // Verify the token
//     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//         if (err) {
//             console.error("Token verification error:", err);
//             return res.status(401).json({ message: 'Invalid token' });
//         }

//         // Token is valid; attach decoded info to request object
//         console.log("Decoded token:", decoded);
//         req.user = decoded;
//         next();
//     });
// };

// module.exports = authMiddleware;












const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // Get the authorization header
    const authHeader = req.headers['authorization'];
    console.log("Authorization header:", authHeader);

    // Check if the authorization header is present
    if (!authHeader) {
        return res.status(401).json({ message: 'No token provided' });
    }

    // Extract token from header (expects format: "Bearer <token>")
    const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;
    console.log("Extracted token:", token);

    // Verify the token
    if (!token) {
        return res.status(401).json({ message: 'Invalid token format' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.error("Token verification error:", err);
            return res.status(401).json({ message: 'Invalid token' });
        }

        // Token is valid; attach decoded info to request object
        console.log("Decoded token:", decoded);
        req.user = decoded;
        next();
    });
};

module.exports = authMiddleware;
