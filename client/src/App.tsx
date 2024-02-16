import React from 'react';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import { TaskProvider } from './context/TaskContext';


const App: React.FC = () => {
    return (
        <div>
            <h1>Task Manager</h1>
            <TaskProvider>
                <AddTaskForm />
                <TaskList />
            </TaskProvider>
        </div>
    );
};

export default App;
