const userModel = require('../models/authModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/db');

const jwtSecret = 'your_jwt_secret_key';

const signUp = (req, res) => {
  const { username, password } = req.body;
  userModel.createUser({ username, password }, (err, userId) => {
    if (err) return res.status(500).json({ message: 'Failed to create user' });
    res.status(201).json({ message: 'User created' });
  });
};

const login = (req, res) => {
  const { username, password } = req.body;
  userModel.getUserByUsername(username, (err, user) => {
    if (err || !user) return res.status(401).json({ message: 'Invalid credentials' });
    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  });
};

module.exports = { signUp, login };
