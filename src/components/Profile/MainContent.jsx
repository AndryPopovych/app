import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { Calendar } from "./Calendar" // Імпортуємо наш новий компонент Calendar

const MainContent = () => {
  // Додайте дані для графіка
  const data = [
    { day: "Mon", productivity: 40 },
    { day: "Tue", productivity: 30 },
    { day: "Wed", productivity: 20 },
    { day: "Thu", productivity: 27 },
    { day: "Fri", productivity: 18 },
    { day: "Sat", productivity: 23 },
    { day: "Sun", productivity: 34 },
  ]

  return (
    <main className="page-content">
      <section className="content-section">
        <h2>Our Services</h2>
        <p>
          We provide top-notch solutions for your business needs. From web development to digital marketing, we've got
          you covered.
        </p>
      </section>
      <section className="content-section">
        <h2>About Us</h2>
        <p>
          Our company has been a leader in the industry for over a decade, delivering innovative solutions that drive
          success.
        </p>
      </section>
      <div className="large-container-wrapper">
        <div className="large-container1">
          <h3>Productivity Chart</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="productivity" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="large-container2">
          <h3>Calendar</h3>
          <div className="calendar-wrapper">
            <Calendar /> {/* Використовуємо наш новий компонент Calendar */}
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainContent