import React, { useState } from "react";
import MenuBar from "../components/MenuBar";
import ArrowsNavigation from "../components/ArrowsNavigation";

import "./Projects.css";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { useNavigate } from "react-router-dom";
import { EffectCube, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import LoadingCounter from "../components/LoadingCounter";
import {projects} from '../data/ProjectsData'
import Project from "../components/Project";

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
        navigate("/contact");
      }, 2000);
    } else if (e.keyCode == "39") {
      setKeyAnimation("right");
      setTimeout(() => {
        navigate("/skills");
      }, 2000);
    }
  }


  return (
    <div class="contact__wrapper3">
      <div class="cover__animation3" />
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {projects.map((project) => (
            <Project name={project.name} link={project.link} video={project.video} description={project.description} dependencies={project.dependencies}/>
          ))}
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
      <div class={`${keyAnimation === "up" ? "cover__up" : ""}`} />
      <div class={`${keyAnimation === "down" ? "cover__down" : ""}`} />
      <div class={`${keyAnimation === "left" ? "cover__left-fixed" : ""}`} />
      <div class={`${keyAnimation === "right" ? "cover__right" : ""}`} />
      {keyAnimation && <LoadingCounter side={keyAnimation} class="counter" />}
      <MenuBar />
      <ArrowsNavigation
        keyAnimation={keyAnimation}
        upArrow="Bio"
        downArrow="Back"
        leftArrow="Contact"
        rightArrow="Skills"
      />
    
    </div>
  );
};

export default Contact;
