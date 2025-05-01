import React from "react";
import "../../styles/FAQCarousel.css";
import { IoIosFitness } from "react-icons/io";
import { IoIosCalculator } from "react-icons/io";
import { LuChefHat } from "react-icons/lu";
import { GiProgression } from "react-icons/gi";
import { MdOutlineQuestionAnswer } from "react-icons/md";

const FAQCarousel = () => {
  const items = [
    { icon: <IoIosFitness />, title: "How to start doing fitness?", text: "This is the text for the first carousel item.", link: "Learn more" },
    { icon: <IoIosCalculator />, title: "How to correctly calculate your body data?", text: "This is the text for the second carousel item.", link: "Learn more" },
    { icon: <LuChefHat />, title: "How does the Fridge Chef feature work?", text: "This is the text for the third carousel item.", link: "Learn more" },
    { icon: <GiProgression />, title: "How to manage and track your progress?", text: "This is the text for the fourth carousel item.", link: "Learn more" },
    { icon: <MdOutlineQuestionAnswer />, title: "How to contact support?", text: "This is the text for the fifth carousel item.", link: "Learn more" },
  ];


  const duplicatedItems = [...items, ...items];

  return (
    <div className="carousel-container">
      <div className="carousel-track" style={{ "--quantity": items.length }}>
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="carousel-item"
            style={{ "--position": index + 1 }}
          >
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <a href="#">{item.link}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQCarousel;