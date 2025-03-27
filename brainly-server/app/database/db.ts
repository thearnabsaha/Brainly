import mongoose from 'mongoose';

const connectDB = async () => {
    
    try {
        const connectionInstance = await mongoose.connect(`mongodb+srv://hparnab0:u2FHHUheetWxdJ7N@brainly.a9e87.mongodb.net/?retryWrites=true&w=majority&appName=Brainly`);
        console.log(`MongoDB Connected! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error('Your Error is: ', error);
        process.exit(1);
    }
};

export default connectDB;