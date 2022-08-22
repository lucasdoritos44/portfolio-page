import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./MainPage.css";

import FbLogo from "../assets/facebook.ico";
import GithubLogo from "../assets/github.png";
import LinkedinLogo from "../assets/linkedin.ico";
import TwitterLogo from "../assets/twitter.ico";


import LoadingCounter from "../components/LoadingCounter";
import MenuBar from "../components/MenuBar";
import ArrowsNavigation from "../components/ArrowsNavigation";

const MainPage = () => {
  const [hideWelcome, setHideWelcome] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [showSecondPhase, setShowSecondPhase] = useState(false);
  const [keyAnimation, setKeyAnimation] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setHideWelcome(true);
    }, 4000);
    setTimeout(() => {
      setShowIntro(true);
    }, 5000);
    setTimeout(() => {
      setShowSecondPhase(true);
    }, 7000);
  }, [hideWelcome, showIntro, showSecondPhase]);

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
        navigate("/idk");
      }, 2000);
    }
  }


  return (
    <div class="mainpage__wrapper">
      <div class={`${keyAnimation === "up" ? "cover__up" : ""}`} />
      <div class={`${keyAnimation === "down" ? "cover__down" : ""}`} />
      <div class={`${keyAnimation === "left" ? "cover__left" : ""}`} />
      <div class={`${keyAnimation === "right" ? "cover__right" : ""}`} />
      {keyAnimation && <LoadingCounter side={keyAnimation} class="counter" />}
      <div class="mainpage__welcome">
        {!hideWelcome && (
          <div class="loader">
            <h2>Hello!</h2>
          </div>
        )}
        {hideWelcome && (
          <div class="cursor__animation">
            <h2>Hello!</h2>
          </div>
        )}
        {showIntro && (
          <div class="intro__wrapper">
            <MenuBar />
            <div class="second__phase">
              <ArrowsNavigation keyAnimation={keyAnimation} upArrow="Bio" downArrow="Contact" leftArrow="Projects" rightArrow="123"/>
              <div class="second__phase-link-bar">
                <div className="second__phase-link-bar_contact">
                  <h2>Contact me</h2>
                </div>
                <div className="second__phase-link-bar_icons">
                  <img src={FbLogo} alt="fb-logo" class="icon" />
                  <img src={GithubLogo} alt="github-logo" class="icon" />
                  <img src={LinkedinLogo} alt="linkedin-logo" class="icon" />
                  <img src={TwitterLogo} alt="twitter-logo" class="icon" />
                </div>
              </div>
            </div>
            <div class="intro__first-line">
              <div class="intro__first-line-position">
                <h3>My name is Łukasz and I'm a</h3>
              </div>
            </div>
            <div className="intro__second-line">
              <div class="intro__second-line-position">
                <h2>Junior front-end developer</h2>
              </div>
            </div>
            <div className="intro__third-line">
              <div class="intro__third-line-position">
                <h3>
                  Looking to land a first job <p class="eyesEmoji">👀</p>
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
