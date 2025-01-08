import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  // État pour suivre si le curseur est sur l'élément ou pas
  const [isHovered, setIsHovered] = useState(false);

  // Fonction pour mettre à jour la position du curseur
  const handleMouseMove = (e) => {
    const cursor = document.getElementById('custom-cursor');
    cursor.style.left = `${e.clientX - 15}px`; // Décalage pour centrer le curseur
    cursor.style.top = `${e.clientY - 15}px`; // Décalage pour centrer le curseur
  };

  // Gérer l'affichage du curseur SVG
  useEffect(() => {
    // Ajouter l'écouteur d'événements pour déplacer le curseur
    window.addEventListener('mousemove', handleMouseMove);

    // Nettoyer l'écouteur d'événements lors du démontage
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Curseur SVG */}
      <div
        id="custom-cursor"
        style={{
          position: 'absolute',
          width: '30px', // Taille du curseur
          height: '30px',
          backgroundColor: 'transparent',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: '0.1s ease-out',
          display: isHovered ? 'block' : 'none', // Afficher le curseur quand survolé
        }}
      >
 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_217_76)">
<path d="M11.6627 4.26875C11.574 3.95489 11.4099 3.66749 11.1847 3.43159C10.9595 3.19569 10.68 3.01845 10.3705 2.91531L1.62492 0L1.16586 0.459062L5.8568 5.15C6.05242 5.05656 6.26867 5 6.49992 5C7.32836 5 7.99992 5.67156 7.99992 6.5C7.99992 7.32844 7.32836 8 6.49992 8C5.67148 8 4.99992 7.32844 4.99992 6.5C4.99992 6.26875 5.05648 6.0525 5.14992 5.85687L0.458984 1.16594L-7.82013e-05 1.625L2.91523 10.3706C3.01837 10.68 3.19561 10.9595 3.43151 11.1848C3.66741 11.41 3.95481 11.5741 4.26867 11.6628L8.99992 13L12.9999 9L11.6627 4.26875ZM13.6821 15.5606L15.5605 13.6822C16.1465 13.0962 16.1465 12.1459 15.5605 11.56L13.7934 9.79281L9.79273 13.7934L11.5599 15.5606C12.1459 16.1466 13.0959 16.1466 13.6821 15.5606Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_217_76">
<rect width="16" height="16" fill="white" transform="matrix(0 1 -1 0 16 0)"/>
</clipPath>
</defs>
</svg>

      </div>

      {/* Le composant à survoler pour activer le curseur */}
      <section
        className="flex flex-col h-[800px] justify-start items-start"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h2 className="text-6xl font-sans text-secondary px-40 mb-10">About ...</h2>

        <div className="flex flex-col justify-center items-center gap-10">
          {/* Texte à survoler */}
          <p className="text-5xl font-mono font-bold text-secondary text-justify px-40 my-5">
            Welcome let's explore a selection of my skills, and the work I’ve crafted. With a focus on Graphic Design, Web Development front-end, and Project Management, I enjoy creating engaging visual experiences that combine creativity and functionality.
          </p>
        </div>
      </section>
    </>
  );
};

export default CustomCursor;