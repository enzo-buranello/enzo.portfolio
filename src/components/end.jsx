import React from "react";
import { motion } from "framer-motion";
import { div } from "motion/react-client";

const End = () => {
  return (

  <>
  <section className='h-80 flex-col flex justify-between items-center mb-16 px-40 pt-16'>

  <div className="border-t-2 border-gray-300  w-5/6" />

  <motion.h2
    
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      viewport={{ once: true, amount: 0.9 }} // 90% visible pour déclencher l'animation
      className="font-sans text-secondary text-[4rem] flex flex-wrap gap-7 justify-center items-center"
    >
      {/** Animation de chaque mot séparément */}
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

      {/** Animation de l'image Stars */}
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.5 }}
        viewport={{ once: true, amount: 0.9 }}
      >
        <img src="/enzo.portfolio/stars.png" alt="Stars" className="inline-block w-10 h-10 mx-2" />
      </motion.span>

      {/** Animation du texte */}
      {" and let’s create together! "}

      {/** Animation de l'image Draw */}
      <motion.span
      
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.8 }}
        viewport={{ once: true, amount: 0.9 }}
      >
        <img src="/enzo.portfolio/draw.png" alt="Draw" className="inline-block w-10 h-10 mx-2" />
      </motion.span>
    </motion.h2>
    </section>

  </>
    
  );
};

export default End;