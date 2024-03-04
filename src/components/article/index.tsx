'use client'
import { GetServerSidePropsContext } from "next";
import { useEffect, useRef, useState } from "react";
import http from "@/utils/http";
import Image from "next/image";
import Footer from '../footer'
import styles from './index.module.scss';
import Header from '../header';
import Link from "next/link";

export default function ArticleCom() {
  const [articleData, setArticleData] = useState<any[]>([]);
  const [headerHide, setHeaderHide] = useState<boolean>(false);
  const articleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollDom = articleRef.current?.parentNode;
    if(!scrollDom) return;
    const handler = () => {
      const position = articleRef.current?.getBoundingClientRect();
      if(!position) return;
      if (position.top < -60) {
        // setHeaderHide(true);
      }
      if (position.top > -10) {
        // setHeaderHide(false);
      }
    }
    scrollDom.addEventListener('scroll', handler);

    return () => {
      scrollDom.removeEventListener('scroll', handler);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await http({method: 'get', url: '//localhost:3008/article/get'});
      setArticleData(res as any[]);
    }
    fetchData();
  }, []);

  const tramsformTags = (data = '') => {
    const tags = data.split(',');
    return <>
      {
        tags.map(item => {
          return <span key={item} style={{marginRight: '15px', fontSize: '12px',borderRadius: '20px', backgroundColor: '#b1e1d4', padding: '3px 8px', display: 'inline-block', textAlign: 'center'}}>{item}</span>
        })
      }
    </>
  }

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
                  <i className={styles.ellipsis}>{item.detial}</i>
                  <div style={{margin: '10px 0'}}>
                    {tramsformTags(item.tags)}
                  </div>
                  <p style={{color: '#6e6e6e'}}>创建时间：{item.createTime}</p>
                </div>
              </div>
            </li>
          </Link>
        })
      }
    </ul>
  </div>
}