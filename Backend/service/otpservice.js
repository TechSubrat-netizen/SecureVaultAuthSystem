import nodemailer from "nodemailer";
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}
//send otp options
const sendOTP =  async(email) => {
  const otp = generateOTP();
  const Transporter= nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "test@example.com",
      pass: "Test@1234",
    },
  });
  const mailoptions={
    from:'SecureVault <no-reply@example.com>',
    to:email,

    
    subject:'Your OTP code',
    text:`${otp} is valid for 10 minutes`
  }
await Transporter.sendMail(mailoptions)
};
export default sendOTP
