import React from "react";
import { X } from "lucide-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const PopUp = ({ project, onClose }) => {
  if (!project) return null;

  const Carousel = window.ReactResponsiveCarousel?.Carousel;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div
        className="popup-content swapped"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="popup-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="carousel-container">
          {Carousel ? (
            <Carousel showArrows={true} showThumbs={false} infiniteLoop>
              {project.images?.map((img, idx) => (
                <div key={idx}>
                  <img src={img} alt={`${project.title} ${idx}`} />
                </div>
              ))}
            </Carousel>
          ) : (
            <div>
              <img
                src={project.images?.[0] || project.smallImage}
                alt={project.title}
              />
            </div>
          )}
        </div>

        <div className="popup-info">
          <h2>{project.title}</h2>
          <p>{project.description || "No description available"}</p>
        </div>
      </div>
    </div>
  );
};
