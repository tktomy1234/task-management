import axios from 'axios';
import TaskServices from './TaskServices';
import { mocked } from 'jest-mock';
jest.mock('axios');
const mAxiosGet = mocked(axios.get);
const mAxiosPost = mocked(axios.post);
const mAxiosDelete = mocked(axios.delete);
const mAxiosPut = mocked(axios.put);
describe('TaskServices', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch tasks from the server', async () => {
    const mockTasks = [
      {
        _id: 1,
        title: 'Task 1',
        description: 'This is task 1',
      },
      {
        _id: 2,
        title: 'Task 2',
        description: 'This is task 2',
      },
    ];

    mAxiosGet.mockResolvedValueOnce({data:[...mockTasks]});
    const tasks = await TaskServices.getTasks();

    expect(mAxiosGet).toHaveBeenCalledTimes(1);
    expect(mAxiosGet).toHaveBeenCalledWith('/api/tasks');
    expect(tasks).toEqual(mockTasks);
  });

  it('should add a new task to the server', async () => {
    const newTask = {
      title: 'New Task',
      description: 'This is a new task',
      done: false,
    };

    mAxiosPost.mockResolvedValueOnce({data:newTask});
    const addedTask = await TaskServices.addTask(newTask);

    expect(mAxiosPost).toHaveBeenCalledTimes(1);
    expect(mAxiosPost).toHaveBeenCalledWith('/api/tasks', newTask);
    expect(addedTask).toEqual(newTask);
  });

  it('should delete a task from the server', async () => {
    const taskId = 1;
    mAxiosDelete.mockResolvedValueOnce(null);
    await TaskServices.deleteTask(taskId);

    expect(mAxiosDelete).toHaveBeenCalledTimes(1);
    expect(mAxiosDelete).toHaveBeenCalledWith('/api/tasks/1');
  });

  it('should mark a task as done', async () => {
    const taskId = 1;
    mAxiosPut.mockResolvedValueOnce(null);
    await TaskServices.markTaskAsDone(taskId);

    expect(mAxiosPut).toHaveBeenCalledTimes(1);
    expect(mAxiosPut).toHaveBeenCalledWith('/api/tasks/1');
  });
});