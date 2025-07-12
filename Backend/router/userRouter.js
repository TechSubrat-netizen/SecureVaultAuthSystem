import express from 'express'
import { register,Login,otpSender } from '../controller/userController.js';
 const userRouter=express.Router();
 //Registration of user
 userRouter.post('/register',register);
 //Login User
 userRouter.post('/login',Login);
 //OTP sender
 userRouter.post('/sendotp',otpSender)
export default userRouter;