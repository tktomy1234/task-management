import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log('MongoDB connected...');
  } catch (err) {
    if (err instanceof Error) {
        console.error(err.message);
    }
    process.exit(1);
  }
};

export default connectDB;
