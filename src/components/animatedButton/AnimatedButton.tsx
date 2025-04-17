'use client'
import styles from './AnimatedButton.module.scss';

export default function Login({
  onClick,
  children
}: {
  onClick: () => void,
  children?: React.ReactNode
}) {
  return <div className={styles.wrapper}>
    <a className={styles.button} href="#" onClick={() => onClick && onClick()}>
        {children}
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </a>
  </div>
}

