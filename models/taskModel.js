const db = require('../config/db');

const createTask = (task, callback) => {
  const { title, description, status = 'pending' } = task;
  db.run("INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)", [title, description, status], function(err) {
    callback(err, this.lastID);
  });
};

const getTasks = (callback) => {
  db.all("SELECT * FROM tasks", [], (err, rows) => {
    callback(err, rows);
  });
};

const getTaskById = (id, callback) => {
  db.get("SELECT * FROM tasks WHERE id = ?", [id], (err, row) => {
    callback(err, row);
  });
};

const updateTask = (id, status, callback) => {
  db.run("UPDATE tasks SET status = ? WHERE id = ?", [status, id], function(err) {
    callback(err, this.changes);
  });
};

const deleteTask = (id, callback) => {
  db.run("DELETE FROM tasks WHERE id = ?", [id], function(err) {
    callback(err, this.changes);
  });
};

module.exports = { createTask, getTasks, getTaskById, updateTask, deleteTask };
