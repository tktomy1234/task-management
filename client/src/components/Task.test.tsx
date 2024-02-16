import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Task from './Task';

const mockTask = {
  title: 'Sample Task',
  description: 'This is a sample task',
  _id: 123456789,
  done: false, 
};

describe('Task', () => {
  it('should render the task title and description', () => {
    const { getByText } = render(<Task task={mockTask} onDelete={() => {}} />);
    const titleElement = getByText(mockTask.title);
    const descriptionElement = getByText(mockTask.description);
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it('should call the onDelete function with the task id when delete button is clicked', () => {
    const onDeleteMock = jest.fn();
    const { getByText } = render(<Task task={mockTask} onDelete={onDeleteMock} />);
    const deleteButton = getByText('Delete');
    fireEvent.click(deleteButton);
    expect(onDeleteMock).toHaveBeenCalledWith(mockTask._id);
  });

  it('should display an alert when edit button is clicked', () => {
    window.alert = jest.fn();
    const { getByText } = render(<Task task={mockTask} onDelete={() => {}} />);
    const editButton = getByText('Edit');
    fireEvent.click(editButton);
    expect(window.alert).toHaveBeenCalledWith('Edit task');
  });
});