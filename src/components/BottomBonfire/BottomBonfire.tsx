import Image from 'next/image';
import styles from './BottomBonfire.module.css';

export default function BottomBonfire() {
  return (
    <Image 
      src="/images/bonfire.gif" 
      className={styles.bottomImage} 
      alt="Bonfire" 
      width={100}
      height={100}
      unoptimized
    />
  );
}