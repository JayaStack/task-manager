# 📋 MERN Task Manager

> A modern, professional task management solution designed for productivity, built with the power of the MERN stack.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

---

## 🔗 Project Links

*   **Live Demo:** [View Live Site](https://your-frontend-link.vercel.app)
*   **Documentation:** [API Repository](https://github.com/your-username/task-manager)

---

## 🖼️ Screenshots

| ![Dashboard](https://via.placeholder.com/450x280?text=Dashboard+View) | ![Mobile UI](https://via.placeholder.com/200x280?text=Mobile+UI) |
| :--- | :--- |
| **Desktop Dashboard** | **Responsive Mobile UI** |

---

## ✨ Key Features

*   **Full CRUD Workflow:** Intuitive interface for creating, reading, updating, and deleting tasks.
*   **Status Management:** Color-coded badges for `Pending`, `In Progress`, and `Completed` states.
*   **Modern Interactive UI:** Animated modals for task editing and confirmation prompts for deletion.
*   **Real-time Logic:** Tasks are automatically sorted by date (newest first) for immediate visibility.
*   **Production Hardened:** Integrated security with Helmet, response compression, and request logging with Morgan.
*   **Responsive Excellence:** Fluid layouts built with pure CSS Modules for a framework-free, high-performance experience.

---

## 💻 Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 18, Vite, CSS Modules, Axios |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Atlas), Mongoose |
| **DevOps** | Render, Vercel, Concurrently, Dotenv |

---

## 📐 Architecture Overview

The system follows a decoupled **Client-Server Architecture**:
1.  **Backend (REST API):** Implements the MVC pattern. Controllers handle business logic, Models interact with MongoDB, and Routes define the interface.
2.  **Frontend (SPA):** A React-based Single Page Application that consumes the REST API via a centralized abstraction layer using Axios.

---

## 📁 Folder Structure

```text
task-manager/
├── backend/                # Server-side application
│   ├── config/             # DB & configuration setup
│   ├── controllers/        # Logical request handlers
│   ├── middleware/         # Error handling & security layers
│   ├── models/             # Mongoose schemas & data models
│   ├── routes/             # RESTful route definitions
│   └── server.js           # Express application entry
├── frontend/               # Client-side application
│   ├── src/
│   │   ├── api/            # API service abstraction
│   │   ├── components/     # Reusable UI components
│   │   └── App.jsx         # Main application hub
│   └── vite.config.js      # Vite build configuration
└── .gitignore              # Dependency & secret management
```

---

## 🛠️ Local Setup

### 1. Prerequisites
Ensure you have **Node.js** and **npm** installed on your system.

### 2. Installation
Clone the repository and install dependencies in all directories:

```bash
# Clone
git clone https://github.com/your-username/task-manager.git
cd task-manager

# Install root, backend, and frontend dependencies
npm install && npm install --prefix backend && npm install --prefix frontend
```

### 3. Environment Config
Create a `.env` file in the `backend/` directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
```

Create a `.env` file in the `frontend/` directory:
```env
VITE_API_URL=http://localhost:5000
```

---

## ▶️ Running the Application

To start both the frontend and backend concurrently:

```bash
# From the root directory
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

---

## 🔗 API Documentation

| Method | Endpoint | Payload | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/tasks` | — | Get all tasks |
| `POST` | `/api/tasks` | `{title, description, status}` | Create a task |
| `PUT` | `/api/tasks/:id` | `{title, description, status}` | Update a task |
| `DELETE`| `/api/tasks/:id` | — | Delete a task |

---

## 🚀 Deployment Guide

### Backend (Render)
1. Select **Web Service**.
2. Set Build Command: `npm install`.
3. Set Start Command: `npm start` (set Root Directory to `backend`).

### Frontend (Vercel)
1. Import the `frontend` directory.
2. Use `Vite` framework preset.
3. Configure `VITE_API_URL` environment variable.

---

## 🔮 Future Enhancements

- [ ] JWT Authentication & User Accounts.
- [ ] Task filtering and search functionality.
- [ ] Drag-and-drop task reordering.
- [ ] Dark Mode support.

---

## ✍️ Author

**Your Name**
*   GitHub: [@your-username](https://github.com/your-username)
*   LinkedIn: [your-profile](https://linkedin.com/in/yourprofile)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
