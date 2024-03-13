import http from "@/utils/http";
import Image from "next/image";
import styles from './index.module.scss';
import Link from "next/link";
import Tags from "../tags";

export interface IArticle {
  id?: number;
  title: string;
  text: string;
  createTime?: string;
  views: number;
  tips: string;
  tags: string;
  detial: string;
}

const fetchData = async () => {
  return await http.get<IArticle[]>('/article/get', {
    cache: 'no-cache'
  });
}

export default async function ArticleCom() {
  const articleData = await fetchData();

  return <div>
    <ul className={styles.wrapper}>
      {
        articleData.map((item, index) => {
          return <Link href={`/article/${item.id}`} key={item.id}>
            <li className={styles.article} style={{'--i': index} as any}>
              <h2 className={styles.shaket}>{item.title}</h2>
              <div style={{display: 'flex'}}>
                <div className={styles.avator}>
                  <Image width="130" height="130" alt='' src="/images/logo.webp"></Image>
                </div>
                <div style={{margin: '0 20px', flex: '1'}}>
                  <div>
                    <span style={{float: 'right', fontSize: '13px', color: '#827e7e'}}>views: {item.views}</span>
                  </div>
                  <i className={styles.detail}>{item.text?.substring(0, 300)}</i>
                  <div className={styles.tags}><Tags tags={item.tags}></Tags></div>
                  <p className={styles.date}>创建时间：{item.createTime}</p>
                </div>
              </div>
            </li>
          </Link>
        })
      }
    </ul>
  </div>
}