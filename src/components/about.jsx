import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const About = () => {
  const controls = useAnimation();
  const [isInView, setIsInView] = useState(false);

  // Gestion des tooltips et de la position du curseur
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [visibleTooltip, setVisibleTooltip] = useState(null);

  const handleMouseMove = (e) => {
    setCursor({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (tooltip) => setVisibleTooltip(tooltip);
  const handleMouseLeave = () => setVisibleTooltip(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.7 && rect.bottom > 0;
        setIsInView(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    controls.start({
      scale: isInView ? 1.15 : 1,
      y: isInView ? -20 : 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    });
  }, [isInView, controls]);

  return (
    <section id="about-section" className="my-[6rem] flex justify-center items-center">
      {/* Conteneur animé */}
      <motion.div
        className="flex flex-col justify-center items-center bg-secondary w-3/4 h-min py-20 rounded-xl"
        animate={controls}
      >
        {/* Image */}
        <div className="flex flex-col justify-center items-center w-3/4 gap-10">
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => handleMouseEnter("Ampoule")}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.2, y: [-3, 0] }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <img src="/enzo.portfolio/ampoule.png" alt="Ampoule" className="cursor-pointer" />
          </motion.div>
          <div className="border-t-2 border-primary opacity-20 w-3/6" />
        </div>

        {/* Texte animé */}
        <p className=" flex flex-wrap text-3xl w-[1000px] font-serif text-primary text-justify my-10">
           Welcome let's explore a selection of my skills, and{" "}
          <motion.span
            className="opacity-50 font-sans relative cursor-pointer inline-block"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => handleMouseEnter("Work")}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.05, color: "#fae1ff", opacity: 1, y: [-2, 0] }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            the work I’ve crafted.
          </motion.span>{" "}
           With a focus on{" "}
          <motion.span
            className="opacity-50 font-sans relative cursor-pointer inline-block"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => handleMouseEnter("Graphic Design")}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.05, color: "#fae1ff", opacity: 1, y: [-2, 0] }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            Graphic Design
          </motion.span>
          ,{" "}
          <motion.span
            className="opacity-50 font-sans relative cursor-pointer inline-block"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => handleMouseEnter("Web Development")}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.05, color: "#fae1ff", opacity: 1, y: [-2, 0] }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
             Web Development front-end
          </motion.span>
          ,{" "}
          <motion.span
            className="opacity-50 font-sans relative cursor-pointer inline-block"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => handleMouseEnter("UX")}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.05, color: "#fae1ff", opacity: 1, y: [-2, 0] }}
            transition={{ type: "spring"  }}
          >
          User Experience projects
          </motion.span>
          , and I enjoy creating engaging visual experiences that combine creativity and functionality.
        </p>
      </motion.div>

      {/* Tooltips dynamiques */}
      {visibleTooltip && (
        <motion.div
          className="fixed font-serif bg-white text-black px-4 py-2 rounded-lg shadow-lg"
          style={{ top: cursor.y + 10, left: cursor.x + 10 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          {visibleTooltip === "Work" && "Throughout my academic and professional journey, I have completed various projects, including an internship in textile graphic design and creating user experiences in the tourism industry. 🤩"}
          {visibleTooltip === "Graphic Design" &&
            "I have developed skills in motion design, vector and digital illustration, content creation, video editing, art direction, and layout composition. ✨"}
          {visibleTooltip === "Web Development" && "Coding work, including applications, e-commerce websites, one-page sites, and portfolios. 💻"}
          {visibleTooltip === "UX" && "I have designed user interfaces and mockups for mobile apps and websites, focusing on user experience and usability. 🎯"}
          {visibleTooltip === "Ampoule" && "What's about me ? 💡"}
        </motion.div>
      )}
    </section>
  );
};

export default About;