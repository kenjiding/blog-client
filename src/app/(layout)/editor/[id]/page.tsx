'use client'
import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { Input, Button, message, Modal, Select } from 'antd';
import http from '@/utils/http';
import { Col, Row } from 'antd';
import { IArticle } from '@/components/article';
import { useRouter } from 'next/navigation';
import { catchError } from '@/utils/helper';
import Login from '@/components/login';
import styles from './index.module.scss';
import MarkdownIt from 'markdown-it';
import 'react-markdown-editor-lite/lib/index.css';
import { typeData } from '@/configs/static-config';

const mdParser = new MarkdownIt();
const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false,
});


async function saveData(data: IArticle) {
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
  const editorRef = useRef(null); // 创建一个引用
  const [form, setForm] = useState<IArticle>({
    text: '',
    title: '',
    detial: '',
    tags: '',
    views: 0,
    tips: '',
    image: '',
    type: '',
  });
  const router = useRouter();

  async function getData(id: number) {
    const data = await http.get<IArticle>(`/article/get/${id}`);
    setForm(data);
  }
  
  useEffect(() => {
    params.id && getData(params.id);
  }, [params.id]);

  const imageUploadFunction = (file: File, callback: (url: string) => void) => {
    const formData = new FormData();
    formData.append('file', file);

    http.post(`/file/upload`, {
      body: formData,
    })
    .then((data: any) => {
      callback(data.imageUrl); // 调用 onSuccess 并传入图片 URL
    })
    .catch((error) => {
      console.log('error: ', error);
    });
  };

  const save = async () => {
    setLoading(true);
    try {
      await saveData(form);
      message.success('success!')
      router.push(`/article/${params.id}`);
    } finally {
      setLoading(false);
    }
  }

  const handleEditorChange = ({ text }: { text: string }) => {
    setForm({...form, text})
  };

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
      <Row style={{padding: '0px 0 20px 0'}} gutter={16}>
        <Col span={12}>
          <Input placeholder='图片 image' value={form.image} onChange={(e) => setForm({...form, image: e.target.value})} />
        </Col>
        <Col span={12}>
          <Select
            showSearch
            placeholder="Select a type"
            onChange={(val) => setForm({...form, type: val})}
            options={typeData}
          />
        </Col>
      </Row>
      <div className={styles['markdown-editor']}>
        <MdEditor
          className={styles.markdown}
          value={form.text}
          style={{ height: '100%', width: '100%' }}
          renderHTML={(text: string) => mdParser.render(text)}
          onChange={handleEditorChange}
          onImageUpload={imageUploadFunction}
        />
      </div>
      <div style={{margin: '50px 30px 20px 30px', textAlign: 'center'}}>
        <Button loading={loading} type='primary' onClick={save}>{params.id ? '编辑' : '新增'}</Button>
      </div>
    </div>
  );
}

export default MarkdownEditor;
