import Image from "next/image";
import styles from "./AnimeGallery.module.css";
import { animes } from "./AnimesList";


export default function AnimesGallery() {
  return (
    <section>
      <h3 className="text-center" style={{ marginTop: "40px" }}>
        Animes Top:
      </h3>
      <div className={styles.posterGallery}>
        {animes.map((anime, i) => (
          <div key={i} className={styles.posterItem}>
            <div className={styles.posterFrame}>
              <Image
                src={anime.src}
                alt={anime.alt}
                width={180}
                height={260}
                className={styles.posterImage}
                unoptimized
              />
              {/* Efeito de textura/dobra de pôster */}
              <div className={styles.posterTexture} />
            </div>
            <div className={styles.title}>{anime.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
