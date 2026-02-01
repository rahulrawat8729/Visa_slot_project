# 📘 Visa Slot Alerts – Internal Tool

A specialized full-stack internal tool developed for **The Flying Panda** to track and manage visa slot alerts efficiently. This application provides a streamlined interface for monitoring visa availability through a robust REST API and a responsive React frontend.

---

## 🚀 Setup & Installation

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd visa-slot-alerts
```

### 2. Backend Setup (Node + Express + MongoDB)
1.  Navigate to the backend directory:
    ```bash
    cd backend
    npm install
    ```
2.  Create a `.env` file in the `backend/` folder:
    ```env
    PORT=5000
    MONGO_URI=mongodb://127.0.0.1:27017/visaAlertsDB
    ```
3.  Start the backend server:
    ```bash
    npm run dev
    ```
    *The backend will run on `http://localhost:5000`*

### 3. Frontend Setup (React + Tailwind CSS)
1.  Navigate to the frontend directory:
    ```bash
    cd frontend
    npm install
    ```
2.  Start the development server:
    ```bash
    npm run dev
    ```
    *The frontend will run on `http://localhost:5173`*

> [!NOTE]
> Ensure your **MongoDB service** is active locally. The application uses the `visaAlertsDB` database.

---

## ✅ Features Summary
* **Create Alerts:** Add new visa slot tracking alerts.
* **Paginated View:** Efficiently browse through large sets of alerts.
* **Status Management:** Update the status of alerts in real-time.
* **Delete Alerts:** Remove obsolete data easily.
* **Backend Filtering:** Server-side support for refined data retrieval.
* **Clean REST APIs:** Standardized endpoints for all operations.

---

## 🧠 Design Decisions

### **Backend Logic**
* **Architecture:** Followed the **MVC (Model-View-Controller)** pattern to separate routes, business logic, and data modeling.
* **Efficiency:** Implemented **Pagination** at the database level to ensure the UI remains fast even as the number of alerts grows.
* **Safety:** Used custom logger middleware and centralized error handling to ensure system stability.

### **Frontend & UI**
* **Performance:** Built with **Vite** for a superior development experience and optimized builds.
* **Styling:** Utilized **Tailwind CSS** for a clean, utility-first design approach.
* **Abstraction:** Separated API logic into a dedicated `api.js` service file for better maintainability and cleaner components.

---

## 🔧 Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React, Tailwind CSS |
| **Backend** | Node.js, Express |
| **Database** | MongoDB (Local) |
| **Tools** | VS Code, Postman |

---

## ⚙️ Future Enhancements (Production Roadmap)
* **Security:** Add Authentication (RBAC) and input validation using **Zod/Joi**.
* **Performance:** Implement database indexing and caching (Redis).
* **DevOps:** Containerization with **Docker** and automated **CI/CD** pipelines.
* **Reliability:** Integration of professional logging libraries like **Winston** or **Morgan**.

---

## 🤖 AI Reflection
* **Where AI Helped:** Provided boilerplate structures, Tailwind class ideas, and assisted in rapid debugging of common syntax errors.
* **Human Logic:** Defined the core data flow, implemented the specific pagination logic, handled state synchronization in React, and made all final architectural decisions.

---

**👨‍💻 Built as a technical assignment for The Flying Panda**
