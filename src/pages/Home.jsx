import React, { useRef } from 'react';
import '../styles/Home.css';
import sampleImage from '../assets/fit_woman.avif'; 

const Home = () => {
  const healthRef = useRef(null);

  const scrollToHealth = () => {
    healthRef.current.scrollIntoView({ behavior: 'smooth' }); 
  };

  return (
    <div className="main-container">
      <div className="home">
        <div className="helloTxt">
          <h1>Your journey to health starts here.</h1>
          <p>
            From tailored fitness plans to expert nutritional guidance, we provide the tools and support you need to achieve your wellness goals.
            <br />
            Discover personalized solutions for a healthier, happier you.
          </p>
          <button className="exploreButton" onClick={scrollToHealth}>
            Explore health plans
          </button>
        </div>
        <div className="imageContainer">
          <img src={sampleImage} alt="fitness woman image" />
        </div>
      </div>
      <div className="health" ref={healthRef}>
        <div className="healthTxt">
          <h2>Our health plans</h2>
          <p>Our health plans are designed to empower you with personalized strategies to achieve your health and wellness goals.</p>
        </div>
        <div className="cards">
          <div className="cardItem">
            <h3>BMR calculator</h3>
            <p>Calculate the daily calories essential for your body's core functions.</p>
            <a href="#" className="learnMore">Learn more →</a>
          </div>
          <div className="cardItem">
            <h3>Fridge Chef*</h3>
            <p>Turn your leftover ingredients into delicious meals!</p>
            <a href="#" className="learnMore">Learn more →</a>
          </div>
          <div className="cardItem">
            <h3>Meal Recommendation</h3>
            <p>Get personalized meal suggestions based on your preferences and goals!</p>
            <a href="#" className="learnMore">Learn more →</a>
          </div>
          <div className="cardItem">
            <h3>E-mail marketing</h3>
            <p>Drive conversions with personalized e-mail campaigns.</p>
            <a href="#" className="learnMore">Learn more →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
