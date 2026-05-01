# ethara_assignment
# 🚀 EthraAI Task Management System

A full-stack **Task Management Web Application** built using **Node.js, MySQL, and Vanilla JavaScript**, featuring authentication, role-based access, and an interactive dashboard.

---

## 📌 Project Overview

EthraAI is a simple yet powerful task management system where users can:

* 🔐 Register & Login securely (JWT Authentication)
* 📋 Create and manage tasks
* 👨‍💼 Role-based access (Admin / Member)
* 📊 Update task status (Pending / In Progress / Done)
* 🎨 Use a modern, responsive UI dashboard

---

## 🛠️ Tech Stack

### Frontend:

* HTML5
* CSS3
* JavaScript (Vanilla)

### Backend:

* Node.js
* Express.js

### Database:

* MySQL

### Other Tools:

* JWT (Authentication)
* bcryptjs (Password hashing)
* Live Server (Frontend hosting)

---

## 📁 Project Structure

```
EthraAi/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── index.html
│   ├── dashboard.html
│   ├── style.css
│   └── app.js
│
└── database.sql
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/your-username/ethraai-task-manager.git
cd ethraai-task-manager
```

---

### 2️⃣ Setup MySQL Database

Open MySQL and run:

```
CREATE DATABASE task_manager;
USE task_manager;
```

Then run the `database.sql` file.

---

### 3️⃣ Configure Backend

Open:

```
backend/config/db.js
```

Update your MySQL credentials:

```
user: "root",
password: "YOUR_PASSWORD"
```

---

### 4️⃣ Install Dependencies

```
cd backend
npm install
```

---

### 5️⃣ Run Backend Server

```
node server.js
```

You should see:

```
MySQL Connected
Server running on 5000
```

---

### 6️⃣ Run Frontend

* Open `frontend/index.html`
* OR use **Live Server**

---

## 🔐 Authentication Flow

1. User registers via API
2. Password is hashed using bcrypt
3. JWT token is generated on login
4. Token is used for protected routes

---

## 📋 Features

### ✅ User Features

* Login / Register
* View tasks
* Update task status

### 👨‍💼 Admin Features

* Create tasks
* Manage task statuses

---

## 📊 Task Status

* Pending
* In Progress
* Done

---

## 🌐 API Endpoints

### Auth

* `POST /api/auth/register`
* `POST /api/auth/login`

### Tasks

* `GET /api/tasks`
* `POST /api/tasks` (Admin only)
* `PUT /api/tasks/:id`

---

## 🚀 Future Improvements

* 📊 Dashboard analytics (charts)
* 👥 Team collaboration
* 📁 Project-based task grouping
* 🌐 Deployment (Railway / Netlify)
* 📱 Mobile responsive UI improvements

---

## 🎯 Conclusion

This project demonstrates:

* Full-stack development
* REST API design
* Authentication & security
* Database integration
* UI/UX design basics

---

## 👨‍💻 Author

**Satya Prakash**

---

## 📜 License

This project is for educational purposes.
