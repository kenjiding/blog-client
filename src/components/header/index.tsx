'use client'
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import DownloadPDFButton from "@/components/DownloadPDFButton";

const Home = ({
  onLogoClick
}: {
  onLogoClick?: (val: any) => void
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if(!ref.current) return;
    function handler(e: Event) {
      const position = ref.current?.getBoundingClientRect();
      if(!position) return;
      if(position.top < 5) {
        setVisible(true);
      }
      if(position.top > 10) {
        setVisible(false);
      }
    }
    ref.current.parentNode?.addEventListener('scroll', handler);

    return () => {
      if(ref.current) ref.current?.parentNode?.removeEventListener('scroll', handler);
    }
  }, []);


  const logoClick = (e: any) => {
    // if(!isMobile()) return;
    e.stopPropagation();
    onLogoClick && onLogoClick(true);
  };

  return (
    <header className={styles.header} ref={ref}>
      <div style={{flex: '2'}}>
        <span className={styles.logo} onClick={logoClick}>Kenji</span>
      </div>
      {
        <div className={`${styles.sentence} ${visible && styles['sentence-show']}`}>
        Interest is the best teacher, keep your passion for learning
        </div>
      }
      <nav style={{flex: '3', textAlign: 'right'}}>
        <Link href="/" className={`${styles['menu-item']}`}>Home</Link>
        <Link href="/article" className={styles['menu-item']}>Article</Link>
      </nav>
    </header>

  );
};

export default Home;
