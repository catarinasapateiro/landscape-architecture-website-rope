import React from "react";
import { X } from "lucide-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const PopUp = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-11/12 max-w-4xl relative p-6 grid grid-cols-2 gap-4">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          <X size={24} />
        </button>

        {/* Text on the left */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="text-gray-600">
            {project.description || "No description available"}
          </p>
        </div>

        {/* Carousel on the right */}
        <div>
          <Carousel showThumbs={false} infiniteLoop>
            {project.images?.map((img, idx) => (
              <div key={idx}>
                <img src={img} alt={`${project.title} ${idx}`} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
