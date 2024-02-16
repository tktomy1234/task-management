import React, { useState, useEffect } from 'react';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import TaskServices from './services/TaskServices';
import { Task } from './interfaces/Interfaces';


const App: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        getAllTasks();
    }, []);
    
    const getAllTasks = ():void => {
        TaskServices.getTasks()
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then((res: Task[] | any) => setTasks(res as Task[])) 
        .catch((err: Error) => console.log(err));
    }

    const addTask = ({title, description}: {title: string, description: string}) => {
        const newTask: Task = {
            title,
            description,
            done: false
        };

        TaskServices.addTask(newTask)
            .then(() => window.location.reload())
            .catch((err: Error) => console.log(err));
    };

    const deleteTask = (taskId: number): void => {
        TaskServices.deleteTask(taskId)
            .then(() => window.location.reload())
            .catch((err: Error) => console.log(err));
    };

    

    const markTaskAsDone = (taskId: number): void => {
        TaskServices.markTaskAsDone(taskId)
            .then(() => getAllTasks())
            .catch((err: Error) => console.log(err));
    };

    const sortedTasks = [...tasks].sort((a, b) => Number(a.done) - Number(b.done));

    return (
        <div>
            <h1>Task Manager</h1>
            <AddTaskForm addTask={addTask} />
            <TaskList tasks={sortedTasks} onDelete={deleteTask} onDone={markTaskAsDone} />
        </div>
    );
};

export default App;
