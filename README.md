# Name Validation Form

A full-stack MERN (MongoDB, Express, React, Node.js) web application that takes a user's name and date, validates the input on the backend (ensuring the name contains no special characters), and stores it in a MongoDB database.

---

## 📌 Project Overview

This project allows users to submit a **name** and **date** via a React frontend. Upon submission:

1. The form sends a POST request to the backend API.
2. The backend validates the name.
3. If valid, the data is saved to a MongoDB Atlas cluster.

---

## ⚙️ Tech Stack

| Layer        | Technology          |
| ------------ | ------------------- |
| Frontend     | React.js            |
| Backend      | Node.js, Express.js |
| Database     | MongoDB Atlas       |
| Styling      | Basic CSS           |
| Version Ctrl | Git, GitHub         |

---

## 📁 Project Structure

```
react-node-mongo-form-project/
├── backend/
│   ├── server.js          # Backend logic
│   ├── package.json       # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── App.js         # Main frontend logic
│   │   ├── index.js       # Entry point
│   └── public/
│       └── index.html     # HTML template
├── README.md
```

---

## 🔄 Application Flow

1. **User Interface**:

   * User sees two fields: **Name** and **Date**.
   * On clicking submit, the data is sent to the backend API via a POST request.

2. **API Endpoint** (`/api/submit`):

   * Backend receives JSON data.
   * Validates `name` using a regular expression:

     ```js
     if (!/^[a-zA-Z0-9 ]+$/.test(name)) {
         return res.status(400).json({ error: 'Name contains special characters' });
     }
     ```
   * If valid, it creates a new entry and saves to MongoDB.

3. **MongoDB Connection**:

   * Connected via Mongoose ODM.
   * Credentials are stored in `server.js`.
   * Data is stored in a cloud MongoDB Atlas database.

---

## 🚀 How to Run the Project Locally

### Prerequisites

* Node.js and npm installed
* MongoDB Atlas account and cluster
* Git installed

### Steps

```bash
# Clone the repo
https://github.com/guthikondarohan/Name_validation.git

# Backend Setup
cd backend
npm install
node server.js

# Frontend Setup
cd ../frontend
npm install
npm start
```

---

## 🔒 Validation Logic

* Ensures **only alphanumeric characters and spaces** are allowed in the name field.
* This avoids injection of special characters or invalid data.

---

## 🧪 What I Learned

* Setting up a full MERN project
* Connecting Node.js to MongoDB Atlas
* Validating form input via backend
* React form handling
* Git and GitHub workflow
* Handling exceptions and adding basic logging

---

## 🔗 GitHub Repo

[Name\_validation](https://github.com/guthikondarohan/Name_validation)

---

## 🧩 Possible Improvements

* Add UI validation
* Use dotenv for storing secrets
* Deploy using Vercel/Render/Heroku
* Add login/authentication for protected access
