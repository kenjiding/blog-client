'use client'
import { useEffect, useRef, useState } from "react";
import http from "@/utils/http";
import Image from "next/image";
import styles from './index.module.scss';
import Link from "next/link";
import Tags from "../tags";

export default function ArticleCom() {
  const [articleData, setArticleData] = useState<any[]>([]);
  const articleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await http({method: 'get', url: 'http://3.82.26.31:3008/article/get'});
      setArticleData(res as any[]);
    }
    fetchData();
  }, []);

  return <div ref={articleRef}>
    <ul style={{padding: '30px 150px 50px 150px'}}>
      {
        articleData.map(item => {
          return <Link href={`/article/${item.id}`} key={item.id}>
            <li className={styles.article}>
              <div style={{display: 'flex'}}>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '200px'}}>
                  <Image style={{width: '100%', objectFit: 'cover', borderRadius: '10px'}} alt='' width={200} height={150} src="/images/person.webp"></Image>
                </div>
                <div style={{margin: '0 20px', flex: '1'}}>
                  <div>
                    <span className={styles.shaket} style={{margin: '0 0 10px 0', fontSize: '25px', fontWeight: '600'}}>{item.title}</span>
                    <span style={{float: 'right', fontSize: '13px', color: '#827e7e'}}>views: {item.views}</span>
                  </div>
                  <i className={styles.ellipsis}>{item.text?.substring(0, 300)}</i>
                  <Tags style={{margin: '15px 0'}} tags={item.tags}></Tags>
                  <p style={{color: '#6e6e6e', fontSize: '14px'}}>创建时间：{item.createTime}</p>
                </div>
              </div>
            </li>
          </Link>
        })
      }
    </ul>
  </div>
}