const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware.authenticate, taskController.createTask);
router.get('/', authMiddleware.authenticate, taskController.getTasks);
router.get('/:id', authMiddleware.authenticate, taskController.getTaskById);
router.put('/:id', authMiddleware.authenticate, taskController.updateTask);
router.delete('/:id', authMiddleware.authenticate, taskController.deleteTask);

module.exports = router;
