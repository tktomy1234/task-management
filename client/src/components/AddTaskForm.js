import React , { useState }from 'react';
import PropTypes from 'prop-types';
import TextInput from '../atoms/TextInput';
import Button from '../atoms/Button';

const AddTaskForm = ({addTask}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const onAddTask = () => {
        addTask({ title, description });
    }

    return(
        <div>                
            <TextInput value={title} onChange={setTitle} placeholder="Title" />
            <TextInput value={description} onChange={setDescription} placeholder="Description" />
            <Button onClick={onAddTask} label="Add Task"/>
        </div>
    );
}

AddTaskForm.propTypes = {
    addTask: PropTypes.func.isRequired
};


export default AddTaskForm;
