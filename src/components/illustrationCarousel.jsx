import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "/enzo.portfolio/illustrations/BREAD.png",
  "/enzo.portfolio/illustrations/charac-flat1.png",
  "/enzo.portfolio/illustrations/charac-flat2.png",
  "/enzo.portfolio/illustrations/Illustration-1.png",
  "/enzo.portfolio/illustrations/Illustration-2.png",
  "/enzo.portfolio/illustrations/Illustration-3.png",
  "/enzo.portfolio/illustrations/Illustration-4.png",
  "/enzo.portfolio/illustrations/LOGODA-1.png",
  "/enzo.portfolio/illustrations/motif-c.png",
  "/enzo.portfolio/illustrations/motif-puppys.png",
  "/enzo.portfolio/illustrations/motifs-floral-enzo.png",
  "/enzo.portfolio/illustrations/STORYBOARD.png",
  "/enzo.portfolio/illustrations/affiche-eco-num.jpg",
  "/enzo.portfolio/illustrations/walkman.png",
];

const IllustrationCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 3 seconds (3000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div style={{ position: "relative", width: "26.25rem", height: "30rem", overflow: "hidden" }}>
      <AnimatePresence>
        <motion.img
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt=""
          initial={{ opacity: 0, x: 0 }} // Initial state: off-screen to the right
          animate={{ opacity: 1, x: 0 }} // Animate to: fully visible
          exit={{ opacity: 0, x: 0 }} // Exit state: off-screen to the left
          transition={{ duration: 0.4 }} // Animation duration
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </AnimatePresence>
    </div>
  );
};

export default IllustrationCarousel;