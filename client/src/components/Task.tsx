import React, { FunctionComponent, useContext } from 'react';
import Button from '../atoms/Button';
import classNames from 'classnames';
import { TaskProps } from '../interfaces/Interfaces';
import { TaskContext } from '../context/TaskContext';
import './task.css';

const Task: FunctionComponent<TaskProps> = ({ task }) => {
    const { deleteTask, markTaskAsDone } = useContext(TaskContext);

    const onDeleteHandler = () => {
        deleteTask(task._id || 0);
    }

    const onEdit = () => {
        alert('Edit task')
    }

    const onDoneHandler = () => {
        markTaskAsDone(task._id || 0);       
    }

    const wrapperClass = classNames('task', { 'task--done': !!task.done });

    return (
        <div className={wrapperClass}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <Button onClick={onEdit} label="Edit" />
            <Button onClick={onDeleteHandler} label="Delete" />
            <Button onClick={onDoneHandler} label="Done" isDisabled={task.done} />
        </div>
    );
}

export default Task;
