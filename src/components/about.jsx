import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringP, setIsHoveringP] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isHovering) {
        setCursorPos({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const target = document.getElementById("animated-paragraph");
    if (target) observer.observe(target);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovering]);

  const characters =
    "Welcome let's explore a selection of my skills, and the work I’ve crafted. With a focus on Graphic Design, Web Development front-end, and Project Management, I enjoy creating engaging visual experiences that combine creativity and functionality.".split(
      ""
    );

  return (
    <section
      onMouseEnter={() => setIsHovering(true)} // Affiche le curseur personnalisé
      onMouseLeave={() => setIsHovering(false)} // Cache le curseur personnalisé
      className={`relative flex flex-col h-min-content justify-start items-start ${
        isHovering ? "cursor-none" : "" // Cache le curseur natif quand le custom curseur est actif
      }`}
    >
      {/* 🔥 Curseur personnalisé */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            className="fixed w-10 h-10 bg-white rounded-full pointer-events-none"
            style={{
              top: cursorPos.y,
              left: cursorPos.x,
              transform: "translate(-50%, -50%)",
              mixBlendMode: "difference",
            }}
            initial={{ opacity: 0, scale: 0.5 }} // Apparition en fondu
            animate={{ opacity: 1, scale: isHoveringP ? 2 : 1 }} // Scale uniquement si on survole <p>
            exit={{ opacity: 0, scale: 0.5 }} // Disparition fluide
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
      </AnimatePresence>

      {/* Animation du titre */}
      <motion.h2
        className="text-6xl font-sans text-secondary px-40 py-10"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        About ...
      </motion.h2>

      <div className="flex flex-col justify-center items-center gap-10">
        <div className="border-t-2 border-gray-300 my-4 w-5/6" />

        {/* Texte animé caractère par caractère */}
        <motion.p
          id="animated-paragraph"
          className="text-6xl font-mono font-bold text-secondary text-justify px-40 my-16"
          onMouseEnter={() => setIsHoveringP(true)} // 🔥 Agrandit le curseur
          onMouseLeave={() => setIsHoveringP(false)} // 🔥 Rétrécit le curseur
        >
          {isVisible &&
            characters.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: index * 0.02,
                }}
              >
                {char}
              </motion.span>
            ))}
        </motion.p>

        <div className="border-t-2 border-gray-300 w-5/6" />
      </div>
    </section>
  );
};

export default About;