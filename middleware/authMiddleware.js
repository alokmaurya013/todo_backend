const jwt = require('jsonwebtoken');
const jwtSecret = 'your_jwt_secret_key';

const authenticate = (req, res, next) => {
  // Extract the token from the Authorization header
  const authHeader = req.header('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(403).json({ message: 'No token provided or invalid format' });
  }

  // Get the token from the header (after 'Bearer ' prefix)
  const token = authHeader.split(' ')[1];

  // Verify the token
  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.userId = decoded.userId;  // Attach userId to the request object
    next();
  });
};

module.exports = { authenticate };
