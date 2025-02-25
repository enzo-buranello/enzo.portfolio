import React, { useRef, useEffect, useState } from 'react';

const Animation = () => {
  const videoRef = useRef(null); // Référence à l'élément vidéo
  const [scale, setScale] = useState(1); // État pour l'échelle de la vidéo

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    // Intersection Observer pour détecter quand la vidéo entre dans le viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        const visibility = entry.intersectionRatio;

        if (visibility >= 0.7) {
          setScale(1); // Vidéo à 100% de largeur à 70% de visibilité
        } else if (visibility <= 0.95) {
          setScale(0.8); // Vidéo rétrécie lorsqu'elle quitte 95% de visibilité
        }
      },
      { threshold: [0.7, 0.95] } // Seuils pour 70% et 95%
    );

    observer.observe(videoElement); // Observer l'élément vidéo

    return () => {
      observer.unobserve(videoElement); // Nettoyer l'observateur
    };
  }, []);

  return (
    <section className="flex flex-col justify-center items-center mb-16 h-min-content">
      {/* Titre */}
      <div className="w-screen flex items-start justify-start px-40 mt-20">
        <h2 className="text-5xl text-secondary font-sans gap-4">
          Some <span className="opacity-50">animations</span> ...
        </h2>
      </div>

      {/* Vidéo */}
      <div className="video-container" style={{ marginBottom: '40px' }}>
        <video
          ref={videoRef} // Associe la référence à la vidéo
          muted // Empêche l'audio de démarrer automatiquement
          controls
          className="w-full rounded-2xl"
          style={{
            transform: `scale(${scale})`, // Échelle basée sur la visibilité
            transition: 'transform 0.4s ease-out', // Transition fluide pour les changements de taille
          }}
        >
          <source
            src="https://raw.githubusercontent.com/enzo-buranello/video/main/buranello-enzo-crea07_DXZW82QN.mp4"
            type="video/mp4"
          />
          Votre navigateur ne prend pas en charge la vidéo.
        </video>
      </div>
    </section>
  );
};

export default Animation;