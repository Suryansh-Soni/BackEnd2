# MongoDB CRUD Application with Mongoose

A beginner-friendly CRUD application built using **Node.js**, **Express.js**, **MongoDB**, **Mongoose**, and **EJS**. This project demonstrates how to perform CRUD operations with MongoDB while also exploring Mongoose schemas, document relationships using `populate()`, and server-side rendering with EJS.

---

## Overview

This project simulates a simple **WhatsApp Chat Management System** where users can create, view, edit, and delete chat messages. It also introduces **MongoDB relationships** by connecting **Users** and **Posts** using Mongoose references.

---

## Features

- Create New Chats
- View All Chats
- Update Existing Chats
- Delete Chats
- MongoDB Integration
- Mongoose Schema Validation
- Model Relationships using `populate()`
- Dynamic Routing
- Server-Side Rendering with EJS
- Method Override for PUT & DELETE
- Database Seeding

---

## Technologies Used

| Technology | Purpose |
|------------|---------|
| **Node.js** | JavaScript runtime environment |
| **Express.js** | Backend web framework |
| **MongoDB** | NoSQL database |
| **Mongoose** | Object Data Modeling (ODM) for MongoDB |
| **EJS** | Template engine for server-side rendering |
| **Method-Override** | Enables PUT and DELETE requests through HTML forms |
| **Express Middleware** | Parses request body |
| **Populate** | Fetches referenced documents from another collection |

---

# Project Structure

```text
MongoDB_CRUD/
│
├── models/
│   ├── chat.js
│   ├── user.js
│   └── post.js
│
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   └── edit.ejs
│
├── index.js
├── init.js
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
   Chat Routes     User Model     Post Model
        │              │              │
        └──────────────┼──────────────┘
                       ▼
                  MongoDB Database
                       │
                       ▼
                 Mongoose Models
                       │
                       ▼
                  Render EJS Views
```

---

## CRUD Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Home Route |
| GET | `/chats` | Display all chats |
| GET | `/chats/new` | Render new chat form |
| POST | `/chats` | Create a new chat |
| GET | `/chats/:id/edit` | Render edit chat form |
| PUT | `/chats/:id` | Update a chat |
| DELETE | `/chats/:id` | Delete a chat |
| GET | `/posts` | Display posts with populated author details |

---

## Mongoose Models

### Chat Model

```javascript
{
    from: String,
    to: String,
    message: String,
    created_at: Date
}
```

---

### User Model

```javascript
{
    username: String,
    password: String,
    email: String,
    created_at: Date
}
```

---

### Post Model

```javascript
{
    content: String,
    author: ObjectId (ref: User)
}
```

---

## MongoDB Relationship

The project demonstrates **one-to-many relationships** using Mongoose references.

```text
User
 │
 │ 1
 ▼
Post
 │
 │ author
 ▼
ObjectId
```

Example:

```javascript
Post.find()
.populate("author", "username email");
```

This replaces the stored ObjectId with the actual user document containing only the selected fields.

---

## CRUD Operations

### Create

```http
POST /chats
```

Creates a new chat.

---

### Read

```http
GET /chats
```

Displays all chats.

---

### Update

```http
PUT /chats/:id
```

Updates an existing chat.

---

### Delete

```http
DELETE /chats/:id
```

Deletes a chat.

---

## Concepts Covered

### Express.js

- Routing
- Dynamic Routes
- Route Parameters
- Middleware
- Form Handling

### MongoDB

- Collections
- Documents
- CRUD Operations

### Mongoose

- Schemas
- Models
- Validation
- References
- Populate
- Queries

### EJS

- Variables
- Forms
- Dynamic Rendering
- Loops

### REST API

- GET
- POST
- PUT
- DELETE

---

## Database Seeding

The project includes an `init.js` script that inserts sample data into MongoDB.

It seeds:

- Sample Chats
- Sample Users
- Sample Posts

Run the seed script:

```bash
node init.js
```

---

## Learning Outcomes

Through this project, I learned:

- MongoDB CRUD Operations
- Mongoose ODM
- Creating Schemas
- Defining Models
- Document Validation
- Relationships using ObjectId References
- Using `populate()`
- Express Routing
- RESTful APIs
- Server-Side Rendering with EJS
- Database Seeding

---

## Running the Project

Clone the repository

```bash
git clone <repository-url>
```

Navigate to the project

```bash
cd MongoDB_CRUD
```

Install dependencies

```bash
npm install
```

Ensure MongoDB is running locally.

Start the application

```bash
node index.js
```

or

```bash
nodemon index.js
```

Visit:

```
http://localhost:8080/chats
```

---

## Future Improvements

- User Authentication
- JWT Authorization
- Password Hashing
- Chat Search
- Pagination
- MongoDB Atlas Deployment
- Socket.IO for Real-Time Chats
- File Upload Support
- MVC Folder Structure
- API Versioning

---

## Author

**Suryansh Soni**

- GitHub: https://github.com/Suryansh-Soni
- LinkedIn: https://www.linkedin.com/in/suryansh-soni-6b1196369

---

If you found this project useful, consider giving it a ⭐ on GitHub.