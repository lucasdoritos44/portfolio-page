import React, { useState } from "react";
import MenuBar from "../components/MenuBar";
import ArrowsNavigation from "../components/ArrowsNavigation";
import "./Contact.css";

import { useNavigate } from "react-router-dom";

import LoadingCounter from "../components/LoadingCounter";

const Contact = () => {
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
        navigate("/main");
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
    <div class="contact__wrapper">
      <div class="cover__animation" />
      <div class={`${keyAnimation === "up" ? "cover__up" : ""}`} />
      <div class={`${keyAnimation === "down" ? "cover__down" : ""}`} />
      <div class={`${keyAnimation === "left" ? "cover__left" : ""}`} />
      <div class={`${keyAnimation === "right" ? "cover__right" : ""}`} />
      {keyAnimation && <LoadingCounter side={keyAnimation} class="counter" />}
      <MenuBar />
      <ArrowsNavigation
        keyAnimation={keyAnimation}
        upArrow="Bio"
        downArrow="Back"
        leftArrow="Projects"
        rightArrow="123"
      />
      <div class="contact__form">
        <form>
          <div class="form__name-inputs">
            <div class="input__group">
              <label htmlFor="first__name">First Name</label>
              <input id="first__name" />
            </div>
            <div class="input__group">
              <label html="surname">Surname</label>
              <input id="surname" />
            </div>
          </div>
          <div className="input__group">
          <label htmlFor="email">Email</label>
          <input id="email" />
          </div>
          <div className="input__group">
          <label htmlFor="message">Message</label>
          <input id="message" class="input__message" />
          </div>   
        </form>
      </div>
    </div>
  );
};

export default Contact;
