import React from 'react';
import { motion } from 'framer-motion';
import UiCarousel from '../components/uicarousel';
import UiCarouselMobile from '../components/carouselMobile';

const UiSection = () => {
  // Définition des variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="flex-col flex justify-center items-center mb-16 gap-20">
      {/* Ligne séparatrice */}
      <div className="border-t-2 border-gray-300 w-5/6" />

      {/* Titre avec animation */}
      <div className="w-screen flex items-start justify-end px-40 mt-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-row text-5xl text-secondary font-sans gap-4"
        >
          UI / UX <span className="opacity-50">design</span> ...
        </motion.h2>
      </div>

      {/* Paragraphe avec animation */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-[50rem] text-3xl text-secondary font-mono"
      >
        During my training, I worked on various projects in experience design and interface design on a wide range of topics.
      </motion.p>

      {/* Carousel */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col gap-40"
      >
        <UiCarousel />
      </motion.div>
    </section>
  );
};

export default UiSection;