import React, { useEffect, useState } from "react";
import MenuBar from "../components/MenuBar";
import ArrowsNavigation from "../components/ArrowsNavigation";
import DependenciesBlock from "../components/DependenciesBlock";

import "./Skills.css";

import { useNavigate } from "react-router-dom";

import LoadingCounter from "../components/LoadingCounter";

import HtmlLogo from "../assets/html-logo.svg";
import CssLogo from "../assets/css-logo.svg";
import JsLogo from "../assets/js-logo.svg";
import ReactLogo from "../assets/react-logo.svg";
import MaterialuiLogo from "../assets/materialui-logo.svg";
import NextJSLogo from '../assets/nextjs-logo.svg'
import TypescriptLogo from '../assets/typescript-logo.svg'
import jQueryLogo from '../assets/jqueryLogo.svg'

const Skills = () => {
  const [keyAnimation, setKeyAnimation] = useState("");

  const skills = [
    { name: "HTML 5", img: HtmlLogo },
    {
      name: "CSS 3",
      img: CssLogo,

    },
    {
      name: "Javascript",
      img: JsLogo,

    },
    {
      name: "React",
      img: ReactLogo,

    },
    {
      name: "Material UI",
      img: MaterialuiLogo,

    },
    {
      name:'jQuery',
      img:jQueryLogo
    },
    {
      name:"Next JS",
      img: NextJSLogo,
      av: true
    },
    {
      name:"Typescript",
      img: TypescriptLogo,
      av: true
    },
   
  ];

  let navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
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
          navigate("/main");
        }, 1500);
      }
    })
  }, [keyAnimation])

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
  const setAnimationMain = () => {
    setKeyAnimation("right");
    setTimeout(() => {
      navigate("/main");
    }, 1500);
  };
  const setAnimationProjects = () => {
    setKeyAnimation("left");
    setTimeout(() => {
      navigate("/projects");
    }, 1500);
  };

  return (
    <div class="contact__wrapper5">
      <div class="cover__animation5" />
      <div class={`${keyAnimation === "up" ? "cover__up" : ""}`} />
      <div class={`${keyAnimation === "down" ? "cover__down" : ""}`} />
      <div class={`${keyAnimation === "left" ? "cover__left" : ""}`} />
      <div class={`${keyAnimation === "right" ? "cover__right-fixed" : ""}`} />
      {keyAnimation && <LoadingCounter side={keyAnimation} class="counter" />}
      <MenuBar setAnimationBio={setAnimationBio} setAnimationContact={setAnimationContact} setAnimationMain={setAnimationMain}
      setAnimationProjects={setAnimationProjects}/>
      <ArrowsNavigation
        keyAnimation={keyAnimation}
        upArrow="Bio"
        downArrow="Contact"
        leftArrow="Projects"
        rightArrow="Back"
      />
      <div class="skills__wrapper">
        <h2>What I use</h2>
       
        <div class="skills">
          {skills.map((skill) => (
            <DependenciesBlock title={skill.name} img={skill.img} notAvailable={skill.av}/>
          ))} 
        </div>
      </div>
    </div>
  );
};

export default Skills;
