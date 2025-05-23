import '../styles/AboutUs.css';
import { Link } from 'react-router-dom';



const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Fitnessy</h1>
        <p className="tagline">Transforming Lives Through Fitness</p>
      </div>

      <section className="about-section our-story">
        <div className="section-content">
          <h2>Our Story</h2>
          <p>
            Founded in 2025, Fitnessy began with a simple mission: to make fitness accessible, enjoyable, and
            effective for everyone. What started as a small personal training studio has grown into a comprehensive
            fitness platform that serves thousands of members worldwide.
          </p>
          <p>
            Our founder, Andrii Popovych, a former professional athlete, recognized that many people struggled to find
            workout routines that were both effective and sustainable. Drawing from years of experience in sports
            science and nutrition, Alex created Abuto Fitness to bridge this gap and provide personalized fitness
            solutions for people of all fitness levels.
          </p>
        </div>
        <div className="about-image story-image">
          <div className="image-placeholder1"></div>
        </div>
      </section>

      <section className="about-section our-mission">
        <div className="about-image mission-image">
          <div className="image-placeholder2"></div>
        </div>
        <div className="section-content">
          <h2>Our Mission</h2>
          <p>
            At Fitnessy, we believe that fitness is more than just physical exercise—it's a pathway to a healthier,
            happier, and more fulfilled life. Our mission is to empower individuals to discover their strength, build
            confidence, and achieve their personal fitness goals through expert guidance, supportive community, and
            innovative training methods.
          </p>
          <p>
            We're committed to breaking down barriers to fitness and creating an inclusive environment where everyone
            feels welcome, supported, and inspired to become their best selves.
          </p>
        </div>
      </section>

      <section className="about-section our-team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-image"></div>
            <h3>Andrii Popovych</h3>
            <p className="member-title">Founder & Head Coach</p>
            <p>Former professional athlete with 15+ years of experience in fitness training and nutrition.</p>
          </div>
        </div>
      </section>

      <section className="about-section our-values">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Excellence</h3>
            <p>We strive for excellence in everything we do, from our training programs to our customer service.</p>
          </div>
          <div className="value-card">
            <h3>Inclusivity</h3>
            <p>We create a welcoming environment where everyone feels valued, respected, and supported.</p>
          </div>
          <div className="value-card">
            <h3>Innovation</h3>
            <p>
              We continuously evolve our methods and embrace new technologies to provide the best fitness experience.
            </p>
          </div>
          <div className="value-card">
            <h3>Integrity</h3>
            <p>We operate with honesty and transparency, always putting our members' best interests first.</p>
          </div>
        </div>
      </section>

      <section className="about-section testimonials">
        <h2>What Our Members Say</h2>
        <div className="testimonial-slider">
          <div className="testimonial">
            <p>
              "Fitnessy transformed my approach to health and wellness. The personalized programs and supportive
              community have helped me achieve goals I never thought possible."
            </p>
            <p className="testimonial-author">— Jamie R.</p>
          </div>
        </div>
      </section>

      <section className="about-section join-us">
        <h2>Join the Fitnessy Family</h2>
        <p>
          Ready to start your fitness journey with us? Explore our programs or get in touch to learn more about how we
          can help you reach your goals.
        </p>
        <div className="cta-buttons">
          <Link to="/#cards" className="primary-button">Explore Programs</Link>
          <button className="secondary-button">Contact Us</button>
        </div>
      </section>
    </div>
  )
}

export default AboutUs;

