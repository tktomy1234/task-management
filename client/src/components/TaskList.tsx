import React, { useContext, useMemo } from 'react';
import Task from './Task';
import { TaskContext } from '../context/TaskContext';

const TaskList: React.FC = () => {
    const { tasks } = useContext(TaskContext);    
    const sortedTasks = useMemo(() => [...tasks].sort((a, b) => Number(a.done) - Number(b.done)), [tasks]);
    
    return (
        <div>
            {sortedTasks.map(task => (
                <Task key={task._id} task={task}/>
            ))}
        </div>
    );
};

export default TaskList;

