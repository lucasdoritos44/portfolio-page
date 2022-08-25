import React, { useState } from "react";
import "./Project.css";
import CloseIcon from "@mui/icons-material/Close";

const Project = ({ name, dependencies, description, video, link }) => {
  const [modalShown, setModalShown] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const closeButtonHandler = () => {
    setModalShown(false)
    setShowDescription(false)
    console.log(modalShown, showDescription)
  }

  return (
    <div className="project__wrapper">
      {modalShown && <div className="project__wrapper-modal"></div>}
      <h3>{name}</h3>
      {showDescription && (
        <div className="project__desc-dep">
          <CloseIcon className="close__icon" onClick={closeButtonHandler}/>
          <p className="project__desc">{description}</p>
          <p style={{ marginTop: "3rem" }}>{name} is made with:</p>
          <p className="project__dep">{dependencies}</p>
          <a href={link} target="_blank" rel="norefferer" className="project__link">
            Click here to see a full project
          </a>
        </div>
      )}
      <video
        width="100%"
        src={video}
        type="video/mp4"
        loop
        autoPlay
        className="project__video"
      />
      {!showDescription && (
        <p
          onMouseEnter={() => setModalShown(true)}
          onMouseLeave={() => setModalShown(false)}
          onClick={() => setShowDescription(true)}
          className="project__desc-click"
        >
          Click to see description
        </p>
      )}
    </div>
  );
};

export default Project;
