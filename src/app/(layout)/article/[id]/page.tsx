import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import styles from './id.module.scss';
import 'highlight.js/styles/night-owl.css';
import http from '@/utils/http';
import Tags from '@/components/tags';
import MarkdownPreview from '@/components/markdown-preview';
import { IArticle } from '@/components/article';


const textGray700StrongClass = 'text-gray-700 font-semibold';
function getHighlightedText(text: string) {
  return text.replace(
    /<span class="highlight-text">([^<]+)<\/span>/g,
    `<strong class="${textGray700StrongClass}">$1</strong>`
  );
}


interface ArticlePageProps {
  params: {
    id: string;
  };
}

// Define a default article structure for fallback
const defaultArticle: IArticle = {
  id: 0,
  title: 'Article Not Found',
  text: 'This article could not be loaded.',
  views: 0,
  createTime: new Date().toISOString(),
  tags: '',
  tips: '',
  detial: '',
  image: '',
  type: '',
};

async function fetchArticle(id: string): Promise<IArticle> {
  try {
    const response = await http.get<IArticle>(`/article/get/${id}`, {
      next: { revalidate: 60 * 60 * 24 * 7 },
    });
    return response;
  } catch (error) {
    console.error(`Failed to fetch article with ID ${id}:`, error);
    // Instead of throwing, return the default article or trigger notFound()
    const err = error as { response?: { status: number } };
    if (err.response?.status === 404) {
      notFound(); // Handle 404 explicitly
    }
    return defaultArticle; // Fallback for other errors
  }
}

async function incrementCounter(id: string): Promise<void> {
  try {
    await http.get(`/article/counter/${id}`);
  } catch (error) {
    console.error(`Failed to increment counter for article ${id}:`, error);
  }
}

const ArticlePage: React.FC<ArticlePageProps> = async ({ params }) => {
  const article = await fetchArticle(params.id);
  incrementCounter(params.id); // Fire-and-forget

  const createTime = article.createTime ?? new Date().toISOString();

  return (
    <div className={styles.wrapper}>
      <article className="prose max-w-none">
        <h1 className="text-4xl font-bold dark:text-white text-zinc-800">{article.title}</h1>
        <div className={styles.info}>
          <span className="dark:text-zinc-300 text-zinc-600">
            Views: {article.views}
            <Link href={`/editor/${params.id}`} prefetch={false}>
              <i style={{ marginLeft: '10px' }} className="hover:underline dark:text-blue-400 text-blue-600">
                edit
              </i>
            </Link>
          </span>
          <span className="dark:text-zinc-300 text-zinc-600">Date: {new Date(createTime).toLocaleDateString()}</span>
        </div>
        {article.tips && (
          <p className={styles.tips}>
            <strong className="dark:text-zinc-200 text-zinc-700">Tips:</strong> 
            <span className="dark:text-zinc-300 text-zinc-600">{article.tips}</span>
          </p>
        )}
        <div className={styles.preview}>
          <MarkdownPreview text={article.text} />
        </div>
      </article>
      <aside style={{ padding: '20px' }}>
        <Tags tags={article.tags} />
      </aside>
    </div>
  );
};

export default ArticlePage;