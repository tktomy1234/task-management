const express = require('express');
const router = express.Router();
const TaskService = require('../services/TaskService');

router.get('/', async (req, res) => {
    try {
        const tasks = await TaskService.getAllTasks();
        res.json(tasks);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

router.post('/', async (req, res) => {
    try {
        await TaskService.createTask(req.body);
        res.status(201).send('Task Created');
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

router.delete('/:taskId', async (req, res) => {
    try {
        await TaskService.deleteTask(req.params.taskId);
        res.status(200).send('Task Deleted');
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

router.put('/:taskId', async (req, res) => {
    try {
        const { taskId } = req.params;
        await TaskService.markTaskAsDone(taskId);
        res.status(200).send('Task Status Updated');
    } catch (err) {
        res.status(500).send('Server Error');
    }
});




module.exports = router;


