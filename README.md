# SecureVault Authentication System

A robust authentication system built with Node.js, Express, and MongoDB that provides secure user authentication with OTP verification.

## Features

- 🔐 User Authentication (Register/Login)
- 📧 Email OTP Verification
- 👤 Admin Dashboard Access
- 🔒 Secure Password Hashing
- 🎫 JWT Token Based Sessions
- ⚡ Rate Limiting Protection
- 📝 Input Validation
- 📊 Request Logging

## Tech Stack

- Node.js
- Express.js
- MongoDB
- JWT
- Nodemailer
- bcrypt
- Winston Logger

## Prerequisites

- Node.js v14+
- MongoDB
- Gmail Account (for OTP service)

## Environment Variables

Create a `.env` file in the backend directory:

```env
SECRET_KEY=your_jwt_secret
SALT_ROUND=10
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
DB_URL=mongodb://localhost:27017/AUTH
EMAIL_USER=your_gmail
EMAIL_PASSWORD=your_app_specific_password
FRONTEND_URL=http://localhost:5173
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/SecureVaultAuthSystem.git
```

2. Install dependencies:
```bash
cd SecureVaultAuthSystem/Backend
npm install
```

3. Start the server:
```bash
npm run dev
```

## API Endpoints

### User Routes
- POST `/user/register` - Register new user
- POST `/user/login` - User login
- POST `/user/sendotp` - Send OTP for verification

### Admin Routes
- POST `/admin/login` - Admin login

## Security Features

- Password Hashing using bcrypt
- JWT for session management
- Rate limiting for login attempts
- HTTP-only cookies
- OTP expiration
- Input validation
- CORS protection

## Error Handling

The system includes comprehensive error handling for:
- Invalid credentials
- Expired OTPs
- Rate limiting
- Server errors
- Database errors

## Logging

Winston logger is configured to track:
- Error logs (error.log)
- Combined logs (combined.log)
- Console logs (development)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.
