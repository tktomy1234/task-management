import React from 'react';
import PropTypes from 'prop-types';
import Button from '../atoms/Button';
import classNames from 'classnames';
import './task.css';
const Task = ({ task, onDelete = Function.PropTypes, onDone=Function.PropTypes}) => {
    const onDeleteHandler = () => {
        onDelete(task._id);
    }
    const onEdit = () => {
        alert('Edit task')
    }
    const onDoneHandler = () => {
        onDone(task._id);
    }
    const wrapperClass= classNames('task', { 'task--done': !!task.done });
    return (
        <div className={wrapperClass}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <Button onClick={onEdit} label="Edit"/>
            <Button onClick={onDeleteHandler} label="Delete"/>
            <Button onClick={onDoneHandler} label="Done" isDisabled={task.done}/>
        </div>
    );
}

Task.propTypes = {
    task: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired,
        _id: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    onDone: PropTypes.func.isRequired
};

export default Task;
