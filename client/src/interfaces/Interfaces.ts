interface Task {
    _id?: number;
    title: string;
    description: string;
    done: boolean;
}

interface TaskProps {
    task: Task;
    onDelete: (taskId: number) => void;
    onDone?: (taskId: number) => void;
}

interface TaskListProps {
    tasks: Task[];
    onDelete: (taskId: number) => void;
    onDone?: (taskId: number) => void;
}
export { Task, TaskProps, TaskListProps};