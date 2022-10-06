import "./MenuBar.css";

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


const MenuBar = ({ setAnimationBio,setAnimationProjects, setAnimationSkills, setAnimationContact,setAnimationMain }) => {
  const [showAnimatedMenu, setShowAnimatedMenu] = useState(false);
  const [showAnimatedMenuContent, setShowAnimatedMenuContent] = useState(false);

  const location = useLocation()
  const {pathname} = location

  console.log(pathname)

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        setShowAnimatedMenu(true);
        setShowAnimatedMenuContent(true);
      }
      if (e.keyCode === 27) {
        setShowAnimatedMenu(false);
      }
    });
  }, [showAnimatedMenu]);

  const toggleNavMenu = () => {
    setShowAnimatedMenu(!showAnimatedMenu);
    setShowAnimatedMenuContent(true);
  };

  const navBarIds = {
    projects: '/projects',
    bio: '/bio',
    contact: '/contact',
    skills: '/skills',
    main: '/main'
  }
  return (
    <nav class="menu__bar-wrapper">
      <div
        className={`animated-menu-${showAnimatedMenu ? "active" : "disactive"}`}
      >
        {showAnimatedMenuContent && (
          <ul>
              {pathname !== navBarIds.projects ? <li tabIndex="5" id={navBarIds.projects} onClick={setAnimationProjects}>My projects</li> : ''}
              {pathname !== navBarIds.bio ? <li tabIndex="5" id={navBarIds.bio} onClick={setAnimationBio}>Bio</li> : ''}
              {pathname !== navBarIds.contact ? <li tabIndex="5" id={navBarIds.contact} onClick={setAnimationContact}>Contact</li> : ''}
              {pathname !== navBarIds.skills ? <li tabIndex="5" id={navBarIds.skills} onClick={setAnimationSkills}>Skills</li> : ''}
              {pathname !== navBarIds.main && pathname!== '/' ? <li tabIndex="5" id={navBarIds.main} onClick={setAnimationMain}>Back</li> : ''}
          </ul>
        )}
      </div>
      <div class="second__phase-menu">
        <div
          className={`${
            showAnimatedMenu ? "show__animated_menu" : "hide__animated_menu"
          } `}
        ></div>
        <button
          onClick={toggleNavMenu}
          class={`hamburger-menu ${showAnimatedMenu ? "open" : "close"}`}
          aria-haspopup="true"
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
        </button>
      </div>
    </nav>
  );
};

export default MenuBar;
