import mongoose, { Schema, Document } from 'mongoose';

interface ITask extends Document {
    title: string;
    description: string;
    done: boolean;
}

const taskSchema: Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model<ITask>('Task', taskSchema);
