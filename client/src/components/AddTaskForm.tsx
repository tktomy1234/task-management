import React, { useState, useContext } from 'react';
import TextInput from '../atoms/TextInput';
import Button from '../atoms/Button';
import { TaskContext } from '../context/TaskContext';

type Task = {
  title: string;
  description: string;
};

const AddTaskForm: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const { addTask } = useContext(TaskContext);

  const onAddTask = () => {
    addTask({ title, description });
  };

  const handleTitleChange = (value: string): void => {
    setTitle(value);
  };

  const handleDescriptionChange = (value: string): void => {
    setDescription(value);
  };

  return (
    <div>
      <TextInput value={title} onChange={handleTitleChange} placeholder="Title" />
      <TextInput value={description} onChange={handleDescriptionChange} placeholder="Description" />
      <Button onClick={onAddTask} label="Add Task" />
    </div>
  );
};


export default AddTaskForm;
