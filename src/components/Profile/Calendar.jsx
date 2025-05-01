"use client"

import { useState } from "react"
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  startOfWeek,
  endOfWeek,
  isToday,
  getYear,
  setYear,
  setMonth,
} from "date-fns"

export function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false)
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false)

  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(monthStart)
  const calendarStart = startOfWeek(monthStart)
  const calendarEnd = endOfWeek(monthEnd)

  const dateRange = eachDayOfInterval({ start: calendarStart, end: calendarEnd })

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const years = Array.from({ length: 21 }, (_, i) => getYear(new Date()) - 10 + i)

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1))
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1))

  const handleMonthSelect = (monthIndex) => {
    setCurrentMonth(setMonth(currentMonth, monthIndex))
    setIsMonthDropdownOpen(false)
  }

  const handleYearSelect = (year) => {
    setCurrentMonth(setYear(currentMonth, year))
    setIsYearDropdownOpen(false)
  }

  return (
    <div className="calendar">
      <div className="calendar__header">
        <button className="calendar__nav-button" onClick={prevMonth}>
          {"<"}
        </button>
        <div className="calendar__selectors">
          <div className="calendar__dropdown-container">
            <button className="calendar__dropdown-button" onClick={() => setIsMonthDropdownOpen(!isMonthDropdownOpen)}>
              {format(currentMonth, "MMMM")}
            </button>
            {isMonthDropdownOpen && (
              <div className="calendar__dropdown-content">
                {months.map((month, index) => (
                  <button
                    key={month}
                    className={`calendar__dropdown-item ${
                      currentMonth.getMonth() === index ? "calendar__dropdown-item--active" : ""
                    }`}
                    onClick={() => handleMonthSelect(index)}
                  >
                    {month}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="calendar__dropdown-container">
            <button className="calendar__dropdown-button" onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}>
              {format(currentMonth, "yyyy")}
            </button>
            {isYearDropdownOpen && (
              <div className="calendar__dropdown-content calendar__dropdown-content--years">
                {years.map((year) => (
                  <button
                    key={year}
                    className={`calendar__dropdown-item ${
                      currentMonth.getFullYear() === year ? "calendar__dropdown-item--active" : ""
                    }`}
                    onClick={() => handleYearSelect(year)}
                  >
                    {year}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <button className="calendar__nav-button" onClick={nextMonth}>
          {">"}
        </button>
      </div>
      <div className="calendar__weekdays">
        {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
          <div key={day} className="calendar__weekday">
            {day}
          </div>
        ))}
      </div>
      <div className="calendar__days">
        {dateRange.map((date, idx) => (
          <button
            key={idx}
            className={`calendar__day 
              ${!isSameMonth(date, currentMonth) ? "calendar__day--out-of-month" : ""}
              ${isSameDay(date, selectedDate) ? "calendar__day--selected" : ""}
              ${isToday(date) ? "calendar__day--today" : ""}
            `}
            onClick={() => setSelectedDate(date)}
            disabled={!isSameMonth(date, currentMonth)}
          >
            {format(date, "d")}
          </button>
        ))}
      </div>
      <div className="calendar__footer">
        <p className="calendar__selected-date">Selected: {format(selectedDate, "MMMM d, yyyy")}</p>
      </div>
    </div>
  )
}

