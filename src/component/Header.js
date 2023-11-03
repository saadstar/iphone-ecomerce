import React from "react";
import { NavLink } from "react-router-dom";
import { LogIn } from "./Login";
import { SignUp } from "./SignUp";
import { Cart } from "./Cart"
export function Header() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid py-2">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link" aria-current="page">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/products" className="nav-link">
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link">
                    Contact
                  </NavLink>
                </li>
              </ul>
              <NavLink className="navbar-brand mx-auto fw-bold nonee" to="/">
                Apple Mart
              </NavLink>
              <NavLink className="btn-primary btn " to="/login">
                Login
              </NavLink>
              <NavLink className="btn-primary btn" to="/signup">
                Sign Up
              </NavLink>
              <Cart />
            </div>
          </div>
        </nav>
      </>
    );
}