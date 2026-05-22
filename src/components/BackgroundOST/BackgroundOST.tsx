"use client";

import { useEffect, useRef } from "react";

export default function BackgroundOST() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/audio/iwatodai_dorm.mp3");
    }

    const audio = audioRef.current;
    audio.volume = 0;
    audio.loop = true;

    const ativarAudio = () => {
      audio
        .play()
        .then(() => {
          const fadeInterval = setInterval(() => {
            if (audio.volume < 0.1) {
              audio.volume += 0.005;
            } else {
              audio.volume = 0.1;
              clearInterval(fadeInterval);
            }
          }, 200);
        })
        .catch((err) => {
          console.log(`Autoplay bloqueado aguardando interação., ${err}`);
        });
    };

    window.addEventListener("click", ativarAudio, { once: true });
    window.addEventListener("touchstart", ativarAudio, { once: true });
    window.addEventListener("keydown", ativarAudio, { once: true });

    return () => {
      window.removeEventListener("click", ativarAudio);
      window.removeEventListener("touchstart", ativarAudio);
      window.removeEventListener("keydown", ativarAudio);

      // Boa prática: pausar o áudio caso o componente seja desmontado
      audio.pause();
    };
  }, []);

  return null;
}
