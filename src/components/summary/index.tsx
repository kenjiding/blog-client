import Image from "next/image";
import styles from './index.module.scss';
import Card from '@/components/card'

export default function Summary() {
  return <div className={styles.wrapper}>
    <div className="" style={{textAlign: 'center', marginTop: '50px', height: '150px'}}>
      <Image className={styles.imageAvator} alt='blog' width={150} height={150} src='/images/person.webp'></Image>
      <h3 className={styles.summary}>Resume</h3>
    </div>
    <div style={{flex: '1', overflow: 'auto'}}>
      <Card
        front={(
          <ul className={styles.content}>
            <li>Focused on React, Vue, Next.js, and front-end engineering;</li>
            <li>Familiar with Node.js; occasionally works on Spring projects. </li>
            <li>Familiar with AWS EC2 deployment, serverless business, Docker, CI/CD, Git Action, and Git Flow workflows.</li>
          </ul>
        )}
        back={(
          <ul className={styles.content}>
            <h1 style={{textAlign: 'center', fontSize: '16px'}}>Project Experience</h1>
            <li>led the refactoring of complex projects.</li>
          </ul>
        )}></Card>


      <Card
        front={(
          <ul className={styles.content}>
            <h1 style={{textAlign: 'center', fontSize: '16px'}}>Project Experience</h1>
            <li>Involved in the development of large-scale SASS projects; BI visualization low-code platform; micro-frontends project integrating multiple large-scale projects; </li>
            <li>led multi-version code deployments; multi-version build solutions;</li>
            <li>led the establishment of a business component library; developed a business scaffolding; </li>
            <li>led the refactoring of complex projects.</li>
          </ul>
        )}
        back={(
          <ul className={styles.content}>
            <h1 style={{textAlign: 'center', fontSize: '16px'}}>Project Experience</h1>
            <li>led the establishment of a business component library; developed a business scaffolding; </li>
          </ul>
        )}></Card>

      
    </div>
  </div>
}