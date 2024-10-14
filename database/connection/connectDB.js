import mongoose from "mongoose";


const connectDB = async () => {

    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('MongoDB connected');

    } catch (err) {
        console.log('Could not connect to the database!', err);
    }
};
export default connectDB;