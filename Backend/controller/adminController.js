import adminModel from "../model/adminModel.js";
//admin login
let adminEmail='subratsahoo3883@gmail.com';
let adminPassword='Subrat@1234'
 const adminLogin= async(req,res)=>{
    try {
        const {email,password}= req.body;
        if(email && password){
            if(email==adminEmail){
                if (password==adminPassword){
                    res.status(200).json({msg:"successfully login"})
                }
                else{
                    res.status().json({msg:"Wrong password"})
                }
            }
        else{
            res.status(404). json({msg:"user not found"})
        }
        }
        else{
            res.status(400).json({msg:"please fill all the fields"})
        }
        
    } catch (error) {
          res.status(500),json({msg:"Internal server error"})
    }
 }
 export default   adminLogin;