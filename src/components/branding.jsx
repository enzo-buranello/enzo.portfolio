import React, { useState } from "react";
import { motion } from "framer-motion";

const Branding = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section className="h-min-content flex flex-col justify-center items-center mb-16 relative">
      <div className="border-t-2 border-gray-300 w-5/6" />

      <div className="w-screen flex items-start justify-start px-40 mt-20">
        <h2 className="flex flex-row text-5xl text-secondary font-sans gap-4">
          Branding{" "}
          <span className="flex flex-row text-5xl text-secondary opacity-50 font-sans gap-4">
            project
          </span>{" "}
          ...
        </h2>
      </div>

      <div className="flex flex-row justify-start items-start mt-16 gap-10">
        {/* Première image */}
        <div
          onMouseEnter={() => setHoveredImage("Branding starts by understanding the company and what it wants to communicate. Then, I create visual elements like the logo, colors, and typography to build a clear and recognizable identity. The goal is to make the brand stand out and reflect its values, while staying adaptable to different platforms. ✍️ ✨")}
          onMouseLeave={() => setHoveredImage(null)}
          onMouseMove={handleMouseMove}
        >
          <img
            className="object-cover h-[30rem]"
            src="/enzo.portfolio/affiche-1.png"
            alt="Affiche 1"
          />
        </div>

        {/* Deuxième image */}
        <div
          onMouseEnter={() => setHoveredImage("Branding starts by understanding the company and what it wants to communicate. Then, I create visual elements like the logo, colors, and typography to build a clear and recognizable identity. The goal is to make the brand stand out and reflect its values, while staying adaptable to different platforms. ✍️ ✨")}
          onMouseLeave={() => setHoveredImage(null)}
          onMouseMove={handleMouseMove}
        >
          <img
            className="object-cover h-[15rem]"
            src="/enzo.portfolio/affiche-2.png"
            alt="Affiche 2"
          />
        </div>
      </div>

      {/* Texte flottant qui suit le curseur */}
      {hoveredImage && (
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
          {hoveredImage}
        </motion.div>
      )}
    </section>
  );
};

export default Branding;