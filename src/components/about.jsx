import React from 'react';
import { motion } from 'framer-motion';


const About = () => {
  // Variants pour l'animation du h2
  const h2Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="flex flex-col h-min-content justify-start items-start "> {/* Ajout de cursor-pointer ici */}
      {/* Animation du titre uniquement lorsqu'il devient visible */}
      <motion.h2
        className="text-6xl font-sans text-secondary px-40 py-10 "
        initial="hidden"
        whileInView="visible"
        variants={h2Variants}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
      >
        About ...
      </motion.h2>

      <div className="flex flex-col justify-center items-center gap-10">
        {/* Ligne de séparation sans animation */}
        <div className="border-t-2 border-gray-300 my-4 w-5/6" />

        {/* Texte */}
        <motion.p
          className="text-6xl font-mono font-bold text-secondary text-justify px-40 my-16 "
        >
          Welcome let's explore a selection of my skills, and the work I’ve crafted. With a focus on Graphic Design, Web Development front-end, and Project Management, I enjoy creating engaging visual experiences that combine creativity and functionality.
        </motion.p>

        {/* Ligne de séparation sans animation */}
        <div className="border-t-2 border-gray-300  w-5/6" />
      </div>
    </section>
  );
};

export default About;