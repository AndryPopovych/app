import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import FridgeChef from "./pages/FridgeChef";
import ProfilePage from "./pages/ProfilePage";
import "./styles/Global.css";
import AboutUs from "./pages/AboutUs.jsx"


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/fridge-chef" element={<FridgeChef />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
  )
}

export default App;
