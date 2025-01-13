import React from 'react';
import { motion } from 'framer-motion';
import UiCarousel from '../components/uicarousel'



const UiSection = () => {
  return (
<section className="h-min-content flex-col flex justify-center items-center mb-16 ">
<div className="border-t-2 border-gray-300  w-5/6" />

<div className="w-screen flex items-start justify-end px-40 mt-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
        //   variants={h2Variants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-row text-5xl text-secondary font-sans gap-4 "
        >
          {" "}
          UI / UX  <span className="flex flex-row text-5xl text-secondary opacity-50 font-sans gap-4">design</span> ...{" "}
        </motion.h2>
      </div>


</section>
  );
};

export default UiSection;