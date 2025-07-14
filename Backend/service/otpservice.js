import nodemailer from "nodemailer";

// Store OTPs temporarily (in production, use Redis or database)
const otpStore = new Map();

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

const sendOTP = async (email) => {
  const otp = generateOTP();
  
  // Store OTP with 10 minutes expiry
  otpStore.set(email, {
    otp,
    expiry: Date.now() + 600000 // 10 minutes
  });

  // Use Gmail SMTP for real email sending
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email,
      pass: "subrat@1234" // Generate this from Google Account > Security > App Passwords
    }
  });

  const mailOptions = {
    from: 'SecureVault <your-gmail-address@gmail.com>',
    to: email,
    subject: 'Your OTP for SecureVault',
    text: `Your OTP is: ${otp}\nThis OTP is valid for 10 minutes.`,
    html: `<h2>Your OTP is: ${otp}</h2><p>This OTP is valid for 10 minutes.</p>`
  };

  try {
    await transporter.sendMail(mailOptions);
    // Log the OTP and email for testing
    console.log(`OTP for ${email}: ${otp}`);
    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};

// Export the OTP verification function
export const verifyOTP = (email, userOtp) => {
  const storedData = otpStore.get(email);
  if (!storedData) return false;
  
  if (Date.now() > storedData.expiry) {
    otpStore.delete(email);
    return false;
  }

  if (storedData.otp === userOtp) {
    otpStore.delete(email);
    return true;
  }
  return false;
};

export default sendOTP;
