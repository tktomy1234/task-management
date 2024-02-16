import React from 'react';
import Task from './Task';
import { TaskListProps } from '../interfaces/Interfaces';

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onDone = () => {} }) => (
    <div>
        {tasks.map(task => (
            <Task key={task._id} task={task} onDelete={onDelete} onDone={onDone} />
        ))}
    </div>
);


export default TaskList;

