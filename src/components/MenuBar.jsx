import "./MenuBar.css";

import React, { useState } from "react";

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
            <li>My projects</li>
            <li>Bio</li>
            <li>Contact</li>
            <li>123</li>
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
