import React from "react";
import { motion } from "framer-motion";

const DaProject = () => {
  const h2Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="h-min-content flex-col flex justify-center items-center mb-16 ">
      <div className="border-t-2 border-gray-300  w-5/6" />

      <div className="w-screen flex items-start justify-start px-40 mt-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={h2Variants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-row text-5xl text-secondary font-sans gap-4 "
        >
          {" "}
          Part of <span className="flex flex-row text-5xl text-secondary opacity-50 font-sans gap-4">DA project</span> ...{" "}
        </motion.h2>
      </div>

      <div className="flex flex-row justify-start items-end mt-16  gap-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={h2Variants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            className="object-cover h-[22rem]"
            src="/enzo.portfolio/enseigne-RS.png"
            alt=""
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={h2Variants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            className="object-cover w-[30rem] h-[35rem]"
            src="/enzo.portfolio/sac-RS.jpg"
            alt=""
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DaProject;
