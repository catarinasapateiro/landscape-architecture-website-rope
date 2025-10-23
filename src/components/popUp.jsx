import React from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
          {project.images?.length > 1 ? (
            <>
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".custom-arrow-right",
                  prevEl: ".custom-arrow-left",
                }}
                loop={true}
                className="swiper-container"
              >
                {project.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="carousel-slide">
                      <img src={img} alt={`${project.title} ${idx}`} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button
                className="custom-arrow custom-arrow-left"
                aria-label="Previous image"
              >
                <ChevronLeft size={32} />
              </button>

              <button
                className="custom-arrow custom-arrow-right"
                aria-label="Next image"
              >
                <ChevronRight size={32} />
              </button>
            </>
          ) : (
            // single image fallback
            <div className="carousel-slide single-image">
              <img
                src={project.images?.[0]}
                alt={project.title}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
          )}
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
