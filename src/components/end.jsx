import React, { useState } from "react";
import { motion } from "framer-motion";

const End = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Fonction pour mettre à jour la position du curseur
  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  // Fonction pour afficher la fenêtre flottante lorsque le curseur est sur le texte
  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  return (
    <>
      <section
        className="h-80 flex-col flex justify-between items-center mb-16 px-40 pt-16"
        onMouseMove={handleMouseMove} // Suivre le mouvement du curseur
      >
        <div className="border-t-2 border-gray-300 w-5/6" />

        <motion.h2
          whileHover={{
            scale: 1.1,
            opacity: 0.5,
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          viewport={{ once: true, amount: 0.9 }} // 90% visible pour déclencher l'animation
          className="font-sans text-secondary text-[4rem] flex flex-wrap gap-7 justify-center items-center pt-28"
          onMouseEnter={handleMouseEnter} // Afficher la fenêtre flottante au survol
          onMouseLeave={handleMouseLeave} // Cacher la fenêtre flottante lorsque le curseur quitte
        >
          {/* Animation de chaque mot séparément */}
          {["Let", "your", "imagination", "run", "free…"].map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.1, // Ajoute un effet d'apparition progressive
              }}
              viewport={{ once: true, amount: 0.9 }}
              className="inline-block mx-1"
            >
              {word}
            </motion.span>
          ))}

          {/* Animation de l'image Stars */}
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.5,
            }}
            viewport={{ once: true, amount: 0.9 }}
            className="inline-flex items-center" // Ajouter inline-flex et items-center
          >
            <p className="m-0">✨</p> {/* Assurer qu'il n'y a pas de marges indésirables */}
          </motion.span>

          {/* Animation du texte */}
          {" and let’s create together! "}

          {/* Animation de l'image Draw */}
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.8,
            }}
            viewport={{ once: true, amount: 0.9 }}
            className="inline-flex items-center" // Ajouter inline-flex et items-center
          >
            <p className="m-0">✍️</p> {/* Assurer qu'il n'y a pas de marges indésirables */}
          </motion.span>
        </motion.h2>

        {/* Fenêtre flottante qui suit le curseur */}
        {isVisible && (
          <motion.div
            className="fixed bg-white text-black px-4 py-2 rounded-lg shadow-lg"
            style={{ top: cursorPos.y + 10, left: cursorPos.x + 10 }} // Positionne la fenêtre au niveau du curseur
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            Let's check this links! 👇💫
          </motion.div>
        )}
      </section>
    </>
  );
};

export default End;