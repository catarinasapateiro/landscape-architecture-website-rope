import React, { useState } from "react";

export const Image = ({ title, smallImage, onClick }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {" "}
        <a title={title} data-lightbox-gallery="gallery1">
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <img
            src={smallImage}
            className="img-responsive"
            alt={title}
            onClick={onClick}
          />{" "}
        </a>{" "}
      </div>
    </div>
  );
};
