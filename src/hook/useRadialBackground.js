// useRadialBackground.js
import { useMemo } from 'react';

const useRadialBackground = () => {
  const colors = ['--theme-primary', '#f5f5f7', '#0000', ];

  const radialBackground = useMemo(() => {
    const circleCount = Math.floor(Math.random() * 10) + 5; // Número aleatorio de círculos entre 5 y 15
    const circles = Array.from({ length: circleCount }, () => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = `${Math.floor(Math.random() * (20 - 5 + 1) + 5)}%`;
      const positionX = `${Math.floor(Math.random() * 100)}%`;
      const positionY = `${Math.floor(Math.random() * 100)}%`;

      return `radial-gradient(circle at ${positionX} ${positionY}, ${color} 0, transparent ${size})`;
    });

    return circles.join(', ');
  }, []); // El array vacío asegura que el fondo se genere una sola vez por componente

  return {
    background: radialBackground,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
};

export default useRadialBackground;
