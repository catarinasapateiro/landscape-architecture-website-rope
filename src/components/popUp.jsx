import React from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const PopUp = ({ project, onClose }) => {
  if (!project) return null;

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
          <Carousel
            showArrows={true}
            showThumbs={false}
            infiniteLoop
            renderArrowPrev={(clickHandler, hasPrev) =>
              hasPrev && (
                <button
                  onClick={clickHandler}
                  className="custom-arrow custom-arrow-left"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={32} />
                </button>
              )
            }
            renderArrowNext={(clickHandler, hasNext) =>
              hasNext && (
                <button
                  onClick={clickHandler}
                  className="custom-arrow custom-arrow-right"
                  aria-label="Next image"
                >
                  <ChevronRight size={32} />
                </button>
              )
            }
          >
            {project.images?.map((img, idx) => (
              <div key={idx} className="carousel-slide">
                <img src={img} alt={`${project.title} ${idx}`} />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="popup-info">
          <h2>{project.title}</h2>

          <p>
            date: {project.date} <br />
            location: {project.location}
          </p>

          <p>{project.description || "No description available"}</p>
        </div>
      </div>
    </div>
  );
};
