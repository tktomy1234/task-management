import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskList from './TaskList';
import DummyProvider from '../utils/DummyProvider';

const mockTasks = [
  {
    _id: 1,
    title: 'Task 1',
    description: 'This is task 1',
    done: false,
  },
  {
    _id: 2,
    title: 'Task 2',
    description: 'This is task 2',
    done: false,
  },
];

describe('TaskList', () => {
  it('should render the list of tasks', () => {
    const { getByText } = render(
      <DummyProvider addOn={{ tasks: mockTasks }} >
        <TaskList />
      </DummyProvider>
    );

    mockTasks.forEach((task) => {
      const titleElement = getByText(task.title);
      const descriptionElement = getByText(task.description);
      expect(titleElement).toBeInTheDocument();
      expect(descriptionElement).toBeInTheDocument();
    });
  });
});