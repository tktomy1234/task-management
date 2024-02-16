import {describe, expect, test} from '@jest/globals';
jest.mock('../services/TaskService');
import request  from 'supertest';
import express from 'express';
import TaskService from '../services/TaskService';
import router from './tasks';

const app = express();
app.use(express.json());
app.use('/', router);

describe('Task Routes', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should get all tasks', async () => {
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

    TaskService.getAllTasks = jest.fn().mockResolvedValueOnce(mockTasks);

    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockTasks);
  });

  it('should create a new task', async () => {
    const taskData = {
      title: 'New Task',
      description: 'This is a new task',
    };

    TaskService.createTask = jest.fn().mockResolvedValueOnce("");

    const response = await request(app).post('/').send(taskData);

    expect(response.status).toBe(201);
    expect(response.text).toBe('Task Created');
    expect(TaskService.createTask).toHaveBeenCalledWith(taskData);
  });

  it('should delete a task', async () => {
    const taskId = '1';

    TaskService.deleteTask = jest.fn().mockResolvedValue("");

    const response = await request(app).delete(`/${taskId}`);

    expect(response.status).toBe(200);
    expect(response.text).toBe('Task Deleted');
    expect(TaskService.deleteTask).toHaveBeenCalledWith(taskId);
  });

  it('should handle server errors', async () => {
    jest.spyOn(TaskService, 'getAllTasks').mockRejectedValueOnce(new Error('Server Error'));

    const response = await request(app).get('/');

    expect(response.status).toBe(500);
    expect(response.text).toBe('Server Error');
  });
});