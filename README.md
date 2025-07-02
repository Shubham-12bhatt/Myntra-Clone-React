# 🛍️ Myntra Clone (React + Redux)

A frontend clone of Myntra built using **React**, **Redux**, and **React Router**, simulating a shopping platform with item listing, add-to-bag functionality, and a bag summary view. Product data is fetched from a local JSON backend (mimicking real API behavior).

---

## 🔗 Live Demo

[👉 Try the App Here](https://myntr-a.netlify.app/)


---
## 🔗 Backend API Integration

The React frontend fetches product data from a **live backend** hosted on [Render](https://render.com).

### 🔧 Backend API Endpoint
fetch("[https://items-myntra-backend.onrender.com/items](https://items-myntra-backend.onrender.com/items)")

### 🛒 Product Listing Page
- Shows items with ratings, prices, discounts, and "Add to Bag"/"Remove" functionality.

### 📦 Bag Page
- Shows all items added to the bag
- Displays total amount, discount, convenience fee
- Allows placing an order or removing items

---

## 🧰 Tech Stack

- **React** – component-based UI
- **React Router DOM** – page routing
- **Redux Toolkit** – global state management
- **Hooks** – `useState`, `useEffect`, `useSelector`, `useDispatch`
- **Local JSON Backend** – mimicking an API fetch
- **Custom Styling**

---

## 🔑 Features

- 🔄 Fetches product data from local JSON (like real API)
- 🛍️ Add or remove items from the shopping bag
- 🛒 Bag view updates dynamically with total calculation
- 🔁 State managed via Redux
- 🧠 Built using React best practices and clean component structure

---

## 🧠 Concepts Used

- `useEffect` for data fetching
- `useState` for local component states
- `useSelector` / `useDispatch` for Redux state
- Conditional rendering for loading/spinner logic
- `createSlice()` from Redux Toolkit
- Routing via `<Outlet>` and `react-router-dom`

---

