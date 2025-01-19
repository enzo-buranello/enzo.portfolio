import React from 'react';
import { motion } from 'framer-motion';
import IllustrationCarousel from './illustrationCarousel'

const IllustrationSection = () => {
    
  return (
    <section className='flex-col flex justify-center items-center mb-16 p-40 gap-20'>

<div className="border-t-2 border-gray-300  w-5/6" />


<div className="w-screen flex items-start justify-start px-40 mt-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
        //   variants={h2Variants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col justify-start items-start text-5xl text-secondary font-sans gap-4 "
        >
          {" "}
          Flat and digital <span className='flex flex-row gap-4'> <span className="flex flex-row text-5xl text-secondary opacity-50 font-sans gap-4">illustrations</span> ...{" "}</span>
        </motion.h2>

<IllustrationCarousel client:load/>

      </div>








    </section>


  );
};

export default IllustrationSection;