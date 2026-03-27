import Image from 'next/image';
import styles from './GifCard.module.css';

interface GifCardProps {
  src: string;
  alt: string;
  quote?: string;
}

export default function GifCard({ src, alt, quote }: GifCardProps) {
  return (
    <div className={styles.gifItem}>
      <Image 
        src={src} 
        alt={alt} 
        width={500} 
        height={300} 
        style={{ width: '100%', height: 'auto' }}
        unoptimized 
      />
      {quote && <p>{quote}</p>}
    </div>
  );
}