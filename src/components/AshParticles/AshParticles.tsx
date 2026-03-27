'use client';

import React, { useEffect, useState } from 'react';
import styles from './AshParticles.module.css';

interface MistCloud {
  id: number;
  size: string;
  top: string;
  left: string;
  duration: string;
  opacity: number;
  xMove: string;
}

export default function AshParticles() {
  const [clouds, setClouds] = useState<MistCloud[]>([]);

  useEffect(() => {
    // O setTimeout(0) empurra a atualização para a próxima iteração do event loop
    // Isso evita o erro de "cascading renders" no React
    const timer = setTimeout(() => {
      const generated = Array.from({ length: 6 }).map((_, i) => ({
        id: i,
        size: `${600 + Math.random() * 500}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: `${40 + Math.random() * 40}s`,
        opacity: 0.08 + Math.random() * 0.05,
        xMove: Math.random() > 0.5 ? '15%' : '-15%',
      }));
      setClouds(generated);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  if (clouds.length === 0) return null;

  return (
    <div className={styles.fogOverlayRoot}>
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className={styles.mistCloud}
          style={{
            width: cloud.size,
            height: cloud.size,
            top: cloud.top,
            left: cloud.left,
            opacity: cloud.opacity,
            animationDuration: cloud.duration,
            '--mx': cloud.xMove,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}