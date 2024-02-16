import Task from '../models/Task';
import TaskService  from './TaskService';

jest.mock('../models/Task');

describe('TaskService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should get all tasks', async () => {
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

    Task.find = jest.fn().mockResolvedValueOnce(mockTasks);
    const tasks = await TaskService.getAllTasks();

    expect(Task.find).toHaveBeenCalledTimes(1);
    expect(tasks).toEqual(mockTasks);
  });

  it('should create a new task', async () => {
    const taskData = {
      title: 'New Task',
      description: 'This is a new task',
    };

    const mockTask = {
      _id: '1',
      title: 'New Task',
      description: 'This is a new task',
    };

    jest.spyOn(Task.prototype, 'save').mockImplementationOnce(() => Promise.resolve(mockTask));
    const createdTask = await TaskService.createTask(taskData);

    expect(Task).toHaveBeenCalledTimes(1);
    expect(Task).toHaveBeenCalledWith(taskData);
    expect(createdTask).toEqual(mockTask);
  });

  it('should delete a task', async () => {
    const taskId = '1';
    Task.findByIdAndDelete =jest.fn().mockResolvedValueOnce("");
    await TaskService.deleteTask(taskId);

    expect(Task.findByIdAndDelete).toHaveBeenCalledTimes(1);
    expect(Task.findByIdAndDelete).toHaveBeenCalledWith(taskId);
  });
});