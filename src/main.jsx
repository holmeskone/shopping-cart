import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/cart/Cart";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App acts as a layout (Navigation, Footer, etc.)
    children: [
      { index: true, element: <Home /> }, // Default child route
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
