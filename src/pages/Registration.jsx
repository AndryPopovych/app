import React, { useState } from "react";
import "../styles/Registration.css";
import beachPhoto from "../assets/beach_photo.jpg";
import { IoMdClose } from "react-icons/io";

const Registration = () => {
  const [isFormVisible, setIsFormVisible] = useState(true); // Стан для видимості форми
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleClose = () => {
    setIsFormVisible(false); // При натисканні на кнопку close форма закривається
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="contact-form">
      {/* Модальне вікно */}
      {isModalOpen && (
        <>
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-container">
            <h2>Welcome!</h2>
            <p>This is a new modal window. You can close it to proceed.</p>
            <button onClick={closeModal} className="modal-close-button">
              Close
            </button>
          </div>
        </>
      )}

      {/* Форма реєстрації */}
      {isFormVisible && (
        <>
          <div className="close-container" onClick={handleClose}>
            <IoMdClose />Close
          </div>
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${beachPhoto})`,
              height: '100vh',
            }}
          ></div>
          <div className="content-wrapper">
            <header className="form-header">
              <h1>LET'S GET IN TOUCH!</h1>
            </header>
            <form className="form-container">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="FULL NAME"
                  name="fullName"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="EMAIL"
                  name="email"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="PHONE"
                  name="phone"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="YOUR MESSAGE*"
                  name="message"
                  className="form-input form-textarea"
                  required
                />
              </div>
              <button type="submit" className="form-submit">
                →
              </button>
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
        </>
      )}

      {/* Новий блок, який завжди присутній на сторінці */}
      <div className="replacement-block">
        <h2>Thank you for closing the form!</h2>
        <p>Here is some other content...</p>
      </div>
    </div>
  );
};

export default Registration;
