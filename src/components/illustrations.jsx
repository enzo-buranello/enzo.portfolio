import React, { useState } from "react";
import { motion } from "framer-motion";
import IllustrationCarousel from "./illustrationCarousel";

const IllustrationSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section className="flex flex-col justify-center items-center mb-16 gap-20 relative">
      <div className="border-t-2 border-gray-300 w-5/6" />

      <div className="flex flex-col justify-start items-start w-full">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col justify-start items-start text-5xl text-secondary font-sans gap-4 px-40"
        >
          Flat and digital{" "}
          <span className="flex flex-row gap-4">
            <span className="flex flex-row text-5xl text-secondary opacity-50 font-sans gap-4">
              illustrations
            </span>{" "}
            ...
          </span>
        </motion.h2>
      </div>

      {/* Carousel avec détection du survol */}
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <IllustrationCarousel />
      </div>

      {/* Texte flottant qui suit la souris */}
      {isHovered && (
        <motion.div
          className="fixed font-serif bg-white text-black px-4 py-2 rounded-lg shadow-lg"
          style={{
            top: cursorPos.y + 10,
            left: cursorPos.x + 10,
            pointerEvents: "none",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          For digital painting, I usually start by looking for images that inspire me before creating my sketches and illustrations on a graphic tablet. Other times, I don’t need any reference images my imagination is enough. 🎨✨
        </motion.div>
      )}
    </section>
  );
};

export default IllustrationSection;