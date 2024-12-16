const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET;

exports.generateToken = (user) => {
  return jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
};

exports.verifyToken = (token) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (err) {
    return null;
  }
};
