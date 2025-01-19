import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { div } from "motion/react-client";

const images = [
  "/enzo.portfolio/proto-meteo.png",
  "/enzo.portfolio/proto-santa.png",
  "/enzo.portfolio/proto-santa-2.png",
  "/enzo.portfolio/proto-mobil-coachella.png",
];

const UiCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (

    <div className="flex flex-col gap-20">

       <h2 className="flex flex-row text-5xl text-secondary font-sans gap-4"> Mobile design  </h2>
    <section className="relative flex items-center gap-3 justify-center h-[650px]">
      {/* Carousel Container */}

     
      
      <div className="relative overflow-hidden w-[330px] h-[700px]">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Carousel Item ${currentIndex + 1}`}
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>

      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 z-10 bg-black text-white rounded-full w-14 h-14 flex items-center justify-center"
      >
        {/* SVG Icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 z-10 bg-black text-white rounded-full w-14 h-14 flex items-center justify-center"
      >
        {/* SVG Icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
    </div>

   
  );
};

export default UiCarousel;