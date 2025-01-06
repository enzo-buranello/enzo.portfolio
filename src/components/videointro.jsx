import React, { useRef, useEffect } from 'react';

const VideoIntro = () => {
  const videoRef = useRef(null); // Référence à l'élément vidéo

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return; // Protection contre les références nulles

    // Intersection Observer pour détecter si la vidéo est visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoElement.play(); // Lecture automatique
        } else {
          videoElement.pause(); // Pause lorsque la vidéo sort de la fenêtre
        }
      },
      { threshold: 0.6 } // Active lorsque 60 % de la vidéo est visible
    );

    observer.observe(videoElement); // Observer l'élément vidéo

    // Nettoyage
    return () => {
      observer.unobserve(videoElement);
    };
  }, []);

  return (
    <div className="video-container">
      <video
        ref={videoRef} // Associe la référence à la vidéo
        width="640"
        height="360"
        controls
        muted // Empêche l'audio de démarrer automatiquement
        className="w-screen rounded-lg"
      >
        <source
          src="https://raw.githubusercontent.com/enzo-buranello/video/main/buranello-enzo-crea07_DXZW82QN.mp4"
          type="video/mp4"
        />
        Votre navigateur ne prend pas en charge la vidéo.
      </video>
    </div>
  );
};

export default VideoIntro;