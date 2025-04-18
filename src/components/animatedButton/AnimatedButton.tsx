'use client'
import styles from './AnimatedButton.module.scss';

export default function Login({
  onClick,
  children
}: {
  onClick?: () => void,
  children?: React.ReactNode
}) {
  return <div className={styles.wrapper}>
    <div className={styles.button} onClick={() => onClick && onClick()}>
        {children}
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
}

