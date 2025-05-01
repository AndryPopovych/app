import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import fitBg from "../../assets/fit_bg.png";


const ContactForm = () => {
  const [isFormVisible, setIsFormVisible] = useState(true);

  useEffect(() => {
    document.documentElement.style.backgroundColor = "rgb(29, 29, 29)";

    return () => {
      document.documentElement.style.backgroundColor = "";
    };
  }, []);

  const handleClose = () => {
    setIsFormVisible(false);
  };

  if (!isFormVisible) return null;

  return (
    <>
      <div className="blur-background"></div>
      <div className="contact-form">
        <div className="close-container" onClick={handleClose}>
          <IoMdClose />
        </div>
        <div
          className="background-image"
          style={{ backgroundImage: `url(${fitBg})` }}
        ></div>
        <div className="content-wrapper">
          <header className="form-header">
            <h1>LET'S GET IN TOUCH!</h1>
          </header>
          <form className="form-container">
            <div className="form-group">
              <input type="text" placeholder="FULL NAME" name="fullName" className="form-input" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="EMAIL" name="email" className="form-input" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="PHONE" name="phone" className="form-input" />
            </div>
            <div className="form-group">
              <textarea placeholder="YOUR MESSAGE*" name="message" className="form-input form-textarea" required />
            </div>
            <button type="submit" className="form-submit">→</button>
          </form>
          <footer className="form-footer">
            <div>
              <h4>LEDUC</h4>
              <p>100, 5305-50 ST</p>
              <p>LEDUC AB T9E 6Z3</p>
              <p>780.986.8468</p>
            </div>
            <div>
              <h4>SPRUCE GROVE</h4>
              <p>203 CHURCH ROAD</p>
              <p>SPRUCE GROVE AB T7X 3A2</p>
              <p>780.962.5333</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
