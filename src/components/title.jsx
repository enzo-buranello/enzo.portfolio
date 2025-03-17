import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Memoji from '../components/avatar-1';
import Palette from '../components/palette';
import Barre from '../components/barre';


const Introduction = () => {
  const [cursorPosEnzo, setCursorPosEnzo] = useState({ x: 0, y: 0 });
  const [isVisibleEnzo, setIsVisibleEnzo] = useState(false);

  const [cursorPosDesign, setCursorPosDesign] = useState({ x: 0, y: 0 });
  const [isVisibleDesign, setIsVisibleDesign] = useState(false);

  const handleMouseMoveEnzo = (e) => {
    setCursorPosEnzo({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnterEnzo = () => setIsVisibleEnzo(true);
  const handleMouseLeaveEnzo = () => setIsVisibleEnzo(false);

  const handleMouseMoveDesign = (e) => {
    setCursorPosDesign({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnterDesign = () => setIsVisibleDesign(true);
  const handleMouseLeaveDesign = () => setIsVisibleDesign(false);

  return (
    <div className="flex flex-col bg-primary h-screen justify-center items-center relative">
      <div className="flex flex-col justify-start items-start gap-10 md:">
        {/* Premier texte */}
        <motion.h2
          className="font-sans text-secondary text-nowrap text-[5rem] flex flex-row gap-7 justify-center items-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'am{' '}
          <motion.span
            className="opacity-50 relative cursor-pointer"
            onMouseMove={handleMouseMoveEnzo}
            onMouseEnter={handleMouseEnterEnzo}
            onMouseLeave={handleMouseLeaveEnzo}
            whileHover={{
              scale: 1.05,
              color: "#fae1ff",
              opacity: 1,
              y: [-2, 0], // Rebond plus léger
            }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            Enzo
          </motion.span>{' '}
          <span><Memoji client:load /></span>,
        </motion.h2>

        {/* Deuxième texte */}
        <motion.h2
          className="font-sans text-secondary text-[5rem] flex flex-col justify-start items-start"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-row items-center justify-center gap-6">
            a{' '}
            <motion.span
              className="opacity-50 relative cursor-pointer text-nowrap"
              onMouseMove={handleMouseMoveDesign}
              onMouseEnter={handleMouseEnterDesign}
              onMouseLeave={handleMouseLeaveDesign}
              whileHover={{
                scale: 1.05,
                color: "#fae1ff",
                opacity: 1,
                y: [-2, 0], // Rebond plus léger
              }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              graphic design
            </motion.span>{' '}
            <span><Palette /></span>
          </div>
          student
        </motion.h2>
      </div>

      {/* Barre */}
      <div className="absolute left-1/2 bottom-10 transform -translate-x-1/2 -translate-y-1/2">
        <Barre />
      </div>

      {/* Fenêtre flottante pour "Enzo" */}
      {isVisibleEnzo && (
        <motion.div
          className="fixed font-serif bg-white text-black px-4 py-2 rounded-lg shadow-lg"
          style={{ top: cursorPosEnzo.y + 10, left: cursorPosEnzo.x + 10 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          I hope you enjoy exploring my portfolio. 🤩
        </motion.div>
      )}

      {/* Fenêtre flottante pour "graphic design" */}
      {isVisibleDesign && (
        <motion.div
          className="fixed  bg-white text-black px-4 py-2 rounded-lg shadow-lg"
          style={{ top: cursorPosDesign.y + 10, left: cursorPosDesign.x + 10 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          UI/UX design, motion design, illustration, and web design are at the heart of my passions. ✨
        </motion.div>
      )}
    </div>
  );
};

export default Introduction;