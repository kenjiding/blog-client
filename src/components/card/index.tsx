
import styles from './card.module.scss';

export default function Card({
  front,
  back
}: {
  front: React.ReactNode
  back: React.ReactNode
}) {
  return <div className={styles["card-container"]}>
    <div className={styles.card}>
      <div className={`${styles['card-face']} ${styles['card-front']}`}>
        {front}
      </div>
      <div className={`${styles['card-face']} ${styles['card-back']}`}>
        {back}
      </div>
    </div>
  </div>
}