```markdown
# To-Do List Backend API

A simple RESTful API to manage a to-do list with features like authentication, task creation, updating, deleting, and fetching tasks. The backend is built with **Node.js**, **Express**, and **SQLite**. JWT-based authentication is implemented for securing the endpoints.

---

## Features

- **Authentication**
  - User Sign-Up and Login (with JWT token generation).
- **Task Management**
  - Create, Read, Update, and Delete tasks.
- SQLite database to store tasks.
- JWT-based secure endpoints.

---

## Installation

### Prerequisites
- Node.js (v14+)
- npm or yarn
- SQLite3 (comes pre-installed in many environments)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your_username/backend-todo.git
   cd backend-todo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the `.env` file:
   Create a `.env` file in the root directory with the following content:
   ```
   JWT_SECRET=your_jwt_secret_key
   ```

4. Set up the database:
   - The SQLite database file `database.db` will be created automatically when the app runs for the first time.

5. Start the server:
   ```bash
   npm start
   ```

6. The server will run at `http://localhost:3000`.

---

## API Endpoints

### Authentication

#### 1. **Sign Up**
   - **Endpoint:** `POST /signup`
   - **Description:** Register a new user.
   - **Body:**
     ```json
     {
       "username": "your_username",
       "password": "your_password"
     }
     ```

#### 2. **Login**
   - **Endpoint:** `POST /login`
   - **Description:** Login and receive a JWT token.
   - **Body:**
     ```json
     {
       "username": "your_username",
       "password": "your_password"
     }
     ```

---

### Task Management

#### 1. **Create Task**
   - **Endpoint:** `POST /tasks`
   - **Description:** Create a new task.
   - **Headers:**
     ```
     Authorization: Bearer <JWT_TOKEN>
     ```
   - **Body:**
     ```json
     {
       "title": "Task Title",
       "description": "Task Description"
     }
     ```

#### 2. **Get All Tasks**
   - **Endpoint:** `GET /tasks`
   - **Description:** Fetch all tasks.
   - **Headers:**
     ```
     Authorization: Bearer <JWT_TOKEN>
     ```

#### 3. **Get Task by ID**
   - **Endpoint:** `GET /tasks/:id`
   - **Description:** Fetch a specific task by its ID.
   - **Headers:**
     ```
     Authorization: Bearer <JWT_TOKEN>
     ```

#### 4. **Update Task Status**
   - **Endpoint:** `PUT /tasks/:id`
   - **Description:** Update the status of a task (`pending`, `in-progress`, `completed`).
   - **Headers:**
     ```
     Authorization: Bearer <JWT_TOKEN>
     ```
   - **Body:**
     ```json
     {
       "status": "completed"
     }
     ```

#### 5. **Delete Task**
   - **Endpoint:** `DELETE /tasks/:id`
   - **Description:** Delete a task by its ID.
   - **Headers:**
     ```
     Authorization: Bearer <JWT_TOKEN>
     ```

---

## Project Structure

```plaintext
bytive_backend/
├── controllers/
│   └── taskController.js      # Handles task-related logic
│   └── authController.js
├── middleware/
│   └── authenticate.js        # JWT authentication middleware
├── models/
│   └── taskModel.js           # SQLite schema and database logic
│   └── authModel.js 
├── routes/
│   └── taskRoutes.js          # Task-related API routes
│   └── authRoutes.js   
├── database.db            # SQLite database file
├── .env                       # Environment variables
├── index.js                     # Entry point of the application
├── package.json               # Dependencies and project metadata
├── README.md                  # Documentation
└── utils/
    └── jwtHelper.js        # Utility for managing database connection
```

---

## Dependencies

- **express**: Web framework for Node.js
- **sqlite3**: SQLite database
- **jsonwebtoken**: JWT for authentication
- **dotenv**: For environment variables
- **body-parser**: Parse incoming request bodies

Install them using:
```bash
npm install express sqlite3 jsonwebtoken dotenv body-parser
```

---

## Database Schema

The database schema for tasks:
```sql
CREATE TABLE tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    status TEXT DEFAULT 'pending',
);
```

---

## Contributing

Feel free to fork the repository and create pull requests to contribute to this project.

---

## License

This project is licensed under the MIT License.

---

## Author

Created by [Alok MAurya](https://github.com/alokmaurya013).

```
