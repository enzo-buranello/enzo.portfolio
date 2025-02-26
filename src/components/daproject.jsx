import React, { useState } from "react";
import { motion } from "framer-motion";

const DaProject = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const h2Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="h-min-content flex flex-col justify-center items-center mb-16 relative">
      <div className="border-t-2 border-gray-300 w-5/6" />

      <div className="w-screen flex items-start justify-start px-40 mt-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={h2Variants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-row text-5xl text-secondary font-sans gap-4"
        >
          Part of{" "}
          <span className="flex flex-row text-5xl text-secondary opacity-50 font-sans gap-4">
            DA project
          </span>{" "}
          ...
        </motion.h2>
      </div>

      <div className="flex flex-row justify-start items-end mt-16 gap-10 relative">
        {/* Image 1 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={h2Variants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          onMouseEnter={() => setHoveredImage("image1")}
          onMouseLeave={() => setHoveredImage(null)}
          onMouseMove={handleMouseMove}
          className="relative"
        >
          <img
            className="object-cover h-[22rem]"
            src="/enzo.portfolio/enseigne-RS.png"
            alt="Enseigne RS"
          />
        </motion.div>

        {/* Image 2 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={h2Variants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          onMouseEnter={() => setHoveredImage("image2")}
          onMouseLeave={() => setHoveredImage(null)}
          onMouseMove={handleMouseMove}
          className="relative"
        >
          <img
            className="object-cover w-[30rem] h-[35rem]"
            src="/enzo.portfolio/sac-RS.jpg"
            alt="Sac RS"
          />
        </motion.div>
      </div>

      {/* Texte flottant qui suit la souris */}
      {hoveredImage && (
        <motion.div
          className="fixed bg-white text-black px-4 py-2 rounded-lg shadow-lg"
          style={{
            top: cursorPos.y + 10,
            left: cursorPos.x + 10,
            pointerEvents: "none", // Empêche d'interagir avec la fenêtre
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          {hoveredImage === "image1"
            ? "Enseigne RS – Un projet de signalétique moderne et impactant."
            : "Sac RS – Un design épuré alliant esthétique et fonctionnalité."}
        </motion.div>
      )}
    </section>
  );
};

export default DaProject;