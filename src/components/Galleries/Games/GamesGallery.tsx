"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./GamesGallery.module.css";
import { games } from "./GamesList";
import { platformSymbols } from "./PlataformIcons";


export default function GamesGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.section}>
      <h3 className={styles.heading}>Jogos Bolados:</h3>

      <div className={styles.gameGallery}>
        {games.map((game, i) => {
          const platformKey = game.platform.toLowerCase();
          const iconSrc = platformSymbols[game.platform];
          const isActive = activeIndex === i;

          return (
            <div
              key={i}
              onClick={() => handleToggle(i)}
              className={`${styles.gameItem} ${isActive ? styles.active : ""}`}
            >
              <div
                className={`${styles.bluRayCase} ${
                  styles[`case_${platformKey}`] || ""
                }`}
              >
                <div className={styles.caseSpine}>
                  <Image
                    src={iconSrc}
                    alt={game.platform}
                    width={14}
                    height={14}
                    className={styles.spineIcon}
                  />
                  <span className={styles.spineTitle}>{game.title}</span>
                </div>

                <div className={styles.sleeve}>
                  {game.showHeader && (
                    <div
                      className={`${styles.platformHeader} ${
                        styles[`header_${platformKey}`] || ""
                      }`}
                    >
                      <Image
                        src={iconSrc}
                        alt={game.platform}
                        width={13}
                        height={13}
                        className={styles.platformIcon}
                      />
                      <span className={styles.platformText}>
                        {game.platform}
                      </span>
                    </div>
                  )}

                  <div className={styles.artworkWrapper}>
                    <Image
                      src={game.src}
                      alt={game.alt}
                      width={168}
                      height={220}
                      className={styles.gameImage}
                      unoptimized
                    />
                  </div>

                  <div className={styles.plasticGloss} />
                </div>
              </div>

              <div className={styles.title}>{game.title}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}