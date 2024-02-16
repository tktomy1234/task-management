import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskServices from './services/TaskServices';
import AddTaskForm from './components/AddTaskForm';
const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getAllTasks();
    }, []);
    
    const getAllTasks = () => {
        TaskServices.getTasks()
        .then(res => setTasks(res.data))
        .catch(err => console.log(err));
    }
    const addTask = ({title, description}) => {
        TaskServices.addTask({ title, description })
            .then(() => window.location.reload())
            .catch(err => console.log(err));
    };

    const deleteTask = (taskId) => {
        TaskServices.deleteTask(taskId)
            .then(() => window.location.reload())
            .catch(err => console.log(err));
    };
    const markTaskAsDone = (taskId, status) => {
        TaskServices.markTaskAsDone(taskId)
            .then(() => getAllTasks())
            .catch(err => console.log(err));
    };
    const sortedTasks = [...tasks].sort((a, b) => a.done - b.done);

    return (
        <div>
            <h1>Task Manager</h1>
            <AddTaskForm addTask={addTask} />
            <TaskList tasks={sortedTasks} onDelete={deleteTask} onDone={markTaskAsDone} />
        </div>
    );
};


export default App;