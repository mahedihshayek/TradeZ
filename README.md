# 🚀 TradeZ

A full-stack stock trading platform built using the MERN stack. TradeZ provides a public landing website, user authentication, a trading dashboard, and backend APIs for handling users, holdings, positions, and orders.

---

# 🌐 Live Demo

🔗 **TradeZ Frontend:**
[https://tradez-frontend.vercel.app/](https://tradez-frontend.vercel.app/)

🔗 **TradeZ Dashboard:**
[https://tradez-dashboard.vercel.app/](https://tradez-dashboard.vercel.app/)

🔗 **TradeZ Backend API:**
[https://tradez-backend.onrender.com/](https://tradez-backend.onrender.com/)

---

# 📌 Project Overview

TradeZ is a full-stack trading platform consisting of three independent applications working together:

* **Frontend** — Public landing website and authentication pages
* **Dashboard** — User trading dashboard
* **Backend** — REST API responsible for authentication, database operations, holdings, positions, and orders

The application follows a full-stack architecture:

```text
React Frontend
      |
      ↓
Express.js REST API
      |
      ↓
MongoDB Atlas
```

---

# 🛠️ Tech Stack

## Frontend

* React.js
* React Router
* Bootstrap
* HTML5
* CSS3
* JavaScript (ES6)
* Axios

## Dashboard

* React.js
* React Router
* Material UI (MUI)
* Axios
* Chart.js

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* bcrypt
* Cookie Parser
* CORS
* REST API

## Database

* MongoDB Atlas

## Deployment

* Frontend: Vercel
* Dashboard: Vercel
* Backend API: Render
* Database: MongoDB Atlas

---

# 📂 Project Structure

```text
TradeZ/
│
├── frontend/          # Landing website and authentication pages
│
├── dashboard/         # Trading dashboard application
│
├── backend/           # Express API and database logic
│
└── README.md
```

---

# ✨ Features

## 🔐 Authentication

* User signup
* User login
* Password hashing using bcrypt
* JWT-based authentication
* Token handling
* Dashboard authentication flow
* Backend authentication APIs

---

# 🌍 Frontend Features

* TradeZ landing page
* Home page
* Products section
* Pricing section
* About section
* Support section
* Signup page
* Login page
* React component-based architecture

---

# 📊 Dashboard Features

* User dashboard
* Holdings section
* Positions section
* Orders section
* Interactive charts
* User information
* Backend API integration
* Separate dashboard application

---

# ⚙️ Backend Features

* REST API development
* User authentication
* User data management
* Holdings API
* Positions API
* Order creation API
* MongoDB database integration
* Middleware handling
* CORS configuration
* JWT authentication flow

---

# 🔌 API Endpoints

## Authentication

### Signup

```http
POST /signup
```

### Login

```http
POST /login
```

---

## Dashboard

### Get Holdings

```http
GET /allHoldings
```

### Get Positions

```http
GET /allPositions
```

### Get Users

```http
GET /allUsers
```

### Create Order

```http
POST /newOrder
```

---

# 🚀 Installation & Setup

## Clone Repository

```bash
git clone https://github.com/mahedihshayek/TradeZ.git

cd TradeZ
```

---

# 📦 Install Dependencies

## Frontend

```bash
cd frontend
npm install
```

## Dashboard

```bash
cd dashboard
npm install
```

## Backend

```bash
cd backend
npm install
```

---

# ▶️ Run Locally

## Start Backend

```bash
cd backend
node index.js
```

Backend will run on:

```text
http://localhost:3002
```

---

## Start Frontend

```bash
cd frontend
npm start
```

Frontend will run on:

```text
http://localhost:3000
```

---

## Start Dashboard

```bash
cd dashboard
npm start
```

Dashboard will run on:

```text
http://localhost:3001
```

---

# 🔑 Environment Variables

Create a `.env` file inside the `backend` folder:

```env
PORT=3002

MONGO_URL=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

> Never commit your `.env` file or expose your database credentials and JWT secret publicly.

---

# 📚 Learning Objectives

This project helped me gain practical experience with:

* Building a full-stack MERN application
* Creating REST APIs with Express.js
* Building reusable React components
* Connecting React applications with backend APIs
* Implementing JWT authentication
* Password hashing with bcrypt
* Working with MongoDB and Mongoose
* Using MongoDB Atlas
* Managing multiple React applications
* Handling CORS
* Deploying applications with Vercel and Render
* Connecting deployed frontend, dashboard, backend, and database
* Using Git and GitHub for version control

---

# 🔮 Future Improvements

* Real-time stock market data
* Live stock price updates
* Advanced trading charts
* Transaction history
* More trading features
* Docker containerization
* CI/CD pipeline
* Improved analytics

---

# 📄 License

This project is created for educational and portfolio purposes.

---

# 👨‍💻 Author

## Mahedi Shayek

**LinkedIn:**
[https://www.linkedin.com/in/mahedihshayek/](https://www.linkedin.com/in/mahedihshayek/)
