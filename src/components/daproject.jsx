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
          className="fixed font-serif bg-white text-black px-4 py-2 rounded-lg shadow-lg"
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
            ? " 🔎 For any design project, I start by exploring ideas (like a whisky bar) and analyzing the competition to understand the market. I define my target audience (personae) to tailor my approach. I create a story around my brand and offer an experience that resonates with this audience. Finally, I choose the right communication channels to effectively promote my brand and adapt its identity across the selected platforms. 📢"

            
            : "✏️ I start by exploring images, words, and emotions to fuel my inspiration. I look for a story to tell, a message to share, and then translate it into sketches and visual compositions. I test, refine shapes and colors to give meaning to the whole. Once the concept is ready, I adapt it to print and web formats, making sure it keeps its impact and coherence. "}
        </motion.div>
      )}
    </section>
  );
};

export default DaProject;