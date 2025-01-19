import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import FridgeChef from "./pages/FridgeChef";
import Registration from "./pages/Registration";
import "./styles/Global.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/fridge-chef" element={<FridgeChef />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  )
}

export default App;
