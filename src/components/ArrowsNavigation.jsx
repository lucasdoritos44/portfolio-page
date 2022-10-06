import React, {useState} from "react";
import './ArrowsNavigation.css'

import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";

const ArrowsNavigation = ({keyAnimation, upArrow, downArrow, leftArrow, rightArrow}) => {


  return (
    <div class="second__phase">
      <div class="second__phase-rect">
        <div class="second__phase-rect_p">
          <p>Press an arrow to go to:</p>
        </div>
        <div className="arrows">
          <p class="arrow__up-p">{upArrow}</p>
          <AiOutlineArrowUp
            class={`arrow__up ${keyAnimation === "up" ? "pressKey" : ""}`}
          />
          <p class="arrow__down-p">{downArrow}</p>
          <AiOutlineArrowDown
            class={`arrow__down ${keyAnimation === "down" ? "pressKey" : ""}`}
          />
          <p class="arrow__left-p">{leftArrow}</p>
          <AiOutlineArrowLeft
            class={`arrow__left ${keyAnimation === "left" ? "pressKey" : ""}`}
          />
          <p class="arrow__right-p">{rightArrow}</p>
          <AiOutlineArrowRight
            class={`arrow__right ${keyAnimation === "right" ? "pressKey" : ""}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ArrowsNavigation;
