import axios from 'axios';
const TaskServices = {
    getTasks: () => axios.get('/api/tasks'),
    addTask: (task) => axios.post('/api/tasks', task),
    deleteTask: (taskId) => axios.delete(`/api/tasks/${taskId}`),
    markTaskAsDone: (taskId) => axios.put(`/api/tasks/${taskId}`)
};
export default TaskServices;

