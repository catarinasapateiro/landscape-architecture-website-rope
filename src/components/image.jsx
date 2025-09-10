import React, { useState } from "react";

export const Image = ({ title, smallImage, onClick }) => {
  const handleClick = () => {
    onClick();
    console.log("clicked");
  };

  return (
    <div className="portfolio-item">
      <div className="hover-bg" onClick={handleClick}>
        {" "}
        <div className="hover-text">
          <h4>{title}</h4>
        </div>
        <img src={smallImage} className="img-responsive" alt={title} />{" "}
      </div>
    </div>
  );
};
