import React, { useState } from "react";
import { RiContactsBook2Fill } from "react-icons/ri";
import { IoInformation } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import { IoInvertMode } from "react-icons/io5";
import { MdOutlineMode } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx"; 

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
 
  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`sidebar ${isExpanded ? "expanded" : ""}`}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <RxHamburgerMenu />
      </button>
      <nav>
        <ul>
          <li>
            <button className="sidebar-button">
              <MdOutlineMode />
              {isExpanded && "Edit profile"}
            </button>
          </li>
          <li>
            <button className="sidebar-button">
              <RiContactsBook2Fill />
              {isExpanded && "Contacts"}
            </button>
          </li>
          <li>
            <button className="sidebar-button">
              <IoInformation />
              {isExpanded && "Info"}
            </button>
          </li>
          <li>
            <button className="sidebar-button">
              <MdLanguage />
              {isExpanded && "Language"}
            </button>
          </li>
          <li>
            <button className="sidebar-button">
              <IoInvertMode />
              {isExpanded && "Theme"}
            </button>
          </li>
          <li>
            <button className="sidebar-button">
              <IoSettingsOutline />
              {isExpanded && "Settings"}
            </button>
          </li>
        </ul>
      </nav>
      <button className="sidebar-login">
        <FiLogIn />
        {isExpanded && "Sign in"}
      </button>
    </div>
  );
};

export default Sidebar;