// "use client"
import React from 'react';
import styles from './id.module.scss';
import 'highlight.js/styles/night-owl.css';
import http from '@/utils/http';
import Tags from '@/components/tags';
import { IArticle } from '@/components/article';
import MarkdownPreview from '@/components/markdown-preview';

interface IArticalProps {
  params: {
    id: string
  }
}

async function counter(id: any) {
  return await http.get(`/article/counter/${id}`);
}

async function getData(id: any) {
  return await http.get<IArticle>(`/article/get/${id}`);
}

const MarkdownEditor: React.FC<IArticalProps> = async ({ params }) => {
  const articleData: IArticle = await getData(params.id);
  counter(params.id);

  return (
    <div className={styles.wrapper}>
      <div className='prose'>
        <h1>{articleData.title}</h1>
        <div className={styles.info}>
          <span>views: {articleData.views}</span>
          <span id='edit-article-button'>Date: {articleData.createTime}</span>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                document.getElementById('edit-article-button').addEventListener('click', function() {
                  window.location.href = '/editor/' + ${articleData.id};
                });
              `,
            }}
          />
        </div>
        { articleData.tips ? <p className={styles.tips}>Tips: {articleData.tips}</p> : null }
        <div className={styles.preview}>
          <MarkdownPreview text={articleData.text}></MarkdownPreview>
        </div>
      </div>

      <div style={{padding: '20px'}}>
        <Tags tags={articleData.tags}></Tags>
      </div>
    </div>
  );
}

export default MarkdownEditor;
