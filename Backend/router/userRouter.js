import express from 'express'
import { register } from '../controller/userController.js';
 const userRouter=express.Router();
 //Registration of user
 userRouter.post('/register',register)




export default userRouter;