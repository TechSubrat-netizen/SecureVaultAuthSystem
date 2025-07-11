import express from 'express'
import { register,Login } from '../controller/userController.js';
 const userRouter=express.Router();
 //Registration of user
 userRouter.post('/register',register);
 //Login User
 userRouter.post('/login',Login);
export default userRouter;