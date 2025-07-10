import mongoose from "mongoose";
let dbUrl="mongodb://localhost:27017/AUTH";
const connectDB= async(req,res)=>{
    try {
        await mongoose.connect(dbUrl);
        console.log("Database is  connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);          
    }
 }
 export default connectDB;