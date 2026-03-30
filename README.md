# 🎓 Royal Institute – Course Management Platform

A full-stack web application designed for managing and showcasing courses for a computer institute. This project is built using the MERN-inspired stack (without React) and allows users to explore courses while providing admin functionality to manage them.

🔗 **Live Website:** https://royal-institute-eaag.onrender.com/listings

---

## 📌 Features

* 📚 View all available courses
* 🔍 Detailed course pages (description, duration, content)
* ➕ Add new courses (Admin only)
* ✏️ Edit and update course details
* ❌ Delete courses
* 🖼️ Image upload using Cloudinary
* 🔐 Authentication & Authorization system
* 📦 Flash messages for user feedback
* 📱 Responsive UI design

---

## 🛠️ Tech Stack

### 💻 Frontend

* HTML5
* CSS3
* JavaScript
* EJS (Embedded JavaScript Templates)

### ⚙️ Backend

* Node.js
* Express.js

### 🗄️ Database

* MongoDB Atlas
* Mongoose

### ☁️ Other Tools & Services

* Cloudinary (Image Storage)
* Render (Deployment)
* Git & GitHub

---

## 📁 Project Structure

```
Royal-Institute/
│
├── models/          # Database schemas
├── routes/          # Express routes
├── controllers/     # Business logic
├── views/           # EJS templates
│   ├── layouts/
│   ├── listings/
│   └── includes/
├── public/          # Static files (CSS, JS)
├── utils/           # Helper functions
├── app.js           # Main server file
└── package.json
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```
git clone https://github.com/your-username/royal-institute.git
cd royal-institute
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file and add:

```
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret

DB_URL=your_mongodb_connection_string
SESSION_SECRET=your_secret
```

### 4️⃣ Run the Application

```
node app.js
```

or (if using nodemon)

```
nodemon app.js
```

---

## 🔐 Authentication

* User login & signup system
* Only authorized users can:

  * Add courses
  * Edit courses
  * Delete courses

---

## 🌟 Future Improvements

* 🔎 Search & filter courses
* 📊 Admin dashboard analytics
* 💳 Payment integration for courses
* ⭐ Course reviews & ratings
* 📧 Email notifications

---

## 💡 Acknowledgement

This project was built as a learning-based full-stack application to understand backend development, database management, and deployment.

