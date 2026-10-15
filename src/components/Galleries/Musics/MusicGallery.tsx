import Image from "next/image";
import styles from "./MusicGallery.module.css";
import { musics } from "./MusicList";


export default function MusicGallery() {
  return (
    <section>
      <h3 className="text-center">Atualmente estou ouvindo:</h3>
      <div className="flex-center">
        <a href={process.env.NEXT_PUBLIC_SPOTIFY_NOVATOREM} rel="ugc">
          <Image
            style={{ borderRadius: "12px" }}
            src={process.env.NEXT_PUBLIC_SPOTIFY_IMAGE || ""}
            alt="Spotify"
            width={400}
            height={100}
            unoptimized
          />
        </a>
      </div>

      <h3 className="text-center">Recentemente estou jogando:</h3>
      <div
        className="flex-center"
        style={{ width: "100%", overflow: "hidden", padding: "10px 0" }}
      >
        <a href={process.env.NEXT_PUBLIC_EXOPHASE_PROFILE} rel="ugc">
          <Image
            style={{
              borderRadius: "8px",
              width: "100%",
              height: "auto",
              display: "block",
            }}
            src={process.env.NEXT_PUBLIC_EXOPHASE_IMAGE || ""}
            alt="Exophase"
            width={400}
            height={100}
            unoptimized
          />
        </a>
      </div>

      <h3 className="text-center" style={{ marginTop: "40px" }}>
        Artistas que curto ouvir:
      </h3>
      <div className={styles.vinylGallery}>
        {musics.map((v, i) => (
          <div key={i} className={styles.vinyl}>
            <Image
              src={v.img}
              alt={v.title}
              width={200}
              height={200}
              className={styles.vinylImage}
            />
            <div className={styles.title}>{v.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
