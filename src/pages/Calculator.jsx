import React, { useState } from "react";
import "../styles/Calculator.css";

const Calculator = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bodyFat, setBodyFat] = useState("");
  const [results, setResults] = useState(null);

  const calculateBMR = () => {
    let bmr;
    if (gender === "male") {
      bmr = 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age;
    } else {
      bmr = 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age;
    }

    const maintenanceCalories = bmr * (1 + bodyFat / 100);
    const healthyWeightRange = {
      min: 18.5 * (height / 100) ** 2,
      max: 24.9 * (height / 100) ** 2,
    };

    setResults({
      bmr: bmr.toFixed(2),
      maintenanceCalories: maintenanceCalories.toFixed(2),
      healthyWeightRange,
    });
  };

  return (
    <div className="calculator">
      <h1>BMR Calculator</h1>
      <div className="form-group">
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter your age"
        />
      </div>
      <div className="form-group">
        <label>Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="form-group">
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter your height"
        />
      </div>
      <div className="form-group">
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter your weight"
        />
      </div>
      <div className="form-group">
        <label>Body Fat Percentage (%):</label>
        <input
          type="number"
          value={bodyFat}
          onChange={(e) => setBodyFat(e.target.value)}
          placeholder="Enter body fat percentage"
        />
      </div>
      <button onClick={calculateBMR}>My Results</button>

      {results && (
        <div className="results">
          <h2>Your Results</h2>
          <p><strong>BMR:</strong> {results.bmr} kcal/day</p>
          <p><strong>Maintenance Calories:</strong> {results.maintenanceCalories} kcal/day</p>
          <p><strong>Healthy Weight Range:</strong> {results.healthyWeightRange.min.toFixed(2)} kg - {results.healthyWeightRange.max.toFixed(2)} kg</p>
        </div>
      )}
    </div>
  );
};

export default Calculator;
