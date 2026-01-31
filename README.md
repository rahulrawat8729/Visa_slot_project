# 📘 Visa Slot Alerts – Internal Tool

A mini full-stack internal tool built for **The Flying Panda** to track visa slot alerts.  
The application allows creating, viewing, updating, deleting, and paginating visa alerts using a clean REST API and a simple React UI.

---

## 🚀 Setup Steps

### 1️⃣ Clone the Repository
```bash
git clone <your-repo-url>
cd visa-slot-alerts


2️⃣ Backend Setup (Node.js + Express + MongoDB)

Navigate to the backend folder and install dependencies:

cd backend
npm install


Create a .env file inside the backend folder with the following content:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/visaAlertsDB


Start the backend server:

npm run dev


The backend server will run on:

http://localhost:5000

3️⃣ Frontend Setup (React + Tailwind CSS)

Navigate to the frontend folder and install dependencies:

cd frontend
npm install


Start the frontend development server:

npm run dev


The frontend application will run on:

http://localhost:5173

4️⃣ MongoDB Requirement

MongoDB must be running locally on your system

The application uses a local database named visaAlertsDB

🧠 Design Decisions
Backend Design

Node.js + Express were chosen for simplicity and fast REST API development

MongoDB was used as it provides flexible schema design and easy local setup

Mongoose was used for schema definition and data validation

The backend follows an MVC architecture:

Models for data structure

Controllers for business logic

Routes for API endpoints

A custom logger middleware logs every incoming request

Centralized error handling ensures consistent API error responses

Pagination was implemented to handle large datasets efficiently

Frontend Design

React (Vite) was chosen for fast development and clean component structure

Tailwind CSS was used for utility-first, responsive styling

UI was intentionally kept simple since this is an internal tool

API calls were separated using a dedicated service file for better maintainability

⚙️ What I’d Improve for Production

If this application were to be used in a real production environment, the following improvements would be made:

Authentication and authorization (role-based access)

Strong input validation using libraries like Joi or Zod

Rate limiting and security headers

Advanced logging using tools like Winston or Morgan

Environment-based configuration (development, staging, production)

Database indexing for faster queries

Dockerization and CI/CD pipelines

Better UI/UX and accessibility improvements

🤖 Where AI Helped vs Where I Had to Think
Where AI Helped

Suggesting initial project structure

Helping with syntax for Express, React, and Tailwind CSS

Speeding up boilerplate code creation

Improving README clarity and formatting

Debugging common and repetitive issues

Where I Had to Think Myself

Understanding and breaking down the problem requirements

Designing the backend API structure

Implementing pagination logic correctly

Managing frontend-backend state updates

Debugging integration issues between frontend and backend

Making architectural and design decisions step by step

✅ Features

Create visa slot alerts

View alerts with pagination

Update alert status

Delete alerts

Backend filtering support

RESTful API design

Simple and clean UI

🧰 Tech Stack

Frontend: React, Tailwind CSS

Backend: Node.js, Express

Database: MongoDB (local)

Tools: VS Code, Postman
