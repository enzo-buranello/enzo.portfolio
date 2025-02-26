import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const About = () => {
  const controls = useAnimation();
  const imageControls = useAnimation();
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
        setIsInView(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    controls.start({
      scale: isInView ? 1.2 : 1, // Agrandissement
      y: isInView ? -30 : 0, // Légère montée
      transition: { duration: 0.6, ease: "easeInOut" },
    });

});

  return (
    <section id="about-section" className="mb-[6rem] gap-96 ">
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
        {/* Conteneur animé */}
        <motion.div
          className="flex flex-col justify-between items-center bg-secondary pt-10 rounded-xl w-2/3"
          animate={controls} // Contrôle l'animation de scale et mouvement vers le haut
        >
          {/* Image animée avec scale et rebond */}
          <div className="">
            <img src="/enzo.portfolio/ampoule.png" alt="Ampoule" />
          </div>

          <div className="border-t-2 border-primary opacity-20 w-3/6" />

          {/* Texte */}
          <p className="text-3xl font-poppins text-primary text-justify px-10 my-10">
            Welcome let's explore a selection of my skills, and the work I’ve crafted. 
            With a focus on Graphic Design, Web Development front-end, and Project Management, 
            I enjoy creating engaging visual experiences that combine creativity and functionality.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;