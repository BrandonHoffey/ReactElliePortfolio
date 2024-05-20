import React, { useState } from "react";
import MainImage1 from "../../assets/images/Portfolio/Copy of DSC07645.jpg";

const MainBody = () => {
  const [isHovered, setIsHovered] = useState(false);

  const imageStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "420px",
    height: "240px",
    borderRadius: "10px",
    zIndex: "-1",
    display: isHovered ? "block" : "none",
  };

  const textStyle = {
    textAlign: "center",
  };

  return (
    <div className="navButton" style={textStyle}>
      <h3
        id="photographyButton"
        className="navButton"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Photography
      </h3>
      <img
        src={MainImage1}
        style={imageStyle}
        alt="PhotographyImage"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>
  );
};

export default MainBody;
