import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import AddTaskForm from './AddTaskForm';
import DummyProvider from '../utils/DummyProvider';

describe('AddTaskForm', () => {
  it('should render the form correctly', () => {
    const { getByPlaceholderText, getByText } = render(<DummyProvider><AddTaskForm /></DummyProvider>);
    
    const titleInput = getByPlaceholderText('Title');
    const descriptionInput = getByPlaceholderText('Description');
    const addButton = getByText('Add Task');
    
    expect(titleInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  it('should update the input values correctly', () => {
    const { getByPlaceholderText } = render(<DummyProvider><AddTaskForm /></DummyProvider>);

    const titleInput = getByPlaceholderText('Title') as HTMLInputElement;
    const descriptionInput = getByPlaceholderText('Description') as HTMLInputElement;

    fireEvent.change(titleInput, { target: { value: 'New Task' } });
    fireEvent.change(descriptionInput, { target: { value: 'This is a new task' } });

    expect(titleInput.value).toBe('New Task');
    expect(descriptionInput.value).toBe('This is a new task');
  });

  it('should call addTask function with correct data when Add Task button is clicked', () => {
    const addTaskMock = jest.fn();
    const { getByText } = render(<DummyProvider addOn={{ addTask: addTaskMock }}><AddTaskForm /></DummyProvider>);
    const addButton = getByText('Add Task');    
    fireEvent.click(addButton);
    
    expect(addTaskMock).toHaveBeenCalledTimes(1);
    expect(addTaskMock).toHaveBeenCalledWith({ title: '', description: '' });
  });
});