import React, { useEffect, useState } from "react";
import MenuBar from "../components/MenuBar";
import ArrowsNavigation from "../components/ArrowsNavigation";

import "./Bio.css";

import { useNavigate } from "react-router-dom";

import LoadingCounter from "../components/LoadingCounter";

const Bio = () => {
  const [keyAnimation, setKeyAnimation] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.keyCode == "38") {
        setKeyAnimation("up");
        setTimeout(() => {
          navigate("/main");
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
    })
  }, [keyAnimation])

  const setAnimationMain = () => {
    setKeyAnimation("up");
    setTimeout(() => {
      navigate("/main");
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
    <div class="contact__wrapper4">
      <div class="cover__animation4" />
      <div class={`${keyAnimation === "up" ? "cover__up-fixed" : ""}`} />
      <div class={`${keyAnimation === "down" ? "cover__down" : ""}`} />
      <div class={`${keyAnimation === "left" ? "cover__left" : ""}`} />
      <div class={`${keyAnimation === "right" ? "cover__right" : ""}`} />
      {keyAnimation && <LoadingCounter side={keyAnimation} class="counter" />}
      <MenuBar setAnimationContact={setAnimationContact} setAnimationMain={setAnimationMain} setAnimationProjects={setAnimationProjects}
            setAnimationSkills={setAnimationSkills}/>
      <ArrowsNavigation
        keyAnimation={keyAnimation}
        upArrow="Back"
        downArrow="Contact"
        leftArrow="Projects"
        rightArrow="Skills"
      />
      <div class="introduction">
        <h2>About me</h2>
        <div class="introduction__position">
          <h3>
            My name is Łukasz and I'm 25 years old. I'm a self-taught junior web
            developer who currently lives in Łomża, Poland. I graduated from IT
            High School, but back then I didn't think of becoming a
            programmer...{" "}
          </h3>{" "}
          <h4>
            My previous jobs developed my time management, problem-solving and
            communication skills, but since they were not related to my
            interests, I decided to start coding in 2020. I was experimenting
            with many programming languages trying to find what suits me and
            finally chose front-end. For me, coding is about learning new things
            and overcoming everyday challenges, which gives me great
            satisfaction.{" "}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Bio;
