"use client"
import React, { useEffect, useState } from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import styles from './id.module.scss';
import 'highlight.js/styles/night-owl.css';
import http from '@/utils/http';
import rehypeHighlight from 'rehype-highlight';
import Tags from '@/components/tags';
interface IArticalProps {
  params: {
    id: string
  }
}

interface IArticle {
  title: string;
  text: string;
  createTime: string;
  views: number;
  tips: string;
  tags: string;
}

async function counter(id: any) {
  return await http({ method: 'get', url: `http://3.82.26.31:3008/article/counter/${id}`});
}

async function getData(id: any) {
  return await http<IArticle>({ method: 'get', url: `http://3.82.26.31:3008/article/get/${id}`});
}

const MarkdownEditor: React.FC<IArticalProps> = ({ params }) => {
  const [articleData, setArticleData] = useState<IArticle>({
    title: '',
    text: '',
    createTime: '',
    views: 0,
    tips:'',
    tags: ''
  });
  
  useEffect(() => {
    init();
  }, [params.id]);

  const init = async() => {
    const articleData = await getData(params.id);
    setArticleData(articleData);
    counter(params.id);
  }

  return (
    <div className={styles.wrapper}>
      <div className='prose'>
        <h1>{articleData.title}</h1>
        <div className={styles.info}>
          <span>views: {articleData.views}</span>
          <span>Date: {articleData.createTime}</span>
        </div>
        { articleData.tips ? <p className={styles.tips}>{articleData.tips}</p> : null }
        <div className={styles.preview}>
          <ReactMarkdown
            className={styles.markdown}
            rehypePlugins={[rehypeHighlight]}>{articleData.text}</ReactMarkdown>
        </div>
      </div>

      <div style={{padding: '20px'}}>
        <Tags tags={articleData.tags}></Tags>
      </div>
    </div>
  );
}

export default MarkdownEditor;
