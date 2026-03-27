import styles from './BootScreen.module.css';

export default function BootScreen() {
  return (
    <div className={styles.bootScreen}>
      <div className={styles.bootText}>System initializing...</div>
      <div className={styles.bootText}>Loading temporal assets... [OK]</div>
      <div className={styles.bootText}>Booting Time Machine...</div>
    </div>
  );
}