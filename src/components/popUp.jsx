import React from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const PopUp = ({ project, onClose }) => {
  if (!project) return null;

  const imageCount = project.images?.length || 0;
  const hasMultipleImages = imageCount > 1;

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
          <Swiper
            modules={[Navigation]}
            navigation={
              hasMultipleImages
                ? {
                    nextEl: ".custom-arrow-right",
                    prevEl: ".custom-arrow-left",
                  }
                : false
            }
            loop={hasMultipleImages}
            allowTouchMove={hasMultipleImages}
            className="swiper-container"
          >
            {project.images?.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="carousel-slide">
                  <img src={img} alt={`${project.title} ${idx}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {hasMultipleImages && (
            <>
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
          )}
        </div>

        <div className="popup-info">
          <h2>{project.title}</h2>
          <h4>{project.subtitle}</h4>
          <p>
            date: {project.date} <br />
            status: {project.status}
          </p>
          <p>{project.description || "No description available"}</p>
        </div>
      </div>
    </div>
  );
};
