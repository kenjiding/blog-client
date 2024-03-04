import styles from './index.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={`${styles.inner} ${styles['inner-te']}`}>
        <i>KENJI</i>
      </p>
      <p className={`${styles.inner}`} style={{paddingTop: '0'}}>
        Contact Me: <a href="mailto:kenjiding807@gmail.com" className={styles.active}><i>kenjiding807@gmail.com</i></a>
      </p>
      <p className={styles['inner']} style={{paddingTop: '0'}}>©2019. Powered by<span className={styles.active}> NextJS </span> & <span className={styles.active}> NestJS</span>.</p>
    </footer>

  )
}