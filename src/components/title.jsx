import React from 'react';
import { motion } from 'framer-motion';
import Memoji from '../components/avatar-1';
import Palette from '../components/palette';
import Barre from '../components/barre'

const Introduction = () => {
  // Variantes pour l'animation de chaque h2


  return (
    <div className="flex flex-col bg-primary h-screen justify-center items-center relative">
      <div className="flex flex-col justify-start items-start gap-10">
        {/* Première animation sur le premier h2 */}
        <motion.h2
          className="font-sans text-secondary text-[5rem] flex flex-row gap-7 justify-center items-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} 
        >
          Hi, I'am <span className='opacity-50'>Enzo</span> <span><Memoji client:load /></span> ,
        </motion.h2>

        

        {/* Deuxième animation sur le deuxième h2 */}
        <motion.h2
          className="font-sans text-secondary text-[5rem] flex flex-col justify-start items-start"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }} 
        >
          <div className="flex flex-row items-center justify-center gap-6">
            a <span className='opacity-50'>graphic design</span> <span><Palette /></span>
          </div>
          student
        </motion.h2>
      </div>



      <div className="absolute left-1/2 bottom-10 transform -translate-x-1/2 -translate-y-1/2">
  <Barre />
</div>




    </div>
  );
};

export default Introduction;