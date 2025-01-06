import React from 'react';
import { motion } from 'framer-motion';

const Palette = () => {
  return (
   <motion.div
   initial={{ opacity: 0, y: 20, scale: 0.8 }}
   whileInView={{ opacity: 1, y: 0, scale: 1 }}
   transition={{
     duration: 0.6,        
     delay: 0.5,           
     type: "spring",       
     stiffness: 100,       
     damping: 10}} >
    <img src="/enzo.portfolio/palette.png" alt="" />
   </motion.div>
  );
};

export default Palette;
