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
  return await http.get<IArticle[]>('/article/get');
}

export default async function ArticleCom() {
  const articleData = await fetchData();

  return <div>
    <ul style={{padding: '30px 60px 50px 60px'}}>
      {
        articleData.map(item => {
          return <Link href={`/article/${item.id}`} key={item.id}>
            <li className={styles.article}>
              <div style={{display: 'flex'}}>
                <div className={styles.avator}>
                  <Image alt='' width={200} height={150} src="/images/logo.webp"></Image>
                </div>
                <div style={{margin: '0 20px', flex: '1'}}>
                  <div>
                    <span className={styles.shaket} style={{margin: '0 0 10px 0', fontSize: '25px', fontWeight: '600'}}>{item.title}</span>
                    <span style={{float: 'right', fontSize: '13px', color: '#827e7e'}}>views: {item.views}</span>
                  </div>
                  <i className={styles.ellipsis}>{item.text?.substring(0, 300)}</i>
                  <Tags style={{margin: '15px 0'}} tags={item.tags}></Tags>
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