import React, { useState } from "react";
import { motion } from "framer-motion";

const InfoButton = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="flex flex-col items-center ">
      {/* Bouton pour afficher/masquer les informations */}
      <button
        className="w-[32.125rem] py-[1.25rem] border border-secondary flex flex-row justify-center items-center font-mono text-secondary gap-5 hover:bg-secondary hover:text-primary"
        onClick={() => setShowInfo((prev) => !prev)}
      >
        {showInfo ? "Contact" : "Contact"}
      </button>

      {/* Conteneur des informations avec hauteur fixe */}
      <div className="relative w-full max-w-md">
        <motion.div
          className="absolute top-0 left-0 right-0 border mt-4 border-secondary flex flex-col justify-center items-start font-mono text-secondary gap-5 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: showInfo ? 1 : 0 }}
          style={{
            height: showInfo ? "auto" : "0px", // Animation de hauteur
            overflow: "hidden", // Cache le contenu lorsqu'il est fermé
          }}
          transition={{ duration: 0.3 }}
        >
          {showInfo && (
            <>
              <p className="font-mono text-secondary text-sm">
                <strong>Phone:</strong> 06 12 12 91 65
              </p>
              <p className="font-mono text-secondary text-sm">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:youremail@example.com"
                  className="text-secondary hover:opacity-50 hover:text-secondary"
                >
                 enzo.buranello.pro@gmail.com
                </a>
              </p>
              <p className="font-mono text-secondary text-sm">
                <strong>Portfolio:</strong>{" "}
                <a
                  href="https://dribbble.com/enooui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:opacity-50 hover:text-secondary"
                >
                 https://dribbble.com/enooui
                </a>
              </p>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default InfoButton;