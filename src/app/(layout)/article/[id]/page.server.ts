import http from '@/utils/http';
import { IArticle } from '@/components/article';
import { GetStaticProps } from 'next';

interface IArticalProps {
  params: {
    id: string
  },
  articleData: IArticle
}

async function counter(id: any) {
  return await http.get(`/article/counter/${id}`);
}

async function getData(id: any) {
  return await http.get<IArticle>(`/article/get/${id}`);
}

export async function loader({ params }: IArticalProps) {
  const articleData = await getData(params.id);
  return { articleData };
}