import React from 'react';
import { motion } from 'framer-motion';
import Memoji from '../components/avatar-1'
import Palette from '../components/palette'


const Introduction = () => {
  return (
    <div className="flex flex-col bg-primary h-min-screen justify-center  items-center h-screen">
      <div className="flex flex-col justify-start items-start gap-10">
        {/* Animation pour 1 */}
        <motion.h2
          className="font-poppins text-5xl flex flex-row font-bold gap-7 justify-center items-center"
        >
          Hi, I am Enzo <span> <Memoji/></span> ,
        </motion.h2>

        <motion.h2
        className='font-poppins text-5xl flex flex-col font-bold gap-7 justify-start items-start"'>
            a graphic design <span><Palette/></span> student
        </motion.h2>
       
      </div>
    </div>
  );
};

export default Introduction;
