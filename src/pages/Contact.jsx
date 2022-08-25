import React, { useState, useRef } from "react";
import MenuBar from "../components/MenuBar";
import ArrowsNavigation from "../components/ArrowsNavigation";
import emailjs from '@emailjs/browser';
import CheckIcon from '@mui/icons-material/Check';

import "./Contact.css";

import { useNavigate } from "react-router-dom";

import LoadingCounter from "../components/LoadingCounter";

const Contact = () => {
  const [keyAnimation, setKeyAnimation] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  let navigate = useNavigate();
  const form = useRef()

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
        navigate("/skills");
      }, 2000);
    }
  }


  const formHandler = (e) => {
    e.preventDefault();

    setButtonClicked(true)

    emailjs.sendForm('gmail44', 'template_g2w2k8s', form.current, 'IibAoOSaOIzPRpO8G')
    .then((result) => {
        console.log(result.text);
        console.log('message sent')
    }, (error) => {
        console.log(error.text);
    });

    console.log('formSubmitted')
  };



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
        rightArrow="Skills"
      />
      <h2 class="contact__form-h2">Get in touch</h2>
      <form onSubmit={formHandler} ref={form}>
        <div className="form__name-inputs">
          <div class="input__group names">
            <input type="text" name="first__name" required/>
            <label>First Name</label>
          </div>
          <div class="input__group names">
            <input type="text" name="second__name" required/>
            <label>Second Name</label>
            
          </div>
          
        </div>
        <div class="input__group">
          <input type="text" name="email" required/>
          <label>Email</label>
        </div>
        <div class="input__group">
          <textarea id="message" rows="8" name="message" required/>
          <label>Message</label>
        </div>
        <button type="submit" class={`animated__button ${buttonClicked ? 'button__clicked' : ''}`}>{buttonClicked ? `Message Sent!` : 'Submit'}
       {buttonClicked ? <CheckIcon color="white" class="check__icon"/> : ''}
        </button>
      </form>
    </div>
  );
};

export default Contact;
