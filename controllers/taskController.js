const taskModel = require('../models/taskModel');

const createTask = (req, res) => {
  const { title, description } = req.body;
  taskModel.createTask({ title, description }, (err, taskId) => {
    if (err) return res.status(500).json({ message: 'Failed to create task' });
    res.status(201).json({ message: 'Task created', id: taskId });
  });
};

const getTasks = (req, res) => {
  taskModel.getTasks((err, tasks) => {
    if (err) return res.status(500).json({ message: 'Failed to fetch tasks' });
    res.status(200).json({ tasks });
  });
};

const getTaskById = (req, res) => {
  const { id } = req.params;
  taskModel.getTaskById(id, (err, task) => {
    if (err) return res.status(500).json({ message: 'Failed to fetch task' });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.status(200).json({ task });
  });
};

const updateTask = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  taskModel.updateTask(id, status, (err, changes) => {
    if (err || changes === 0) return res.status(500).json({ message: 'Failed to update task' });
    res.status(200).json({ message: 'Task updated' });
  });
};

const deleteTask = (req, res) => {
  const { id } = req.params;
  taskModel.deleteTask(id, (err, changes) => {
    if (err || changes === 0) return res.status(500).json({ message: 'Failed to delete task' });
    res.status(200).json({ message: 'Task deleted' });
  });
};

module.exports = { createTask, getTasks, getTaskById, updateTask, deleteTask };
