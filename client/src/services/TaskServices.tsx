import axios, { AxiosResponse } from 'axios';
import { Task } from '../interfaces/Interfaces';

const TaskServices = {
  getTasks: (): Promise<Task[]> => axios.get<Task[]>('/api/tasks').then((response: AxiosResponse<Task[]>) => response.data),
  addTask: (task: Task): Promise<Task> => axios.post<Task, AxiosResponse<Task>>('/api/tasks', task).then((response: AxiosResponse<Task>) => response.data),
  deleteTask: (taskId: number): Promise<void> => axios.delete(`/api/tasks/${taskId}`),
  markTaskAsDone: (taskId: number): Promise<void> => axios.put(`/api/tasks/${taskId}`)
};

export default TaskServices;
