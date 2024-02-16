import React from 'react';
import { act, render } from '@testing-library/react';
import TaskServices from '../services/TaskServices';
import { TaskProvider, TaskContext } from './TaskContext';

jest.mock('../services/TaskServices');

describe('TaskContext', () => {
  const mockTasks = [
    { title: 'Task 1', description: 'Description 1', done: false },
    { title: 'Task 2', description: 'Description 2', done: true },
  ];

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should render the tasks from the context', async() => {
    TaskServices.getTasks= jest.fn().mockResolvedValue(mockTasks);
    let rendered: any = null;
    await act(async () => {
      rendered = render(
        <TaskProvider>
          <TaskContext.Consumer>
            {({ tasks }) => (
              <ul>
                {tasks.map((task) => (
                  <li key={task.title}>{task.title}</li>
                ))}
              </ul>
            )}
          </TaskContext.Consumer>
        </TaskProvider>
      );      
    }); 
    
    const taskItems = rendered.container.querySelectorAll('li');
    expect(taskItems.length).toBe(mockTasks.length);
    expect(taskItems[0].textContent).toBe(mockTasks[0].title);
    expect(taskItems[1].textContent).toBe(mockTasks[1].title);  
  });
});
 