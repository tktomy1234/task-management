import express, {Express} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import taskRoutes from './routes/tasks';
import connectDB from './db';

connectDB();
const PORT: string | number = process.env.PORT || 5001;

const app:Express = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
