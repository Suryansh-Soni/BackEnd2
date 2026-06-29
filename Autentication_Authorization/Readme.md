# Authentication & Authorization System

A production-ready Authentication & Authorization system built with **Node.js**, **Express.js**, and **MongoDB**. This project demonstrates secure user authentication using **JWT**, **Refresh Tokens**, **Session Management**, and **Email OTP Verification** following backend development best practices.

---

## Project Structure

```text
Authentication_Authorization/
│
├── src/
│   │
│   ├── config/
│   │   └── config.js                 # Environment configuration
│   │
│   ├── controllers/
│   │   └── auth.controller.js        # Authentication business logic
│   │
│   ├── models/
│   │   ├── user.model.js             # User schema
│   │   ├── session.model.js          # Session schema
│   │   └── otp.model.js              # OTP schema
│   │
│   ├── routes/
│   │   └── auth.router.js            # API routes
│   │
│   ├── services/
│   │   └── email.service.js          # Email service using Nodemailer
│   │
│   ├── utils/
│   │   └── util.js                   # Utility functions
│   │
│   ├── app.js                        # Express application setup
│   └── server.js                     # Application entry point
│
├── .env                              # Environment variables
├── .gitignore                        # Ignored files
├── package.json                      # Project metadata & dependencies
├── package-lock.json                 # Dependency lock file
└── README.md                         # Project documentation
```

---

## Architecture

```text
                           Client
                              │
                              │ HTTP Request
                              ▼
                      Express Application
                              │
                              ▼
                    Authentication Router
                              │
                              ▼
                 Authentication Controller
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
   User Model           Session Model          OTP Model
        │                     │                     │
        └─────────────────────┼─────────────────────┘
                              ▼
                           MongoDB
                              │
                              ▼
                   Email Service (Nodemailer)
                              │
                              ▼
                        Google OAuth2
```

---

## Features

- User Registration
- Email OTP Verification
- Secure Password Hashing (SHA-256)
- JWT Authentication
- Access Token Generation
- Refresh Token Generation
- Refresh Token Rotation
- Session Management
- Cookie-Based Authentication
- Protected Routes
- Get Current User
- Logout
- Logout from Current Device
- Logout from All Devices
- Environment Variable Management

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/verify-email` | Verify email using OTP |
| POST | `/api/auth/login` | Authenticate a user |
| GET | `/api/auth/get-me` | Get authenticated user details |
| GET | `/api/auth/refresh-token` | Generate a new access token |
| GET | `/api/auth/logout` | Logout from current device |
| GET | `/api/auth/logout-all` | Logout from all active sessions |

---

## Technologies Used

| Technology | Purpose |
|------------|---------|
| **Node.js** | JavaScript runtime environment |
| **Express.js** | REST API framework |
| **MongoDB** | NoSQL database |
| **Mongoose** | Object Data Modeling (ODM) for MongoDB |
| **jsonwebtoken** | Access & Refresh Token generation and verification |
| **crypto** | Password, OTP and Refresh Token hashing |
| **cookie-parser** | Parses HTTP cookies |
| **nodemailer** | Sends OTP verification emails |
| **Google OAuth2** | Secure Gmail authentication |
| **dotenv** | Loads environment variables |
| **morgan** | HTTP request logging middleware |

---

## Security Features

- SHA-256 Password Hashing
- SHA-256 OTP Hashing
- Refresh Token Hashing
- JWT Authentication
- HTTP-Only Cookies
- Refresh Token Rotation
- Session Management
- Email Verification
- Secure Environment Variable Management

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/Suryansh-Soni/BackEnd2.git
```

### Navigate to the Project

```bash
cd BackEnd2/Autentication_Authorization
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the root directory.

```env
PORT=8080

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

Google_user=your_email@gmail.com
Gooogle_Client_id=your_google_client_id
Google_Client_Secrete=your_google_client_secret
Google_refresh_token=your_google_refresh_token
```

### Start the Development Server

```bash
npm run dev
```

---

## Future Enhancements

- Forgot Password
- Password Reset via Email
- Role-Based Authorization (RBAC)
- Rate Limiting
- Docker Support
- Swagger API Documentation
- Unit & Integration Testing
- Redis Session Management

---

## Author

**Suryansh Soni**

- GitHub: https://github.com/Suryansh-Soni
- LinkedIn: https://www.linkedin.com/in/suryansh-soni-6b1196369

---

If you found this project useful, consider giving it a ⭐ on GitHub.