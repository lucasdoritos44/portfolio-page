import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";

import FbLogo from "../assets/facebook.ico";
import GithubLogo from "../assets/github.png";
import LinkedinLogo from "../assets/linkedin.ico";
import TwitterLogo from "../assets/twitter.ico";

import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";

const MainPage = () => {
  const [hideWelcome, setHideWelcome] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [showSecondPhase, setShowSecondPhase] = useState(false);
  const [showAnimatedMenu, setShowAnimatedMenu] = useState(false);
  const [showAnimatedMenuContent, setShowAnimatedMenuContent] = useState(false);
  const [keyAnimation, setKeyAnimation] = useState('')

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

  const toggleNavMenu = () => {
    setShowAnimatedMenu(!showAnimatedMenu);
    setShowAnimatedMenuContent(true);
  };

  document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
      setKeyAnimation('up')
    }
    else if (e.keyCode == '40') {
      setKeyAnimation('down')
    }
    else if (e.keyCode == '37') {
      setKeyAnimation('left')
    }
    else if (e.keyCode == '39') {
      setKeyAnimation('right')
    }
}

console.log(keyAnimation)

  return (
    <div class="mainpage__wrapper">
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
            <div
              className={`animated-menu-${
                showAnimatedMenu ? "active" : "disactive"
              }`}
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
            <div class="second__phase">
              <div class="second__phase-rect">
                <div class="second__phase-rect_p">
                  <p class="">Select the arrow to go to:</p>
                </div>
                <p class="arrow__up-p">Bio</p>
                <AiOutlineArrowUp class={`arrow__up ${keyAnimation === 'up' ? 'pressKey' : ''}`} />
                <p class="arrow__down-p">Contact</p>
                <AiOutlineArrowDown class={`arrow__down ${keyAnimation === 'down' ? 'pressKey' : ''}`} />
                <p class="arrow__left-p">Projects</p>
                <AiOutlineArrowLeft class={`arrow__left ${keyAnimation === 'left' ? 'pressKey' : ''}`} />
                <p class="arrow__right-p">123</p>
                <AiOutlineArrowRight class={`arrow__right ${keyAnimation === 'right' ? 'pressKey' : ''}`} />
              </div>
              <div class="second__phase-menu">
                <div onClick={toggleNavMenu} class="hamburger-menu">
                  <div class="hamburger-1"></div>
                  <div class="hamburger-2"></div>
                  <div class="hamburger-3"></div>
                </div>
              </div>
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
