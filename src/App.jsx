import React, { useContext, useEffect } from "react";
import { Routes, Route, Link, useNavigate, NavLink } from "react-router-dom";
import { ShopPage } from "./pages/ShopPage";
import { CartPage } from "./pages/CartPage";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles.scss";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <nav
        className="navbar has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-start">
          <NavLink to="/" className="navbar-item">
            Shop
          </NavLink>

          <NavLink to="/cart" className="navbar-item">
            Shoping cart
          </NavLink>
        </div>

        <div className="navbar-end">
          <div className="navbar-item"></div>
        </div>
      </nav>

      <main>
        <section className="section">
          <Routes>
            <Route path="/" element={<ShopPage />} />
            <Route path="cart" element={<CartPage />} />
          </Routes>
        </section>
      </main>
    </>
  );
}

export default App;
