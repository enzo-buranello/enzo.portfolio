import React from 'react';
import { motion } from 'framer-motion';

const Memoji = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,        
        delay: 0.3,           
        type: "spring",       
        stiffness: 100,       
        damping: 10           
      }}
    >
      <img src="/enzo.portfolio/memoji.svg" alt="Memoji" />
    </motion.div>
  );
};

export default Memoji;