import Task from '../models/Task';


const getAllTasks = () => Task.find();
const createTask = (taskData: any) => {
    const newTask = new Task(taskData);
    return newTask.save();
};

const deleteTask = (taskId: string) => Task.findByIdAndDelete(taskId);

const markTaskAsDone = (taskId: string) => Task.findByIdAndUpdate(taskId, { done: true }, { new: true });

export default {
    getAllTasks,
    createTask,
    deleteTask,
    markTaskAsDone
};
