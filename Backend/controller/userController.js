import bcrypt from 'bcrypt';
import userModel from "../model/userModel.js";
import Cookies from 'cookies';
 import jwt from'jsonwebtoken'
  import sendOTP from '../service/otpservice.js';
let secretKey='tranzol@123';


// Registration user
export const register = async (req, res) => {
  try {
    const data = req.body;
    console.log("Original Password:", data.password);

    const saltRounds = 10;
    const encryptPassword = await bcrypt.hash(data.password, saltRounds);
    console.log("Encrypted Password:", encryptPassword);

    const result = await userModel.create({ ...data, password: encryptPassword });
    console.log("Saved User:", result);

    res.status(202).send({ msg: 'User registration successfully', result });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).send(error);
  }
};
//Login user
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const user = await userModel.findOne({ email });
      if (user) {
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
          // Generate JWT token
          const token = jwt.sign({ userId: user._id, email: user.email }, secretKey, { expiresIn: '1h' });
          console.log("Generated Token",token)
          // Send token as HTTP-only cookie
          res.cookie('token', token, {
            httpOnly: true,
            secure: false, // Set to true if using HTTPS
            maxAge: 3600000 // 1 hour
          });
          // Respond with user info (excluding password)
          const { password, ...userInfo } = user._doc;
          console.log(user._doc)
          res.status(200).send({ msg: 'Login successful', user: userInfo });
        } else {
          res.status(401).send({ msg: 'Invalid password' });
        }
      } else {
        res.status(404).send({ msg: 'User not found' });
      }
    } else {
      res.status(400).send({ msg: 'Please fill up all the fields' });
    }
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).send(error);
  }
};
//Logout User
export const Logout = async (req, res) => {
  try {
    res.clearCookie('token');
    res.status(200).send({ msg: 'Logout successful' });
  } catch (error) {
    res.status(500).send({ msg: 'Internal server error' });
  }
};
//sending  OTP handler
 export const otpSender= async(req,res)=>{
  try {
    const {email}=req.body;
    console.log(req.body)
    // Check if email exists in user database
    const user = await userModel.findOne({ email });
    console.log(user)
    if (!user) {
      return res.status(404).send({ msg: "Email not registered" });
    }
    console.log(email);
    try {
      await sendOTP(email);
      console.log(email)
       res.status(200).send({msg:"OTP send successfully, please check your mail for further verification"})
    } catch (mailError) {
      console.error("OTP Send Error:", mailError);
      res.status(500).send({ msg: "Failed to send OTP", error: mailError.message || mailError });
    }
  } catch (error) {
    console.error("OTP Handler Error:", error);
    res.status(500).send({ msg: "Internal server error", error: error.message || error });
  }
 }


