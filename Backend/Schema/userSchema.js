import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userName: { type: String },
  phoneNumber: { type: Number, unique: true },
  email: { type: String,unique: true },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(value);
      },
      message:
        'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.'
    }
  }
});
 export default userSchema;