import express, { Request, Response , Router} from 'express';
import TaskService from '../services/TaskService';


const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const tasks = await TaskService.getAllTasks();
        res.json(tasks);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

router.post('/', async (req: Request, res: Response) => {
    try {
        await TaskService.createTask(req.body);
        res.status(201).send('Task Created');
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

router.delete('/:taskId', async (req: Request, res: Response) => {
    try {
        await TaskService.deleteTask(req.params.taskId);
        res.status(200).send('Task Deleted');
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

router.put('/:taskId', async (req: Request, res: Response) => {
    try {
        const { taskId } = req.params;
        await TaskService.markTaskAsDone(taskId);
        res.status(200).send('Task Status Updated');
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

export default router;

