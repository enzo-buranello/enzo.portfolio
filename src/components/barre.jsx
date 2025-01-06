import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Barre = () => {
  const [scrollY, setScrollY] = useState(0);

  // Met à jour la position du scroll lorsqu'on fait défiler la page
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Ajoute un écouteur d'événement pour le scroll
    window.addEventListener('scroll', handleScroll);

    // Nettoyage de l'événement lors du démontage du composant
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calcul de l'opacité et de la position en fonction du scroll
  const opacity = Math.max(1 - scrollY / 500, 0);  // Disparaît progressivement
  const yPosition = Math.min(scrollY / 2, 100);   // Déplace l'élément vers le haut lors du scroll

  return (
    <motion.div
      initial={{ opacity: 1, y: 0, scale: 0.8 }}  // Position initiale de l'élément
      animate={{
        opacity: opacity,   // L'élément devient de plus en plus transparent
        y: [0, -10, 0],   // Rebond dynamique
      }}
      transition={{
        repeat: Infinity,    // Animation en boucle infinie
        repeatType: "loop",  // Répétition continue
        duration: 0.8,       // Durée d'une boucle de rebond
   
               // Amortissement pour un rebond plus doux
      }}
      style={{
        transform: `translateY(${yPosition}px)`,  // Applique le mouvement de défilement
      }}
    >
      <img src="/enzo.portfolio/barre.svg" alt="Barre" />
    </motion.div>
  );
};

export default Barre;