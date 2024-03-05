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
  // const [articleData, setArticleData] = useState<IArticle>({
  //   title: '',
  //   text: '',
  //   createTime: '',
  //   views: 0,
  //   tips:'',
  //   tags: ''
  // });

  // useEffect(() => {
    // init();
  // }, [params.id]);

  // const init = async() => {
  //   const articleData = await getData(params.id);
  //   setArticleData(articleData);
  //   counter(params.id);
  // }
  const articleData: IArticle = await getData(params.id);
  counter(params.id);

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
