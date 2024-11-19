'use client'
import Summary from "@/components/summary";
import styles from './page.module.scss';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Suspense, useEffect, useState } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: any
}>) {
  const [summaryVisible, setSummary] = useState<boolean>(false);

  return (
    <main style={{display: 'flex', height: '100vh'}}>
      <Suspense fallback={<>loading</>}><Summary onClose={setSummary} summaryVisible={summaryVisible}></Summary></Suspense>
      <div className={styles.content}>
        <div className={`${styles.title}`}>Interest is the best teacher, keep your passion for learning</div>
        <Header onLogoClick={setSummary}></Header>
        <Suspense fallback={<></>}><div style={{flex: '1'}}>{children}</div></Suspense>
        <Footer></Footer>
      </div>
    </main>
  );
}
