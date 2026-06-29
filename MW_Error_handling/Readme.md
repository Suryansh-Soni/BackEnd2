# Express.js Error Handling Middleware

A beginner-friendly Express.js project demonstrating **custom error handling** using middleware. This project covers creating custom error classes, throwing errors from routes and middleware, centralized error handling, and sending meaningful HTTP status codes.

---

## Overview

This project focuses on implementing a centralized error-handling mechanism in Express.js using custom middleware.

It demonstrates:

- Custom Error Class
- Error Handling Middleware
- Throwing Custom Errors
- Handling Runtime Errors
- Protected Routes
- Middleware-Based Authentication
- HTTP Status Codes

---

## Features

- Custom Error Class
- Centralized Error Handling Middleware
- Authentication Middleware
- Protected API Routes
- Runtime Error Handling
- Custom HTTP Status Codes
- Clean Error Responses

---

## Technologies Used

| Technology | Purpose |
|------------|---------|
| **Node.js** | JavaScript runtime environment |
| **Express.js** | Backend web framework |
| **Middleware** | Handles requests and centralized error handling |
| **Custom Error Class** | Creates reusable HTTP errors |
| **HTTP Status Codes** | Returns meaningful API responses |

---

## Project Structure

```text
MW_Error_handling/
│
├── node_modules/
│
├── CustomError.js          # Custom Error Class
│
├── index.js                # Express Server & Routes
│
├── package.json
├── package-lock.json
└── README.md
```

---

## Request Flow

```text
                  Client Request
                         │
                         ▼
                Express Application
                         │
                         ▼
              Authentication Middleware
                         │
          ┌──────────────┴──────────────┐
          │                             │
          ▼                             ▼
    Valid Request                 Throw Error
          │                             │
          ▼                             ▼
      Route Handler            Error Middleware
          │                             │
          └──────────────┬──────────────┘
                         ▼
                 HTTP Response
```

---

## Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api` | Protected route requiring a valid token |
| GET | `/admin` | Throws a custom **403 Forbidden** error |
| GET | `/err` | Generates a runtime error for testing |

---

## Custom Error Class

A reusable error class extends JavaScript's built-in `Error` object.

```javascript
class CustomError extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }
}
```

This allows errors to carry both an HTTP status code and a custom message.

---

## Error Handling Middleware

All application errors are handled by a single middleware.

```javascript
app.use((err, req, res, next) => {
    const { status = 500 } = err;
    res.status(status).send(err.message);
});
```

Benefits:

- Centralized error handling
- Consistent API responses
- Cleaner route handlers
- Easier debugging

---

## Authentication Middleware

The `/api` endpoint is protected using a custom middleware.

Example:

```http
GET /api?token=123
```

Valid Token

```
123
```

Response

```http
200 OK
```

Invalid Token

```http
401 Unauthorized
```

Response

```
access denied
```

---

## Error Scenarios

### Unauthorized Access

```javascript
throw new CustomError(401, "access denied");
```

Returns

```http
401 Unauthorized
```

---

### Forbidden Access

```javascript
throw new CustomError(403, "admin access denied");
```

Returns

```http
403 Forbidden
```

---

### Runtime Error

```javascript
abc = abc;
```

Returns

```http
500 Internal Server Error
```

---

## Concepts Covered

- Express Middleware
- Error Handling Middleware
- Custom Error Classes
- HTTP Status Codes
- Protected Routes
- Authentication Middleware
- JavaScript Error Object
- Centralized Error Handling
- Request Lifecycle

---

## Running the Project

Clone the repository

```bash
git clone <repository-url>
```

Navigate to the project

```bash
cd MW_Error_handling
```

Install dependencies

```bash
npm install
```

Run the application

```bash
node index.js
```

or

```bash
nodemon index.js
```

Open

```
http://localhost:8080
```

---

## Learning Outcomes

Through this project, I learned:

- Creating custom error classes
- Throwing custom errors
- Express error-handling middleware
- Middleware execution flow
- Handling runtime exceptions
- Returning proper HTTP status codes
- Building cleaner and maintainable Express applications

---

## Future Improvements

- Async Error Handler
- Express-Async-Errors
- Logging with Morgan
- Winston Logger
- Validation Middleware
- JWT Authentication
- Global Error Formatter
- Custom API Response Format

---

## Author

**Suryansh Soni**

- GitHub: https://github.com/Suryansh-Soni
- LinkedIn: https://www.linkedin.com/in/suryansh-soni-6b1196369

---

If you found this project useful, consider giving it a ⭐ on GitHub.