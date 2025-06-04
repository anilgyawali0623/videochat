import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_CONNECTION);
    console.log(" mongo db is connected");
  } catch (error) {
    console.log("not working database");
    process.exit(1);
    
  }
};
