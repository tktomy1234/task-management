import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Task from './Task';
import DummyProvider from '../utils/DummyProvider';

const mockTask = {
  title: 'Sample Task',
  description: 'This is a sample task',
  _id: 123456789,
  done: false, 
};


describe('Task', () => {
  it('should render the task title and description', () => {
    const { getByText } = render(
      <DummyProvider>
        <Task task={mockTask} />
      </DummyProvider>
    );
    const titleElement = getByText(mockTask.title);
    const descriptionElement = getByText(mockTask.description);
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it('should call the onDelete function with the task id when delete button is clicked', () => {
    const onDeleteMock = jest.fn();
    const { getByText } =  render(
      <DummyProvider addOn={{deleteTask: onDeleteMock}}>
        <Task task={mockTask} />
      </DummyProvider>
    );
    const deleteButton = getByText('Delete');
    fireEvent.click(deleteButton);
    expect(onDeleteMock).toHaveBeenCalledTimes(1);
  });

  it('should display an alert when edit button is clicked', () => {
    window.alert = jest.fn();
    const { getByText } =  render(
      <DummyProvider >
        <Task task={mockTask} />
      </DummyProvider>
    );
    const editButton = getByText('Edit');
    fireEvent.click(editButton);
    expect(window.alert).toHaveBeenCalledWith('Edit task');
  });
});