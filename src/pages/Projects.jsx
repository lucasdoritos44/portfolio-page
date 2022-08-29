import React, { useState } from "react";
import MenuBar from "../components/MenuBar";
import ArrowsNavigation from "../components/ArrowsNavigation";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

import "./Projects.css";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { useNavigate } from "react-router-dom";
import { EffectCube, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import LoadingCounter from "../components/LoadingCounter";
import { projects } from "../data/ProjectsData";
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
        {projects.map((project, i) => (
          <SwiperSlide>
            {i === 0 ? (
              <KeyboardDoubleArrowRightIcon
                size="large"
                className="right__arrow"
              />
            ) : (
              ""
            )}
            {i > 0 && i < 3 ? (
              <div>
                <KeyboardDoubleArrowLeftIcon className="left__arrow" />{" "}
                <KeyboardDoubleArrowRightIcon className="right__arrow" />
              </div>
            ) : (
              ""
            )}
            {i === 3 ? (
              <KeyboardDoubleArrowLeftIcon className="left__arrow" />
            ) : (
              ""
            )}
            <Project
              name={project.name}
              link={project.link}
              link__github={project.link__github}
              video={project.video}
              description={project.description}
              dependencies={project.dependencies}
            />
          </SwiperSlide>
        ))}
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
