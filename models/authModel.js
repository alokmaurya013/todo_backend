const db = require('../config/db');
const bcrypt = require('bcryptjs');

const createUser = (user, callback) => {
  const { username, password } = user;
  const hashedPassword = bcrypt.hashSync(password, 10);
  db.run("INSERT INTO users (username, password) VALUES (?, ?)", [username, hashedPassword], function(err) {
    callback(err, this.lastID);
  });
};

const getUserByUsername = (username, callback) => {
  db.get("SELECT * FROM users WHERE username = ?", [username], (err, row) => {
    callback(err, row);
  });
};

module.exports = { createUser, getUserByUsername };
