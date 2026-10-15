import styles from './page.module.css';
import ProfileHeader from '@/components/ProfileHeader/ProfileHeader';
import MusicGallery from '@/components/Galleries/Musics/MusicGallery';
import MemoryFragments from '@/components/MemoryFragments/MemoryFragments';
import GamesGallery from '@/components/Galleries/Games/GamesGallery';
import AnimeGallery from '@/components/Galleries/Animes/AnimeGallery';

export default function Home() {
  return (
    <div className={styles.container}>
      <ProfileHeader />
      <main>
        <MemoryFragments />
        <MusicGallery />
        <GamesGallery />
        <AnimeGallery />
      </main>
    </div>
  );
}