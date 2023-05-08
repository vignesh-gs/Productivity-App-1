import React from "react";
import { FiBell, FiPlus } from "react-icons/fi";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <div className="home-nav ot-red">
        <div className="nav-profile ot-black">
          <div className="nav-user-photo">V</div>
          <div className="nav-icons">
            <div className="icon-notification">
              <FiBell />
              <div className="notif">12</div>
            </div>
            <div className="icon-add">
              <FiPlus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
