import React, { useState } from 'react';
import TextInput from '../atoms/TextInput';
import Button from '../atoms/Button';

type Task = {
  title: string;
  description: string;
};

type AddTaskFormProps = {
  addTask: (task: Task) => void;
};

const AddTaskForm: React.FC<AddTaskFormProps> = ({ addTask }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

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
