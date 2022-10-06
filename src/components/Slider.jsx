import React, { useState } from "react";
import "./Slider.css";
import Slide from "./Slide";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Pagination } from "swiper";

import { projects } from "../data/ProjectsData";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const mobile = useMediaQuery("(max-width:600px)");

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(projects.length - 1);
    }
  };

  const nextSlide = () => {
    if (currentSlide < projects.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  console.log(currentSlide);
  return (
    <div className="slider__wrapper">
      && (
        <div>
          <ArrowBackIosRoundedIcon
            onClick={prevSlide}
            className="slider__left-arrow"
          />
          <p className="slider__left-arrow_p">Go to previous project</p>
          <ArrowForwardIosRoundedIcon
            onClick={nextSlide}
            className="slider__right-arrow"
          />
          <p className="slider__right-arrow_p">Go to next project</p>
          <div className="dots">
            {Array.from({ length: projects.length }).map((item, index) => (
              <div
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={index === currentSlide ? "dot-active" : "dot"}
              ></div>
            ))}
          </div>
          {projects.map((project, index) => (
            <Slide
              currentSlide={currentSlide === index ? "" : "display-n"}
              key={project.id}
              name={project.name}
              video={project.video}
              description={project.description}
              tools={project.tools}
              link={project.link}
              githubLink={project.link__github}
            />
          ))}
        </div>
      )
    </div>
  );
};

export default Slider;
