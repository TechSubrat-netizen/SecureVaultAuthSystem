import bcrypt from 'bcrypt';
import userModel from "../model/userModel.js";

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
export const Login= async ()=>{
    try {
         
        
    } catch (error) {
        res.status(500).send(error)
    }
}