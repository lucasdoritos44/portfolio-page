import React, { useState} from "react";

import { useNavigate, Link } from "react-router-dom";
import "./MainPage.css";

import FbLogo from "../assets/facebook.ico";
import GithubLogo from "../assets/github.png";
import LinkedinLogo from "../assets/linkedin.ico";
import telegramLogo from '../assets/telegram-logo.ico'


import LoadingCounter from "../components/LoadingCounter";
import MenuBar from "../components/MenuBar";
import ArrowsNavigation from "../components/ArrowsNavigation";

import './MainPage2.css'

const MainPage = () => {
  const [keyAnimation, setKeyAnimation] = useState("");

  let navigate = useNavigate();

  document.onkeydown = checkKey;

  function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == "38") {
      setKeyAnimation("up");
      setTimeout(() => {
        navigate("/bio");
      }, 2000);
    } else if (e.keyCode == "40") {
      setKeyAnimation("down");
      setTimeout(() => {
        navigate("/contact");
      }, 2000);
    } else if (e.keyCode == "37") {
      setKeyAnimation("left");
      setTimeout(() => {
        navigate("/projects");
      }, 2000);
    } else if (e.keyCode == "39") {
      setKeyAnimation("right");
      setTimeout(() => {
        navigate("/skills");
      }, 2000);
    }
  }


  return (
    <div class="mainpage__wrapper">
      <div class="cover__animation" />
      <div class={`${keyAnimation === "up" ? "cover__up" : ""}`} />
      <div class={`${keyAnimation === "down" ? "cover__down" : ""}`} />
      <div class={`${keyAnimation === "left" ? "cover__left" : ""}`} />
      <div class={`${keyAnimation === "right" ? "cover__right" : ""}`} />
      {keyAnimation && <LoadingCounter side={keyAnimation} class="counter" />}
      <div class="mainpage__welcome">
          <div class="intro__wrapper">
            <MenuBar />
            <div class="second__phase">
              <ArrowsNavigation 
              keyAnimation={keyAnimation} 
              upArrow="Bio" 
              downArrow="Contact" 
              leftArrow="Projects" 
              rightArrow="Skills"/>
              <div class="second__phase-link-bar2">
                <div className="second__phase-link-bar_contact2">
                  <Link to="../contact"><h2>Contact me</h2></Link>
                </div>
                <div className="second__phase-link-bar_icons">
                <a href='https://www.facebook.com/profile.php?id=100014593084077' target="_blank" rel="norefferer">
                 <img src={FbLogo} alt="fb-logo" class="icon"/>
                 </a>
                  <a href="https://github.com/lucasdoritos44" target="_blank" rel="norefferer">
                  <img src={GithubLogo} alt="github-logo" class="icon" />
                  </a>
                  <a href="https://www.linkedin.com/in/%C5%82ukasz-jesionowski-56ba2324b/" target="_blank" rel="norefferer"> 
                  <img src={LinkedinLogo} alt="linkedin-logo" class="icon" />
                  </a>
                  <a href="https://t.me/lucasdoritos44" target="_blank" rel="norefferer"> 
                  <img src={telegramLogo} alt="telegram-logo" class="icon" />
                  </a>
                </div>
              </div>
            </div>
            <div class="intro__first-line2">
              <div class="intro__first-line-position2">
                <h3>My name is Łukasz and I'm a</h3>
              </div>
            </div>
            <div className="intro__second-line2">
              <div class="intro__second-line-position2">
                <h2>Junior front-end developer</h2>
              </div>
            </div>
            <div className="intro__third-line2">
              <div class="intro__third-line-position2">
                <h3>
                Let's build something &nbsp;<p>creative</p>&nbsp; together
                </h3>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default MainPage;
