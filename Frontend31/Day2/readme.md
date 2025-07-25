# 🛒 Mini E-Commerce App with ES6 Concepts

Welcome to my Mini E-Commerce project! This project is built using **modern JavaScript (ES6+)** and focuses on applying core language concepts while interacting with a real API. The goal is to strengthen my understanding of ES6 through a hands-on project.

---

## 📚 ES6 Concepts Revised

Before building this project, I revised and practiced several important JavaScript ES6 features:

### 🔹 `var`, `let`, and `const`

- `var` is **function-scoped** and **hoisted** with a default value of `undefined`.
- `let` and `const` are **block-scoped** and exist in the **Temporal Dead Zone (TDZ)**.
  - Accessing them before declaration results in a **ReferenceError**.

### 🔹 Hoisting

- **Function declarations** are hoisted completely, so you can call them before they are defined.
- **Function expressions** and **arrow functions** are hoisted like variables — but not initialized — so calling them early throws an error.

### 🔹 Spread and Rest Operators

- Used for expanding (`...arr`) and collecting elements (`...args`) in arrays and function arguments.

### 🔹 Destructuring

- **Array and Object Destructuring** makes it easier to extract data in a cleaner way.

### 🔹 Optional Chaining (`?.`)

- Helps safely access deeply nested properties without checking for `null` or `undefined`.

### 🔹 Async/Await

- Modern way to write asynchronous code that looks and behaves more like synchronous code.
- Used to handle promises more cleanly.

---

## ⚙️ Project Overview: Mini E-Commerce Web App

A simple, functional e-commerce frontend built using JavaScript and [Fake Store API](https://fakestoreapi.com/).

### 🚀 Features:

- **Product Listing**  
  Fetches and displays products from the API.

- **Product Categories**  
  Allows filtering products by categories (e.g., electronics, men's clothing, etc.).

- **Cart Functionality**  
  Users can:

  - Add products to the cart.
  - Remove products from the cart.

- **Responsive UI Updates**  
  DOM manipulation based on real-time user interactions.

---

## 🔧 Tech Stack

- **HTML** + **CSS**
- **JavaScript (ES6+)**
- **Fake Store API** for product data

---

## 📦 Future Enhancements

- Add product detail pages.
- Implement search functionality.
- Store cart data in `localStorage`.
- Add quantity adjustment in the cart.

---

## 📝 Learning Goal

This project is part of my ongoing journey to become a better JavaScript developer. The focus is to:

- Understand and apply modern JS features.
- Get hands-on experience with API integration.
- Build responsive, user-interactive web applications.

---

> “Learning by doing is the best way to master a language — and this project is one more step in that direction.”

---

## 📁 Project Structure (Coming Soon)

```bash
.
├── index.html
├── style.css
├── script.js
└── README.md
```
