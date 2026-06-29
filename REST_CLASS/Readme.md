# REST API CRUD Practice

A beginner-friendly REST API project built with **Node.js**, **Express.js**, and **EJS** to understand RESTful architecture and CRUD (Create, Read, Update, Delete) operations. The project simulates a simple **Quora-style Posts** application where users can create, view, edit, and delete posts.

---

## Overview

This project demonstrates how REST APIs work using Express.js and EJS while implementing all major CRUD operations.

It covers:

- RESTful Routing
- CRUD Operations
- Dynamic Routing
- Route Parameters
- Method Override
- EJS Templating
- UUID for Unique IDs
- Static File Serving

---

## Features

- View All Posts
- View Individual Post
- Create New Post
- Edit Existing Post
- Delete Post
- Dynamic Routing
- Server-Side Rendering using EJS
- RESTful Route Structure
- Method Override for PATCH & DELETE
- In-Memory Data Storage

---

## Technologies Used

| Technology             | Purpose                                           |
| ---------------------- | ------------------------------------------------- |
| **Node.js**            | JavaScript runtime environment                    |
| **Express.js**         | Backend web framework                             |
| **EJS**                | Server-side template engine                       |
| **UUID**               | Generates unique IDs for posts                    |
| **Method-Override**    | Enables PATCH and DELETE requests from HTML forms |
| **Path Module**        | Handles file and directory paths                  |
| **Express Middleware** | Parses request body and serves static files       |

---

# Project Structure

```text
REST_CLASS/
│
├── node_modules/
│
├── public/
│   └── style.css
│
├── views/
│   ├── edit.ejs
│   ├── index.ejs
│   ├── new.ejs
│   └── show.ejs
│
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

## REST API Architecture

```text
                    Client
                       │
                 HTTP Request
                       │
                       ▼
                Express Server
                       │
      ┌────────────────┼────────────────┐
      │                │                │
      ▼                ▼                ▼
   GET Routes      POST Route     PATCH/DELETE
      │                │                │
      ▼                ▼                ▼
  Render EJS      Create Post      Update/Delete
      │                │                │
      └────────────────┼────────────────┘
                       ▼
                 Updated Posts Array
                       │
                       ▼
                  Render Response
```

---

## REST Routes

| Method | Endpoint          | Description                    |
| ------ | ----------------- | ------------------------------ |
| GET    | `/`               | Home Route                     |
| GET    | `/posts`          | Display all posts              |
| GET    | `/posts/new`      | Show form to create a new post |
| POST   | `/posts`          | Create a new post              |
| GET    | `/posts/:id`      | View a single post             |
| GET    | `/posts/:id/edit` | Show edit form                 |
| PATCH  | `/posts/:id`      | Update an existing post        |
| DELETE | `/posts/:id`      | Delete a post                  |

---

## CRUD Operations

### Create

Creates a new post using form data.

```http
POST /posts
```

---

### Read

Retrieve all posts.

```http
GET /posts
```

Retrieve a specific post.

```http
GET /posts/:id
```

---

### Update

Update an existing post.

```http
PATCH /posts/:id
```

---

### Delete

Delete a post.

```http
DELETE /posts/:id
```

---

## Concepts Covered

### Express.js

- Routing
- Dynamic Routes
- Route Parameters
- Middleware
- Static File Serving
- Body Parsing

### REST API

- GET
- POST
- PATCH
- DELETE
- Resource-Based Routing

### EJS

- Variables
- Loops
- Dynamic Rendering
- Forms
- Template Rendering

### Method Override

Allows HTML forms to simulate HTTP methods like:

- PATCH
- DELETE

Example:

```html
<form action="/posts/<%= post.id %>?_method=PATCH" method="POST"></form>
```

---

## Learning Outcomes

This project helped me understand:

- RESTful API Design
- CRUD Operations
- Route Parameters
- Express Routing
- Dynamic Rendering with EJS
- Method Override
- Form Handling
- UUID Generation
- Express Middleware
- Server-Side Rendering

---

## Running the Project

Clone the repository

```bash
git clone <repository-url>
```

Navigate to the project

```bash
cd REST_CLASS
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

Open your browser

```
http://localhost:3000/posts
```

---

## Future Improvements

- MongoDB Integration
- Mongoose Models
- User Authentication
- User Authorization
- Flash Messages
- Input Validation
- Bootstrap UI
- Pagination
- Search Functionality
- Comments System

---

## Author

**Suryansh Soni**

- GitHub: https://github.com/Suryansh-Soni
- LinkedIn: https://www.linkedin.com/in/suryansh-soni-6b1196369

---

If you found this project useful, consider giving it a ⭐ on GitHub.
