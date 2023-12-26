import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("MongoDB connected");
  } catch (error: any) {
    throw new Error("Unable to connect to MongoDB", error.message);
  }
};

export default connectDB;
