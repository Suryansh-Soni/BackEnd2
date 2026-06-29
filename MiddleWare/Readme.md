# Express.js Middleware Practice

A beginner-friendly Express.js project created to understand how middleware works in Express. This project demonstrates global middleware, route-specific middleware, custom authentication middleware, middleware chaining, and request handling.

---

## Features

- Global Middleware
- Route-Specific Middleware
- Custom Authentication Middleware
- Request Logging
- Middleware Chaining using `next()`
- Protected Routes
- Query Parameter Authentication
- Error Generation for Testing

---

## Technologies Used

| Technology           | Purpose                                             |
| -------------------- | --------------------------------------------------- |
| **Node.js**          | JavaScript runtime environment                      |
| **Express.js**       | Backend web framework                               |
| **Middleware**       | Executes logic before the request reaches the route |
| **Query Parameters** | Used to pass authentication tokens                  |
| **next()**           | Passes control to the next middleware function      |

---

## Project Structure

```text
Middleware_Practice/
│
├── index.js
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
        Global Logger Middleware
                        │
                        ▼
       Global Middleware #2
                        │
                        ▼
     Route-Specific Middleware
                        │
                        ▼
      Authentication Middleware
                        │
          ┌─────────────┴─────────────┐
          │                           │
          ▼                           ▼
     Valid Token                 Invalid Token
          │                           │
          ▼                           ▼
     Route Handler             401 Unauthorized
          │
          ▼
        Response
```

---

## Available Routes

| Method | Endpoint | Description                             |
| ------ | -------- | --------------------------------------- |
| GET    | `/`      | Home route                              |
| GET    | `/rand`  | Demonstrates route-specific middleware  |
| GET    | `/api`   | Protected route requiring a valid token |
| GET    | `/wrong` | Generates an error for testing purposes |

---

## Authentication

The `/api` endpoint is protected using a custom middleware.

Example:

```http
GET /api?token=giveaccess
```

If the token is valid:

```
Token is valid. Access granted.
```

Response:

```http
200 OK
```

If the token is invalid:

```http
401 Unauthorized
```

---

## Middleware Concepts Covered

### Global Middleware

Runs for every incoming request.

Examples:

- Request Logging
- Authentication
- Parsing Request Body

---

### Route-Specific Middleware

Runs only for selected routes.

Example:

```javascript
app.use("/rand", middleware);
```

---

### Custom Middleware

Reusable middleware function.

```javascript
const checkToken = (req, res, next) => {
  // validation logic
};
```

---

### Middleware Chaining

Multiple middleware functions execute in sequence.

```javascript
app.use(firstMiddleware);
app.use(secondMiddleware);
app.get("/api", checkToken, controller);
```

Each middleware must call:

```javascript
next();
```

to transfer control to the next middleware.

---

## Learning Outcomes

This project helped me understand:

- Express.js Middleware
- Request Lifecycle
- Global Middleware
- Route-Specific Middleware
- Custom Middleware
- Authentication Middleware
- Request Logging
- Query Parameters
- Protected Routes
- Middleware Chaining
- Error Generation

---

## Running the Project

Clone the repository

```bash
git clone <repository-url>
```

Navigate to the project

```bash
cd Middleware_Practice
```

Install dependencies

```bash
npm install
```

Start the application

```bash
node index.js
```

or

```bash
nodemon index.js
```

Open your browser:

```
http://localhost:8080
```

---

## Future Improvements

- Morgan Logger
- Centralized Error Handling Middleware
- JWT Authentication
- Request Validation
- Role-Based Authorization
- Async Error Handling
- Environment Variables
- Express Router

---

## Author

**Suryansh Soni**

GitHub: https://github.com/Suryansh-Soni

LinkedIn: https://www.linkedin.com/in/suryansh-soni-6b1196369

---

If you found this project useful, consider giving it a ⭐ on GitHub.
