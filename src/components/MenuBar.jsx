import "./MenuBar.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";

const MenuBar = () => {
  const [showAnimatedMenu, setShowAnimatedMenu] = useState(false);
  const [showAnimatedMenuContent, setShowAnimatedMenuContent] = useState(false);

  const toggleNavMenu = () => {
    setShowAnimatedMenu(!showAnimatedMenu);
    setShowAnimatedMenuContent(true);
  };

  return (
    <div class="menu__bar-wrapper">
      <div
        className={`animated-menu-${showAnimatedMenu ? "active" : "disactive"}`}
      >
        {showAnimatedMenuContent && (
          <ul>
            <Link to="/projects"><li>My projects</li></Link>
            <Link to="/bio"><li>Bio</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
            <Link to="/skills"><li>Skills</li></Link>
          </ul>
        )}
      </div>
      <div class="second__phase-menu">
        <div
          onClick={toggleNavMenu}
          class={`hamburger-menu ${showAnimatedMenu ? "open" : "close"}`}
        >
          <div
            class={`hamburger-1 ${
              showAnimatedMenu ? "hamburger-1-open" : "hamburger-1-close"
            }`}
          ></div>
          <div
            class={`hamburger-2 ${
              showAnimatedMenu ? "hamburger-2-open" : "hamburger-2-close"
            }`}
          ></div>
          <div
            class={`hamburger-3 ${
              showAnimatedMenu ? "hamburger-3-open" : "hamburger-3-close"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
