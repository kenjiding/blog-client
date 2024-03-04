'use client'
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './index.module.scss';
import rehypeHighlight from 'rehype-highlight';
import 'simplemde/dist/simplemde.min.css';
import 'highlight.js/styles/github.css';
import dynamic from 'next/dynamic';
import { NextPage } from 'next';
import { Input, Button } from 'antd';
import http from '@/utils/http';
import { Col, Row, Space } from 'antd';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false });

async function saveData(data: any) {
  return await http({
    method: 'post',
    url: `http://3.82.26.31:3008/article/create`,
    data
  });
}

const MarkdownEditor: NextPage = () => {
  const [form, setForm] = useState({
    text: '',
    title: '',
    detial: 'sds',
    tags: '',
    views: 0,
    tips: '',
  });

  const save = () => {
    saveData(form);
  }

  return (
    <div style={{height: '100%', overflow: 'auto'}}>
      <div style={{padding: '10px 20px'}}>
        Title:
        <Input value={form.title} onChange={(e) => setForm({...form, title: e.target.value})} />
      </div>
        
      <Row style={{padding: '0px 20px 20px 20px'}} gutter={16}>
        <Col span={12}>
          Tags:<Input value={form.tags} onChange={(e) => setForm({...form, tags: e.target.value})} />
        </Col>
        <Col span={12}>
          Tips:<Input value={form.tips} onChange={(e) => setForm({...form, tips: e.target.value})} />
        </Col>
      </Row>
      <div className={styles['markdown-editor']}>
        <div className={styles.editor}>
          <SimpleMDE value={form.text} onChange={(val) => setForm({...form, text: val})} />
        </div>
        <div className={styles.preview}>
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{form.text}</ReactMarkdown>
        </div>
      </div>
      <div style={{margin: '50px 30px 20px 30px', textAlign: 'center'}}>
        <Button type='primary' onClick={save}>保存</Button>
      </div>
    </div>
  );
}

export default MarkdownEditor;
