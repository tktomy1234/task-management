const Task = require('../models/Task');

const getAllTasks = () => Task.find();
const createTask = (taskData) => {
    const newTask = new Task(taskData);
    return newTask.save();
};

const deleteTask = (taskId) => Task.findByIdAndDelete(taskId);

const markTaskAsDone = (taskId) => Task.findByIdAndUpdate(taskId, { done: true }, { new: true });

module.exports = {
    getAllTasks,
    createTask,
    deleteTask,
    markTaskAsDone
};
