import React, { useState } from "react";
import "./Slide.css";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const Slide = ({
  currentSlide,
  name,
  video,
  description,
  tools,
  link,
  githubLink,
}) => {
  const [overlay, setOverlay] = useState(false);
  const [overlayClick, setOverlayClick] = useState(false);

  const closeOverlay = () => {
    setOverlayClick(false);
    setOverlay(false);
  };

  return (
    <div className={`slide__wrapper + ${currentSlide}`}>
      {overlay || overlayClick ? <div className="slide__overlay" /> : ""}
      <h2 className="slide__title">{name}</h2>
      <video
        className="slide__video"
        src={video}
        type="video/mp4"
        loop
        muted
        autoPlay
      />
      {overlayClick ? (
        ""
      ) : (
        <button
          className="slide__button"
          onMouseEnter={() => setOverlay(true)}
          onMouseLeave={() => setOverlay(false)}
          onClick={() => setOverlayClick(true)}
        >
          {link ? "Click to see description" : "Comming Soon"}
        </button>
      )}
      {overlayClick && (
        <div className="slide__description">
          
          <CloseRoundedIcon className="close__icon" onClick={closeOverlay} />
          <p className="slide__desc">{description}</p>
          <h3>{name} is made with:</h3>
          <p className="slide__dep">{tools}</p>
          <div className="slide__links">
            <a href={link}>Click here to see a full project</a>
            <a href={githubLink}>Click here to see a github code</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slide;
