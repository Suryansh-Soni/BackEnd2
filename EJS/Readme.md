# Express.js & EJS Practice

A beginner-friendly project built with **Express.js** and **EJS** to understand server-side rendering, routing, template engines, and dynamic content generation. This project demonstrates how to build dynamic web pages using EJS templates while serving static assets through Express.

---

## Features

- Server-side rendering using EJS
- Dynamic routing with URL parameters
- Rendering JSON data
- Conditional rendering
- Looping through data using EJS
- Reusable EJS partials (`include`)
- Static CSS and JavaScript serving
- Random Dice Generator
- Dynamic Instagram Profile Viewer

---

## Technologies Used

| Technology      | Purpose                                   |
| --------------- | ----------------------------------------- |
| **Node.js**     | JavaScript runtime environment            |
| **Express.js**  | Backend web framework                     |
| **EJS**         | Template engine for server-side rendering |
| **Path Module** | Handles file and directory paths          |
| **JSON**        | Stores sample Instagram profile data      |

---

# Project Structure

```text
EJS/
│
├── public/
│   ├── style.css
│   └── app.js
│
├── views/
│   │
│   ├── includes/
│   │   └── head.ejs
│   │
│   ├── home.ejs
│   ├── instagram.ejs
│   └── rolldice.ejs
│
├── data.json
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

## Project Architecture

```text
                   Browser
                      │
                      │ HTTP Request
                      ▼
               Express Server
                      │
        ┌─────────────┼──────────────┐
        │             │              │
        ▼             ▼              ▼
     Home Route   Dice Route   Instagram Route
        │             │              │
        │             │        Read data.json
        │             │              │
        ▼             ▼              ▼
   home.ejs     rolldice.ejs   instagram.ejs
        │             │              │
        └─────────────┼──────────────┘
                      ▼
              Generated HTML
                      │
                      ▼
                   Browser
```

---

## Routes

| Method | Route           | Description                            |
| ------ | --------------- | -------------------------------------- |
| GET    | `/`             | Renders the Home page                  |
| GET    | `/rolldice`     | Generates a random dice number (1-6)   |
| GET    | `/ig/:username` | Displays Instagram profile dynamically |

### Example

```
http://localhost:3000/ig/cats
```

```
http://localhost:3000/ig/dogs
```

---

## Concepts Covered

### Express.js

- Express Server
- Routing
- Route Parameters
- Static File Serving
- Template Engine Configuration

### EJS

- Variables
- Loops
- Conditionals
- Includes (Reusable Components)
- Dynamic HTML Rendering

### Data Handling

- Reading JSON Data
- Rendering Dynamic Content
- Passing Objects from Express to EJS

---

## Getting Started

### Clone the Repository

```bash
git clone <repository-url>
```

### Navigate to the Project

```bash
cd EJS
```

### Install Dependencies

```bash
npm install
```

### Start the Application

```bash
node index.js
```

or

```bash
nodemon index.js
```

Visit:

```
http://localhost:3000
```

---

## Learning Outcomes

This project helped me understand:

- Express.js fundamentals
- Server-side rendering (SSR)
- EJS template engine
- Dynamic routing
- Route parameters
- Rendering JSON data
- Conditional rendering
- Loops in EJS
- Reusable partial templates
- Static asset management

---

## Future Improvements

- Bootstrap UI
- Responsive Design
- User Authentication
- CRUD Operations
- MongoDB Integration
- Form Handling
- Layouts using express-ejs-layouts

---

## Author

**Suryansh Soni**

GitHub: https://github.com/Suryansh-Soni

LinkedIn: https://www.linkedin.com/in/suryansh-soni-6b1196369

---

If you found this project useful, consider giving it a ⭐ on GitHub.
