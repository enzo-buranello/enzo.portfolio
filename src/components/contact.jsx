import React from 'react';
import { motion } from 'framer-motion';
import InfoButton from "../components/buttonContct";


const Contact = () => {

    const h2Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      };

  return (
    <>
    <section className='flex flex-col gap-40 h-min-content mb-60 mt-16'>

    <motion.div className=' flex flex-col justify-center items-end gap-3 w-min-content px-40 '
       initial="hidden"
       whileInView="visible"
       variants={h2Variants}
       transition={{ duration: 0.6, ease: 'easeOut' }}
       viewport={{ once: true, amount: 0.5 }}>

        <h2 className='flex flex-row text-5xl text-secondary font-sans gap-4  '>Let’s make <span className='opacity-50'> contact</span> </h2>
        <h2 className=' text-5xl text-secondary font-sans'>...</h2>
    </motion.div>
    

    <div className='flex flex-row items-center justify-center gap-10 px-10'>
      
  <InfoButton client:load/>


    <a className='w-[32.125rem] py-[1.25rem] border border-secondary flex flex-row justify-center items-center font-mono text-secondary gap-5 hover:bg-secondary hover:text-primary' href="/enzo.portfolio/enzo-buranello_CV.pdf"  download="/enzo.portfolio/enzo-buranello_CV.pdf">Download my CV <img className='w-[36px] hover:color-primary' src="/enzo.portfolio/download.svg" alt="" /></a>


    
    </div>

   
</section>
    
    </>

  );
};

export default Contact;