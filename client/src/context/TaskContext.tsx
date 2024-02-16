import React, { useState, useEffect, createContext } from 'react';
import TaskServices from '../services/TaskServices';
import { Task } from '../interfaces/Interfaces';

export const TaskContext = createContext<{
    tasks: Task[];
    getAllTasks: () => void;
    addTask: (task: { title: string; description: string }) => void;
    deleteTask: (taskId: number) => void;
    markTaskAsDone: (taskId: number) => void;
}>({
    tasks: [],
    getAllTasks: () => {},
    addTask: () => {},
    deleteTask: () => {},
    markTaskAsDone: () => {},
});

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        getAllTasks();
    }, []);

    const getAllTasks = (): void => {
        TaskServices.getTasks()
            .then((res: Task[] | any) => setTasks(res as Task[]))
            .catch((err: Error) => console.log(err));
    };

    const addTask = ({ title, description }: { title: string; description: string }) => {
        const newTask: Task = {
            title,
            description,
            done: false,
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

    return (
        <TaskContext.Provider value={{ tasks, getAllTasks, addTask, deleteTask, markTaskAsDone }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskContext;
