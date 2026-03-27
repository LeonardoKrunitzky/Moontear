import Interests from '@/components/Interests/Interest';
import styles from './page.module.css';
import ProfileHeader from '@/components/ProfileHeader/ProfileHeader';
import VinylGallery from '@/components/VinylGallery/VinylGallery';

export default function Home() {
  return (
    <div className={styles.container}>
      <ProfileHeader />
      <main>
        <VinylGallery />
        <Interests />
      </main>
    </div>
  );
}