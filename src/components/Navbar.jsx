import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Fitnessy</h1>
      <ul>
        <li>About us</li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calculator">BMR Calculator</Link></li>
        <li><Link to="/fridge-chef">Fridge Chef</Link></li>
        <li><button>Premium programs</button></li>
        <li><Link to="/registration">Profile</Link></li>
        </ul>
    </nav>
  ); 
};

export default Navbar; 