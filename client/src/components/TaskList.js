import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const TaskList = ({ tasks, onDelete, onDone = Function.PropTypes }) => (
    <div>
        {tasks.map(task => (
            <Task key={task._id} task={task} onDelete={onDelete} onDone={onDone} />
        ))}
    </div>
);

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onDone: PropTypes.func
};

export default TaskList;
