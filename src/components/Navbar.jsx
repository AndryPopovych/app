"use client"

import { useState } from "react"
import "../styles/Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Fitnessy</h1>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`hamburger ${isMenuOpen ? "active" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul className={isMenuOpen ? "active" : ""}>
        <li>
          <Link to="AboutUs">About us</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">BMR Calculator</Link>
        </li>
        <li>
          <Link to="/fridge-chef">Fridge Chef</Link>
        </li>
        <li>
          <button>Premium programs</button>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

