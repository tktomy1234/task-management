import React from 'react';
import { TaskContext } from '../context/TaskContext';

const DummyProvider = ({ children, addOn }: { children: React.ReactNode; addOn?: any }) => {
    return (
      <TaskContext.Provider value={{
        tasks: [],
        getAllTasks: () => {},
        addTask: (task: { title: string; description: string; }) => {},
        deleteTask: (taskId: number) => {},
        markTaskAsDone: (taskId: number) => {},
        ...addOn
      }}>
        {children}
      </TaskContext.Provider>
    );
  };

export default DummyProvider;