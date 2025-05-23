import React from "react";
import Sidebar from "../components/Profile/Sidebar";
import MainContent from "../components/Profile/MainContent";
import ContactForm from "../components/Profile/ContactForm";
import "../styles/Profile.css";

const ProfilePage = () => {
  return (
    <div className="sidebar-container">
      <Sidebar />
      <MainContent />
      <ContactForm />
    </div>
  );
};

export default ProfilePage;