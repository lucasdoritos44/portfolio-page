import React, { useState, useRef, useEffect, useReducer} from "react";
import MenuBar from "../components/MenuBar";
import ArrowsNavigation from "../components/ArrowsNavigation";
import emailjs from "@emailjs/browser";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";

import "./Contact.css";

import LoadingCounter from "../components/LoadingCounter";


const Contact = () => {
  const [keyAnimation, setKeyAnimation] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false)
  const [buttonClickMessage, setButtonClickMessage] = useState('')

  const [enteredName, setEnteredName] = useState('');
  const [nameIsValid, setNameIsValid] = useState();
  const [enteredLastName, setEnteredLastName] = useState('')
  const [lastNameIsValid, setLastNameIsValid] = useState()
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState()
  const [enteredMessage, setEnteredMessage] = useState('')
  const [enteredMessageIsValid, setEnteredMessageIsValid] = useState()


  const [formIsValid, setFormIsValid] = useState(false)

  let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

  
  let navigate = useNavigate();

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(enteredName.trim().length > 1 && enteredLastName.trim().length > 1 && regex.test(enteredEmail) && enteredMessage.length > 1)
    }, 500)

    return () => {
      clearTimeout(identifier)
    }
  })



  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const validateNameHandler = () => {
    setNameIsValid(enteredName.trim().length > 1);
  };

  const lastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value)
  }

  const validateLastNameHandler = () => {
    setLastNameIsValid(enteredLastName.trim().length > 1)
  }

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value)

    console.log(enteredEmail)
  }


  const validateEmailHandler = () => {
    setEnteredEmailIsValid(regex.test(enteredEmail))
  }

  const messageChangeHandler = (event) => {
    setEnteredMessage(event.target.value)
  }

  const validateMessageHandler = () => {
    setEnteredMessageIsValid(enteredMessage.length > 1)
  }

  const form = useRef();
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
    setButtonClicked(true);

    emailjs
      .sendForm(
        "gmail44",
        "template_g2w2k8s",
        form.current,
        "IibAoOSaOIzPRpO8G"
      )
      .then(
        (result) => {
          console.log(result.text);
          setButtonClickMessage("Message Sent!")
        },
        (error) => {
          setButtonClickMessage("Something went wrong :(")
        }
      );

    setEnteredName('')
    setEnteredLastName('')
    setEnteredEmail('')
    setEnteredMessage('')

    console.log("formSubmitted");
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
      {}
      <h2 class="contact__form-h2">Get in touch</h2>
      <form onSubmit={formHandler} ref={form}>
        <div className='form__name-inputs'>
          <div class={`input__group names ${nameIsValid === false ? 'invalid' : ''}`} >
            <input
              type="text"
              name="first__name" 
              required
              onChange={nameChangeHandler}
              onBlur={validateNameHandler}
              value={enteredName}
            />
            <label>First Name</label>
          </div>
          <div class={`input__group names ${lastNameIsValid === false ? 'invalid' : ''}`}>
            <input 
            type="text" 
            name="second__name"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={validateLastNameHandler}
             required />
            <label>Last Name</label>
          </div>
        </div>
        <div
          class={`input__group ${enteredEmailIsValid === false ? 'invalid' : ''}`}
        >
          <input
            type="text"
            name="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
            required
          />
          <label>Email</label>
        </div>
        <div class='input__group'>
          <textarea 
          className={enteredMessageIsValid === false ? 'invalid__message' : ''}
          id="message" 
          onChange={messageChangeHandler}
          onBlur={validateMessageHandler}
          value={enteredMessage}
          rows="8" 
          name="message"
           required />
          <label>Message</label>
        </div>
        <button
          type="submit"
          class={`animated__button ${buttonClicked ? "button__clicked" : ""}`}
          disabled={!formIsValid}
        >
          {buttonClicked ? buttonClickMessage : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
