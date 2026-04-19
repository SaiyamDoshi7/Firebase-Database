# 📦 Inventory Dashboard (React + Redux + Firebase)

## 🚀 Project Overview

The Inventory Dashboard is a modern web application that allows users to **add, edit, delete, and manage products** efficiently.
It uses React for the frontend, Redux Toolkit for state management, and Firebase as the backend database.

---

## 🛠 Tech Stack

* ⚛️ React JS
* 🧠 Redux Toolkit
* 🔥 Firebase (Firestore / Realtime Database)
* 🎨 Custom CSS
* ⚡ Vite

---

## ✨ Features

* ➕ Add new products
* 📝 Edit existing products
* 🗑 Delete products
* 📊 View products in a structured table
* 🔄 Real-time data sync with Firebase
* ⚠️ Low stock indicator
* 📱 Responsive design

---

## 📁 Folder Structure

```
src/
│
├── components/
│   ├── AddProduct.jsx
│   ├── EditProduct.jsx
│   └── ProductList.jsx
│
├── features/
│   └── inventory/
│       └── inventorySlice.js
│
├── app/
│   └── store.js
│
├── index.css
├── App.jsx
└── main.jsx
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/SaiyamDoshi7/inventory-dashboard.git
cd inventory-dashboard
```

### 2. Install dependencies

```bash
npm install
```

---

### 3. Firebase Setup

1. Go to Firebase Console
2. Create a new project
3. Enable Firestore Database
4. Copy your Firebase configuration

Create a file:

```
src/firebase.js
```

Add the following:

```js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC9xx-wyz9f8gQbHhGdiGHYP-0TVLojQO8",
  authDomain: "fir-database-2a3a4.firebaseapp.com",
  databaseURL: "https://fir-database-2a3a4-default-rtdb.firebaseio.com",
  projectId: "fir-database-2a3a4",
  storageBucket: "fir-database-2a3a4.firebasestorage.app",
  messagingSenderId: "83541602319",
  appId: "1:83541602319:web:21e0e1ffd2daf43780b37a",
  measurementId: "G-3BKTXTMKGC"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
```

---

### 4. Run the project

```bash
npm run dev
```

---

## 📌 Usage

* Use the form to add a product
* Click "Edit" to update product details
* Click "Delete" to remove a product
* All changes are synced with Firebase in real-time

---

## 🔥 Future Improvements

* 🔐 User Authentication (Firebase Auth)
* 📊 Analytics Dashboard
* 📁 File Upload (Images/Documents)
* 🌙 Dark Mode
* 🔎 Search and Filter functionality

---

## 🤝 Contributing

Contributions are welcome!
Please open an issue first to discuss major changes.

---

## 📄 License

This project is open-source and free to use.

---

## 💡 Author

Made with ❤️ by **Saiyam Doshi**

## Screenshot

![screenshot-project](https://github.com/SaiyamDoshi7/Firebase-Database/blob/052ebbd1c6cbdaacfaeb3d15e85039e50ee0dde0/Screenshot%202026-04-19%20203250.png)
