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
  image: string;
  type: string;
}

const fetchData = async () => {
  return await http.get<IArticle[]>('/article/get', {
    next: {
      revalidate: 60
    },
  });
}

export default async function ArticleCom() {
  const articleData = await fetchData();

  return <div className="flex-auto">
    <ul className={`${styles.wrapper}`}>
      {
        articleData.map((item, index) => {
          return <Link href={`/article/${item.id}`} key={item.id}>
            <li className={styles.article} style={{'--i': index} as any}>
              <h2 className={styles.shaket}>{item.title}</h2>
              <div style={{display: 'flex'}}>
                <div className={styles.avator}>
                  <Image width="200" height="200" alt='' src={item.image || "/images/logo.png"}></Image>
                </div>
                <div style={{margin: '0 20px', flex: '1'}}>
                  <i className={styles.detail}>{item.text?.substring(0, 300)}</i>
                  <div className={styles.tags}><Tags tags={item.tags}></Tags></div>
                  <p className={styles.date}>
                    <span style={{fontSize: '13px', color: '#827e7e'}}>views: {item.views}</span>
                    <span style={{fontSize: '13px', color: '#827e7e', textAlign: 'right'}}>创建时间：{item.createTime}</span>
                  </p>
                </div>
              </div>
            </li>
          </Link>
        })
      }
    </ul>
  </div>
}