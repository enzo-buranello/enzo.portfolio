import React, { useRef, useState, useEffect } from 'react';

const VideoIntro = () => {
  const videoRef = useRef(null); // Référence à l'élément vidéo
  const [scale, setScale] = useState(1); // État pour contrôler l'échelle de la vidéo
  const [isVisible, setIsVisible] = useState(false); // État pour savoir si la vidéo est visible à plus de 50%

  // Fonction pour ajuster la taille de la vidéo en fonction du scroll
  const handleScroll = () => {
    if (!isVisible) return; // Ne pas réduire la taille tant que la vidéo n'est pas visible à plus de 50%

    const scrollY = window.scrollY; // Position du défilement vertical
    const scaleValue = Math.max(0.8, 1 - (scrollY - window.innerHeight / 2) / 2000); // Réduit la taille de la vidéo à 80% au maximum
    setScale(scaleValue); // Met à jour l'échelle de la vidéo
  };

  // Détecter la visibilité de la vidéo à l'aide d'IntersectionObserver
  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Vérifie si la vidéo est visible à plus de 50% dans la fenêtre
        setIsVisible(entry.intersectionRatio >= 0.5);
      },
      { threshold: 0.5 } // Le seuil est de 50% de la vidéo visible
    );

    observer.observe(videoElement); // Observer l'élément vidéo

    // Nettoyage
    return () => {
      observer.unobserve(videoElement);
    };
  }, []);

  // Ajout et nettoyage de l'événement de défilement
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Nettoyage de l'événement lorsqu'on démonte le composant
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]); // Ajoute isVisible dans les dépendances pour redémarrer l'effet lorsque la visibilité change

  return (
    <div className="video-container" style={{ marginBottom: '40px' }}>
      {/* Vous pouvez ajuster la marge en fonction du reste de la mise en page */}
      <video
        ref={videoRef} // Associe la référence à la vidéo
        width="640"
      
        muted // Empêche l'audio de démarrer automatiquement
        className="w-screen rounded-2xl"
        style={{
          transform: `scale(${scale})`, // Applique l'échelle calculée
          transition: 'transform 0.2s ease-out', // Transition fluide pour l'échelle
        }}
        controls
      >
        <source
          src="https://raw.githubusercontent.com/enzo-buranello/video/main/portfolio_video.mp4"
          type="video/mp4"
        />
        Votre navigateur ne prend pas en charge la vidéo.
      </video>
    </div>
  );
};

export default VideoIntro;