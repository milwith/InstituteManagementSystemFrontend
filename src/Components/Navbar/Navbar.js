import React from "react";
import Logo from "../../Assets/Logo.jpg";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-white rounded">
        <div className="container-fluid" >
          <a className="navbar-brand" href="/">
            <img src={Logo} className="navImage" />
            Institute Management System
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-5">
              <li className="nav-item">
                <a className="nav-link" href="/studentPage">
                  Student
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/lecturerPage">
                  Teacher
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/module">
                 Subject
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
