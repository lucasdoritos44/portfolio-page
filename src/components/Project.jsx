import React, { useState } from "react";
import "./Project.css";
import CloseIcon from "@mui/icons-material/Close";


const Project = ({
  name,
  dependencies,
  description,
  video,
  img,
  link,
  link__github,
}) => {
  const [modalShown, setModalShown] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const closeButtonHandler = () => {
    setModalShown(false);
    setShowDescription(false);
    console.log(modalShown, showDescription);
  };

  return (
    <div className="project__wrapper">
      {modalShown && <div className="project__wrapper-modal"></div>}
      <h3>{name}</h3>
      {!showDescription && (
        <p
          onMouseEnter={() => setModalShown(true)}
          onMouseLeave={() => setModalShown(false)}
          onClick={() => setShowDescription(true)}
          className="project__desc-click"
        >
          {link ? 'Click to see description' : 'Coming soon'}
        </p>
      )}
      {showDescription && (
        <div className="project__desc-dep">
          <CloseIcon className="close__icon" onClick={closeButtonHandler} />
          <p className="project__desc">{description}</p>
          <p style={{ marginTop: "3rem" }}>{name} is made with:</p>
          <p className="project__dep">{dependencies}</p>
          <div className="project__links">
            <a
              href={link}
              target="_blank"
              rel="norefferer"
              className="project__link"
            >
              Click here to see a full project
            </a>
            <a
              href={link__github}
              target="_blank"
              rel="norefferer"
              className="project__link"
            >
              Click here to see the code
            </a>
          </div>
        </div>
      )}
      {video ? <video
        width="100%"
        src={video}
        type="video/mp4"
        loop
        autoPlay
        muted
        className="project__video"
      /> : <img src={img} />}
    </div>
  );
};

export default Project;
