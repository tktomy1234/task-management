import React, { FunctionComponent } from 'react';
import Button from '../atoms/Button';
import classNames from 'classnames';
import { TaskProps } from '../interfaces/Interfaces';
import './task.css';

const Task: FunctionComponent<TaskProps> = ({ task, onDelete, onDone }) => {
    const onDeleteHandler = () => {
        onDelete(task._id || 0);
    }
    const onEdit = () => {
        alert('Edit task')
    }
    const onDoneHandler = () => {
        if (onDone) {
            onDone(task._id || 0);
        }
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
