import axios from 'axios';
import TaskServices from './TaskServices';

jest.mock('axios');

describe('TaskServices', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch tasks from the server', async () => {
    const mockTasks = [
      {
        _id: '1',
        title: 'Task 1',
        description: 'This is task 1',
      },
      {
        _id: '2',
        title: 'Task 2',
        description: 'This is task 2',
      },
    ];

    axios.get.mockResolvedValueOnce([...mockTasks]);

    const tasks = await TaskServices.getTasks();

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/api/tasks');
    expect(tasks).toEqual(mockTasks);
  });

  it('should add a new task to the server', async () => {
    const newTask = {
      title: 'New Task',
      description: 'This is a new task',
    };

    axios.post.mockResolvedValueOnce(newTask);

    const addedTask = await TaskServices.addTask(newTask);

    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith('/api/tasks', newTask);
    expect(addedTask).toEqual(newTask);
  });

  it('should delete a task from the server', async () => {
    const taskId = '1';

    axios.delete.mockResolvedValueOnce();

    await TaskServices.deleteTask(taskId);

    expect(axios.delete).toHaveBeenCalledTimes(1);
    expect(axios.delete).toHaveBeenCalledWith('/api/tasks/1');
  });
});