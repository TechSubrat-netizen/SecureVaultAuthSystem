import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './config/db.js';
import userRouter from './router/userRouter.js';
import adminRouter from './router/adminRouter.js';
import cors from'cors'



let port=3000 
const  app=express(); 
// cross origin policy and all

 cors()

//Middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use('/user',userRouter);
app.use('/admin',adminRouter)

//API"s
app.get('/',(req,res)=>{
    res.send("hello i am from the server")
})
app.get('/user',(req,res)=>{
    res.send("Hello i am  the user which you are looking for")
});

//Database connections;

connectDB()

//Start the server
app.listen(`${port}`,"localhost",()=>{
    console.log(`server is running on http://localhost:${port}`);  
})