# MySQL CRUD Application with Express.js

A beginner-friendly CRUD (Create, Read, Update, Delete) application built using **Node.js**, **Express.js**, **MySQL**, and **EJS**. This project demonstrates how to connect an Express application with a MySQL database and perform complete database operations using SQL queries.

---

## Overview

This project implements a complete user management system where users can be created, viewed, updated, and deleted from a MySQL database.

It covers:

- MySQL Database Integration
- CRUD Operations
- SQL Queries
- Express.js Routing
- Server-Side Rendering using EJS
- Method Override
- UUID Generation
- Form Handling

---

## Features

- Display Total Number of Users
- View All Users
- Create New User
- Update Existing User
- Delete User
- Dynamic Routing
- SQL Database Integration
- Server-Side Rendering
- RESTful Routing

---

## Technologies Used

| Technology             | Purpose                                              |
| ---------------------- | ---------------------------------------------------- |
| **Node.js**            | JavaScript runtime environment                       |
| **Express.js**         | Backend web framework                                |
| **MySQL**              | Relational database                                  |
| **mysql2**             | MySQL driver for Node.js                             |
| **EJS**                | Template engine                                      |
| **UUID**               | Generates unique user IDs                            |
| **Method Override**    | Enables PATCH and DELETE requests through HTML forms |
| **Express Middleware** | Parses request bodies                                |
| **Path Module**        | Handles file system paths                            |

---

# Project Structure

```text
SQL_CLASS/
│
├── node_modules/
│
├── views/
│   ├── home.ejs
│   ├── show.ejs
│   ├── edit.ejs
│   └── new.ejs
│
├── index.js
├── schema.sql
├── package.json
├── package-lock.json
└── README.md
```

---

## Application Architecture

```text
                    Client
                       │
                  HTTP Request
                       │
                       ▼
                Express Server
                       │
        ┌──────────────┼──────────────┐
        │              │              │
        ▼              ▼              ▼
     GET Routes    POST Route    PATCH/DELETE
        │              │              │
        ▼              ▼              ▼
    SQL SELECT    SQL INSERT   SQL UPDATE/DELETE
        │              │              │
        └──────────────┼──────────────┘
                       ▼
                    MySQL
                       │
                       ▼
                  EJS Views
                       │
                       ▼
                    Browser
```

---

## REST Routes

| Method | Endpoint           | Description              |
| ------ | ------------------ | ------------------------ |
| GET    | `/`                | Display total user count |
| GET    | `/user`            | Display all users        |
| GET    | `/user/new`        | Render new user form     |
| POST   | `/user`            | Create a new user        |
| GET    | `/user/:id/edit`   | Render edit form         |
| PATCH  | `/user/:id`        | Update user information  |
| DELETE | `/user/:id/delete` | Delete a user            |

---

## SQL Operations

### Count Users

```sql
SELECT COUNT(*) AS userCount
FROM users;
```

---

### Display Users

```sql
SELECT *
FROM users;
```

---

### Insert User

```sql
INSERT INTO users(id, name, email)
VALUES (?, ?, ?);
```

---

### Update User

```sql
UPDATE users
SET name = ?, email = ?
WHERE id = ?;
```

---

### Delete User

```sql
DELETE FROM users
WHERE id = ?;
```

---

## CRUD Operations

### Create

Adds a new user to the database.

```
POST /user
```

---

### Read

Display all users.

```
GET /user
```

---

### Update

Modify user information.

```
PATCH /user/:id
```

---

### Delete

Remove a user from the database.

```
DELETE /user/:id/delete
```

---

## Concepts Covered

### Express.js

- Routing
- Dynamic Routes
- Middleware
- Request Parsing
- Static Rendering

### MySQL

- Database Connection
- SELECT Queries
- INSERT Queries
- UPDATE Queries
- DELETE Queries
- Parameterized Queries

### EJS

- Variables
- Forms
- Dynamic Rendering
- Template Rendering

### REST API

- GET
- POST
- PATCH
- DELETE

### Method Override

Allows HTML forms to send:

- PATCH
- DELETE

requests using:

```html
?_method=PATCH
```

or

```html
?_method=DELETE
```

---

## Database Schema

```sql
ALTER TABLE users
MODIFY COLUMN id VARCHAR(40) NOT NULL;
```

The application stores UUIDs as user IDs instead of auto-increment integers.

---

## Learning Outcomes

Through this project, I learned:

- Connecting Node.js with MySQL
- Writing SQL queries in Express
- CRUD Operations
- RESTful Routing
- Parameterized Queries
- Preventing SQL Injection
- EJS Template Rendering
- Form Handling
- Method Override
- UUID Generation

---

## Running the Project

Clone the repository

```bash
git clone <repository-url>
```

Navigate to the project

```bash
cd SQL_CLASS
```

Install dependencies

```bash
npm install
```

Start MySQL and ensure the `delta` database exists.

Run the application

```bash
node index.js
```

or

```bash
nodemon index.js
```

Visit

```
http://localhost:8080
```

---

## Future Improvements

- User Authentication
- Password Hashing
- Input Validation
- Pagination
- Search Users
- Sorting
- Flash Messages
- Bootstrap UI
- MVC Architecture
- Connection Pooling
- Environment Variables

---

## Author

**Suryansh Soni**

- GitHub: https://github.com/Suryansh-Soni
- LinkedIn: https://www.linkedin.com/in/suryansh-soni-6b1196369

---

If you found this project useful, consider giving it a ⭐ on GitHub.
