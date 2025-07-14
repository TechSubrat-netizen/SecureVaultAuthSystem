import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";
let dbUrl=process.env.DB_URL;
const connectDB= async(req,res)=>{
    try {
        await mongoose.connect(dbUrl);
        console.log("Database is  connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);          
    }
 }
 export default connectDB;