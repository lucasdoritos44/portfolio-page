import React, { useState } from "react";
import "./Slider.css";
import Slide from "./Slide";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

import { projects } from "../data/ProjectsData";


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
      if(currentSlide > 0){
        setCurrentSlide(currentSlide - 1)
      } else{
        setCurrentSlide(projects.length - 1)
      }
  }

  const nextSlide = () => {
    if(currentSlide < projects.length - 1){
      setCurrentSlide(currentSlide + 1)
    } else{
      setCurrentSlide(0)
    }
  }

  console.log(projects)
  return (
    <div className="slider__wrapper">
      <ArrowBackIosRoundedIcon onClick={prevSlide}className="slider__left-arrow"/>
      <p className="slider__left-arrow_p">Go to previous project</p>
     <ArrowForwardIosRoundedIcon onClick={nextSlide}className="slider__right-arrow"/>
     <p className="slider__right-arrow_p">Go to next project</p>
     {projects.map((project, index) => <Slide         
      currentSlide={currentSlide === index ? '' : 'display-n'}
      key={project.id} 
      name={project.name}
      video={project.video}
      description={project.description}
      tools={project.tools}
      link={project.link}
      githubLink={project.link__github}
      />)}
      </div>
  );
};

export default Slider;
