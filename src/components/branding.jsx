import React from 'react';
import { motion } from 'framer-motion';

const Branding = () => {
  return (

    <section className="h-min-content flex-col flex justify-center items-center mb-16 ">
    <div className="border-t-2 border-gray-300  w-5/6" />

    <div className="w-screen flex items-start justify-start px-40 mt-20">
      <h2
        className="flex flex-row text-5xl text-secondary font-sans gap-4 "
      >
        {" "}
        Branding <span className="flex flex-row text-5xl text-secondary opacity-50 font-sans gap-4">project</span> ...{" "}
      </h2>
    </div>

    <div className="flex flex-row justify-start items-start mt-16  gap-10">
      <div
    
      >
        <img
          className="object-cover h-[30rem]"
          src="/enzo.portfolio/affiche-1.png"
          alt=""
        />
      </div>

      <div

      >
        <img
          className="object-cover h-[15rem]"
          src="/enzo.portfolio/affiche-2.png"
          alt=""
        />
      </div>
    </div>
  </section>


  );
};

export default Branding;