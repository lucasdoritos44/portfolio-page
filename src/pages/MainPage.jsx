import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./MainPage.css";

import GithubLogo from "../assets/github.png";
import LinkedinLogo from "../assets/linkedin.ico";
import telegramLogo from "../assets/telegram-logo.ico";

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
    }, 3000);
    setTimeout(() => {
      setShowIntro(true);
    }, 3500);
    setTimeout(() => {
      setShowSecondPhase(true);
    }, 4000);
  }, [hideWelcome, showIntro, showSecondPhase]);

  let navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == "38") {
        setKeyAnimation("up");
          setTimeout(() => {
            navigate("/bio");
          }, 1500);
      } else if (e.keyCode == "40") {
        setKeyAnimation("down");
        setTimeout(() => {
          navigate("/contact");
        }, 1500);
      } else if (e.keyCode == "37") {
        setKeyAnimation("left");
        setTimeout(() => {
          navigate("/projects");
        }, 1500);
      } else if (e.keyCode == "39") {
        setKeyAnimation("right");
        setTimeout(() => {
          navigate("/skills");
        }, 1500);
      }
    });
  }, [keyAnimation]);

  const setAnimationBio = () => {
    setKeyAnimation("up");
    setTimeout(() => {
      navigate("/bio");
    }, 1500);
  };

  const setAnimationContact = () => {
    setKeyAnimation("down");
    setTimeout(() => {
      navigate("/contact");
    }, 1500);
  };
  const setAnimationSkills = () => {
    setKeyAnimation("right");
    setTimeout(() => {
      navigate("/skills");
    }, 1500);
  };
  const setAnimationProjects = () => {
    setKeyAnimation("left");
    setTimeout(() => {
      navigate("/projects");
    }, 1500);
  };

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
            <MenuBar setAnimationBio={setAnimationBio} setAnimationContact={setAnimationContact} setAnimationProjects={setAnimationProjects}
            setAnimationSkills={setAnimationSkills}/>
            <div class="second__phase">
              <ArrowsNavigation
                keyAnimation={keyAnimation}
                upArrow="Bio"
                downArrow="Contact"
                leftArrow="Projects"
                rightArrow="Skills"
              />
              <div class="second__phase-link-bar">
                <div className="second__phase-link-bar_contact">
                  <Link to="contact">
                    <h2>Contact me</h2>
                  </Link>
                </div>
                <div className="second__phase-link-bar_icons">
                  <a
                    href="https://github.com/lukaszjesionowski44"
                    target="_blank"
                    rel="norefferer"
                  >
                    <img src={GithubLogo} alt="github-logo" class="icon" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/%C5%82ukasz-jesionowski-56ba2324b/"
                    target="_blank"
                    rel="norefferer"
                  >
                    <img src={LinkedinLogo} alt="linkedin-logo" class="icon" />
                  </a>
                  <a
                    href="https://t.me/lucasdoritos44"
                    target="_blank"
                    rel="norefferer"
                  >
                    <img src={telegramLogo} alt="telegram-logo" class="icon" />
                  </a>
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
                <h2>Front-end developer</h2>
              </div>
            </div>
            <div className="intro__third-line">
              <div class="intro__third-line-position">
                <h3>
                  Let's build something &nbsp;<p>creative</p>&nbsp; together
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
