import Image from 'next/image';
import styles from './ProfileHeader.module.css';

export default function ProfileHeader() {
  return (
    <header className={styles.profileHeader}>
      <div className={styles.profilePic}>
        <Image 
          src="/images/pfp.jpg" 
          alt="𝓔𝓷𝓿𝔂's profile picture" 
          width={160}
          height={160}
          unoptimized
        />
      </div>
      <h1 className={styles.glitchName} data-text="𝓔𝓷𝓿𝔂">𝓔𝓷𝓿𝔂</h1>
      <p className={styles.quote}>&quot;Life is precisely the finite&quot;</p>
    </header>
  );
}