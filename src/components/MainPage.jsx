import React, { useState, useEffect } from "react";
import "./MainPage.css";

const MainPage = () => {
  const [hideWelcome, setHideWelcome] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [showSecondPhase, setShowSecondPhase] = useState(false)

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
        {showIntro && 
          <div class="intro__wrapper">
           <div class='second__phase'>
            <div class='second__phase-rect'>
            </div>
            <div class='second__phase-menu'>
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
                <h3>Looking to land a first job <p class="eyesEmoji">👀</p></h3>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default MainPage;
