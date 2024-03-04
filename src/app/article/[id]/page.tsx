"use client"
import React, { useEffect } from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import styles from './id.module.scss';
import 'highlight.js/styles/night-owl.css';
import http from '@/utils/http';
import rehypeHighlight from 'rehype-highlight';

interface IArticalProps {
  articleData: {
    title: string;
    text: string;
  },
  params: {
    id: string
  }
}

async function getData(id: any) {
  return await http<{
    text: string,
    title: string,
    createTime: string,
    views: string,
  }>({ method: 'get', url: `//localhost:3008/article/get/${id}`});
}

const MarkdownEditor: React.FC<IArticalProps> = async ({ params }) => {
  const articleData = await getData(params.id);
  return (
    <div className={styles.wrapper}>
      <div className='prose'>
        <h1>{articleData.title}</h1>
        <div className={styles.info}>
          <span>views: {articleData.views}</span>
          <span>Date: {articleData.createTime}</span>
        </div>
        <div className={styles.preview}>
          <ReactMarkdown
            className={styles.markdown}
            rehypePlugins={[rehypeHighlight]}
            children={articleData.text}></ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default MarkdownEditor;
