"use client"
import { useState } from "react"
import '../styles/Calculator.css';

const Calculator = () => {
  const [gender, setGender] = useState("male")
  const [age, setAge] = useState("")
  const [weight, setWeight] = useState("")
  const [goalWeight, setGoalWeight] = useState("")
  const [height, setHeight] = useState("")
  const [activityLevel, setActivityLevel] = useState("1.2")
  const [weightGoal, setWeightGoal] = useState("maintain")
  const [bmr, setBmr] = useState(null)
  const [tdee, setTdee] = useState(null)
  const [goalCalories, setGoalCalories] = useState(null)
  const [timeToGoal, setTimeToGoal] = useState(null)
  const [weightUnit, setWeightUnit] = useState("kg")
  const [heightUnit, setHeightUnit] = useState("cm")
  const [showResults, setShowResults] = useState(false)
  const [animateResults, setAnimateResults] = useState(false)
  const [activeTab, setActiveTab] = useState("maintain")

  const calculateBMR = () => {
    if (!age || !weight || !height) return

    let weightInKg = Number.parseFloat(weight)
    let heightInCm = Number.parseFloat(height)
    let goalWeightInKg = Number.parseFloat(goalWeight) || weightInKg

    // Convert units if necessary
    if (weightUnit === "lbs") {
      weightInKg = weightInKg / 2.20462
      goalWeightInKg = goalWeightInKg / 2.20462
    }
    if (heightUnit === "ft") {
      heightInCm = heightInCm * 30.48
    }

    let bmrValue = 0
    if (gender === "male") {
      bmrValue = 88.362 + 13.397 * weightInKg + 4.799 * heightInCm - 5.677 * Number.parseFloat(age)
    } else {
      bmrValue = 447.593 + 9.247 * weightInKg + 3.098 * heightInCm - 4.33 * Number.parseFloat(age)
    }

    const tdeeValue = bmrValue * Number.parseFloat(activityLevel)

    // Calculate goal calories based on weight goal
    let goalCaloriesValue = tdeeValue
    if (weightGoal === "lose") {
      goalCaloriesValue = tdeeValue - 500 // Deficit for weight loss
    } else if (weightGoal === "gain") {
      goalCaloriesValue = tdeeValue + 500 // Surplus for weight gain
    }

    // Calculate time to reach goal weight
    let timeToGoalValue = null
    if (goalWeight && weightGoal !== "maintain") {
      const weightDifference = Math.abs(goalWeightInKg - weightInKg)
      if (weightDifference > 0) {
        // Calculate weeks to reach goal (assuming 0.5kg/week for weight loss/gain)
        // 500 calorie deficit/surplus per day = ~0.5kg per week
        const weeksToGoal = weightDifference / 0.5

        // Check if goal is aligned with direction (lose/gain)
        const isGoalAligned =
          (weightGoal === "lose" && goalWeightInKg < weightInKg) ||
          (weightGoal === "gain" && goalWeightInKg > weightInKg)

        if (isGoalAligned) {
          timeToGoalValue = {
            weeks: Math.round(weeksToGoal),
            months: Math.round(weeksToGoal / 4.33),
            aligned: true,
          }
        } else {
          timeToGoalValue = {
            aligned: false,
          }
        }
      }
    }

    setBmr(Math.round(bmrValue))
    setTdee(Math.round(tdeeValue))
    setGoalCalories(Math.round(goalCaloriesValue))
    setTimeToGoal(timeToGoalValue)
    setShowResults(true)

    // Trigger animation
    setAnimateResults(true)
    setTimeout(() => setAnimateResults(false), 1000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    calculateBMR()
  }

  const handleGoalChange = (goal) => {
    setWeightGoal(goal)
    setActiveTab(goal)
  }

  const activityOptions = [
    { value: "1.2", label: "Sedentary (little or no exercise)" },
    { value: "1.375", label: "Lightly active (light exercise 1-3 days/week)" },
    { value: "1.55", label: "Moderately active (moderate exercise 3-5 days/week)" },
    { value: "1.725", label: "Very active (hard exercise 6-7 days/week)" },
    { value: "1.9", label: "Extra active (very hard exercise & physical job)" },
  ]

  return (
    <div className="bmr-calculator">
      <div className="bmr-calculator__container">
        <div className="bmr-calculator__header">
          <h1 className="bmr-calculator__title">BMR Calculator</h1>
          <p className="bmr-calculator__subtitle">
            Calculate your Basal Metabolic Rate & Total Daily Energy Expenditure
          </p>
        </div>

        <div className="bmr-calculator__goals-menu">
          <div
            className={`bmr-calculator__goal-tab ${activeTab === "lose" ? "bmr-calculator__goal-tab--active" : ""}`}
            onClick={() => handleGoalChange("lose")}
          >
            Lose Weight
          </div>
          <div
            className={`bmr-calculator__goal-tab ${activeTab === "maintain" ? "bmr-calculator__goal-tab--active" : ""}`}
            onClick={() => handleGoalChange("maintain")}
          >
            Maintain Weight
          </div>
          <div
            className={`bmr-calculator__goal-tab ${activeTab === "gain" ? "bmr-calculator__goal-tab--active" : ""}`}
            onClick={() => handleGoalChange("gain")}
          >
            Gain Weight
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bmr-calculator__form">
          <div className="bmr-calculator__gender-selector">
            <div
              className={`bmr-calculator__gender-option ${gender === "male" ? "bmr-calculator__gender-option--active" : ""}`}
              onClick={() => setGender("male")}
            >
              <div className="bmr-calculator__gender-icon bmr-calculator__gender-icon--male"></div>
              <span>Male</span>
            </div>
            <div
              className={`bmr-calculator__gender-option ${gender === "female" ? "bmr-calculator__gender-option--active" : ""}`}
              onClick={() => setGender("female")}
            >
              <div className="bmr-calculator__gender-icon bmr-calculator__gender-icon--female"></div>
              <span>Female</span>
            </div>
          </div>

          <div className="bmr-calculator__input-group">
            <label className="bmr-calculator__label">Age</label>
            <div className="bmr-calculator__input-wrapper">
              <input
                type="number"
                className="bmr-calculator__input"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Years"
                min="1"
                max="120"
                required
              />
              <span className="bmr-calculator__input-unit">years</span>
            </div>
          </div>

          <div className="bmr-calculator__input-row">
            <div className="bmr-calculator__input-group">
              <label className="bmr-calculator__label">Current Weight</label>
              <div className="bmr-calculator__input-wrapper">
                <input
                  type="number"
                  className="bmr-calculator__input"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Weight"
                  min="1"
                  required
                />
                <div className="bmr-calculator__unit-toggle">
                  <button
                    type="button"
                    className={`bmr-calculator__unit-btn ${weightUnit === "kg" ? "bmr-calculator__unit-btn--active" : ""}`}
                    onClick={() => setWeightUnit("kg")}
                  >
                    kg
                  </button>
                  <button
                    type="button"
                    className={`bmr-calculator__unit-btn ${weightUnit === "lbs" ? "bmr-calculator__unit-btn--active" : ""}`}
                    onClick={() => setWeightUnit("lbs")}
                  >
                    lbs
                  </button>
                </div>
              </div>
            </div>

            <div className="bmr-calculator__input-group">
              <label className="bmr-calculator__label">Goal Weight</label>
              <div className="bmr-calculator__input-wrapper">
                <input
                  type="number"
                  className="bmr-calculator__input"
                  value={goalWeight}
                  onChange={(e) => setGoalWeight(e.target.value)}
                  placeholder="Goal Weight"
                  min="1"
                />
                <span className="bmr-calculator__input-unit">{weightUnit}</span>
              </div>
            </div>
          </div>

          <div className="bmr-calculator__input-group">
            <label className="bmr-calculator__label">Height</label>
            <div className="bmr-calculator__input-wrapper">
              <input
                type="number"
                className="bmr-calculator__input"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Height"
                min="1"
                required
              />
              <div className="bmr-calculator__unit-toggle">
                <button
                  type="button"
                  className={`bmr-calculator__unit-btn ${heightUnit === "cm" ? "bmr-calculator__unit-btn--active" : ""}`}
                  onClick={() => setHeightUnit("cm")}
                >
                  cm
                </button>
                <button
                  type="button"
                  className={`bmr-calculator__unit-btn ${heightUnit === "ft" ? "bmr-calculator__unit-btn--active" : ""}`}
                  onClick={() => setHeightUnit("ft")}
                >
                  ft
                </button>
              </div>
            </div>
          </div>

          <div className="bmr-calculator__input-group">
            <label className="bmr-calculator__label">Activity Level</label>
            <select
              className="bmr-calculator__select"
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              required
            >
              {activityOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="bmr-calculator__button">
            Calculate
          </button>
        </form>

        {showResults && (
          <div className={`bmr-calculator__results ${animateResults ? "bmr-calculator__results--animate" : ""}`}>
            <div className="bmr-calculator__result-card">
              <h3 className="bmr-calculator__result-title">Basal Metabolic Rate</h3>
              <div className="bmr-calculator__result-value">{bmr}</div>
              <div className="bmr-calculator__result-unit">calories/day</div>
              <p className="bmr-calculator__result-description">
                Your BMR is the number of calories your body needs to maintain basic physiological functions while at
                rest.
              </p>
            </div>

            <div className="bmr-calculator__result-card">
              <h3 className="bmr-calculator__result-title">Total Daily Energy Expenditure</h3>
              <div className="bmr-calculator__result-value">{tdee}</div>
              <div className="bmr-calculator__result-unit">calories/day</div>
              <p className="bmr-calculator__result-description">
                Your TDEE is an estimation of how many calories you burn per day when exercise is taken into account.
              </p>
            </div>

            <div className="bmr-calculator__result-card bmr-calculator__result-card--goal">
              <h3 className="bmr-calculator__result-title">
                {weightGoal === "lose"
                  ? "Weight Loss Goal"
                  : weightGoal === "gain"
                    ? "Weight Gain Goal"
                    : "Maintenance Goal"}
              </h3>
              <div className="bmr-calculator__result-value">{goalCalories}</div>
              <div className="bmr-calculator__result-unit">calories/day</div>
              <p className="bmr-calculator__result-description">
                {weightGoal === "lose"
                  ? "To lose weight, aim for this calorie target which creates a 500 calorie deficit."
                  : weightGoal === "gain"
                    ? "To gain weight, aim for this calorie target which creates a 500 calorie surplus."
                    : "To maintain your current weight, aim for this calorie target."}
              </p>
            </div>

            {timeToGoal && goalWeight && weightGoal !== "maintain" && (
              <div className="bmr-calculator__result-card bmr-calculator__result-card--timeline">
                <h3 className="bmr-calculator__result-title">Time to Reach Goal</h3>
                {timeToGoal.aligned ? (
                  <>
                    <div className="bmr-calculator__result-value">{timeToGoal.weeks}</div>
                    <div className="bmr-calculator__result-unit">weeks</div>
                    <p className="bmr-calculator__result-description">
                      Approximately {timeToGoal.months} months to reach your goal weight of {goalWeight} {weightUnit},
                      based on a safe rate of {weightGoal === "lose" ? "weight loss" : "weight gain"}.
                    </p>
                  </>
                ) : (
                  <p className="bmr-calculator__result-description bmr-calculator__result-description--warning">
                    Your goal weight doesn't align with your selected weight goal.
                    {weightGoal === "lose"
                      ? " For weight loss, your goal weight should be less than your current weight."
                      : " For weight gain, your goal weight should be more than your current weight."}
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Calculator

