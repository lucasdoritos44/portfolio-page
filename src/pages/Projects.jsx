import React, { useEffect, useState } from "react";
import MenuBar from "../components/MenuBar";
import ArrowsNavigation from "../components/ArrowsNavigation";
import useMediaQuery from "@mui/material/useMediaQuery";

import "./Projects.css";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { useNavigate } from "react-router-dom";

import LoadingCounter from "../components/LoadingCounter";

import Slider from '../components/Slider';

const Projects = () => {
  const [keyAnimation, setKeyAnimation] = useState("");

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
          navigate("/main");
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
  const setAnimationMain = () => {
    setKeyAnimation("left");
    setTimeout(() => {
      navigate("/main");
    }, 1500);
  };

  const responsive = useMediaQuery("(min-width:1100px)");

  return (
    <div class="contact__wrapper3">
      <div class="cover__animation3" />
      <Slider />
      <div class={`${keyAnimation === "up" ? "cover__up" : ""}`} />
      <div class={`${keyAnimation === "down" ? "cover__down" : ""}`} />
      <div class={`${keyAnimation === "left" ? "cover__left-fixed" : ""}`} />
      <div class={`${keyAnimation === "right" ? "cover__right" : ""}`} />
      {keyAnimation && <LoadingCounter side={keyAnimation} class="counter" />}
      <MenuBar
        setAnimationBio={setAnimationBio}
        setAnimationContact={setAnimationContact}
        setAnimationMain={setAnimationMain}
        setAnimationSkills={setAnimationSkills}
      />
      {responsive && (
        <ArrowsNavigation
          keyAnimation={keyAnimation}
          upArrow="Bio"
          downArrow="Contact"
          leftArrow="Back"
          rightArrow="Skills"
        />
      )}
    </div>
  );
};

export default Projects;
