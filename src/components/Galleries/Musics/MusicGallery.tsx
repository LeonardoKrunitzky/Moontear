import Image from "next/image";
import styles from "./MusicGallery.module.css";
import { musics } from "./MusicList";

export default function MusicGallery() {
  return (
    <section>
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
