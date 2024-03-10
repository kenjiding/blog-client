'use client'
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import 'simplemde/dist/simplemde.min.css';
import 'highlight.js/styles/github.css';
import dynamic from 'next/dynamic';
import { Input, Button, message, Modal } from 'antd';
import http from '@/utils/http';
import { Col, Row } from 'antd';
import MarkdownPreview from '@/components/markdown-preview';
import { IArticle } from '@/components/article';
import { useRouter } from 'next/navigation';
import { catchError } from '@/utils/helper';
import Login from '@/components/login';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false });


async function saveData(data: any) {
  const [err, res] = await catchError(http.post(`/article/create`, { data, ignore: true }));
  if (err) {
    if(err.status === 401) {
      let modalInstance: any = null;
      modalInstance = Modal.info({
        icon: null,
        maskClosable: true,
        className: styles.loginWrapper,
        width: '60%',
        content: <Login onSuccess={() => modalInstance && modalInstance.update({open: false})}></Login>,
        footer: null
      });
    }
    return Promise.reject();
  }
  return res;
}

const MarkdownEditor = ({params}: {
  params: {
    id: number
  }
}) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<IArticle>({
    text: '',
    title: '',
    detial: '',
    tags: '',
    views: 0,
    tips: '',
  });
  const router = useRouter();

  async function getData(id: any) {
    const data = await http.get<IArticle>(`/article/get/${id}`);
    setForm(data);
  }
  
  useEffect(() => {
    params.id && getData(params.id);
  }, [params.id]);

  const save = async () => {
    setLoading(true);
    try {
      await saveData(form);
      message.success('success!')
      router.back();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{height: '100%', overflow: 'auto', padding: '10px 20px'}}>
      <Row style={{padding: '10px 0'}}>
        <Col span={22}>
          <Input placeholder='Title 标题' value={form.title} onChange={(e) => setForm({...form, title: e.target.value})} />
        </Col>
        <Col span={2} style={{textAlign: 'center'}}>
          <Button loading={loading} type='primary' onClick={save}>{params.id ? '编辑' : '新增'}</Button>
        </Col>
      </Row>
      <Row style={{padding: '0px 0 20px 0'}} gutter={16}>
        <Col span={12}>
          <Input placeholder='tags 标签' value={form.tags} onChange={(e) => setForm({...form, tags: e.target.value})} />
        </Col>
        <Col span={12}>
          <Input placeholder='tips 提示' value={form.tips} onChange={(e) => setForm({...form, tips: e.target.value})} />
        </Col>
      </Row>
      <div className={styles['markdown-editor']}>
        <div className={styles.editor}>
          <SimpleMDE value={form.text} onChange={(val) => setForm({...form, text: val})} />
        </div>
        <div className={styles.preview}>
          <MarkdownPreview text={form.text}></MarkdownPreview>
        </div>
      </div>
      <div style={{margin: '50px 30px 20px 30px', textAlign: 'center'}}>
        <Button loading={loading} type='primary' onClick={save}>{params.id ? '编辑' : '新增'}</Button>
      </div>
    </div>
  );
}

export default MarkdownEditor;
