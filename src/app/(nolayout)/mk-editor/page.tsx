'use client'
import React, { useState } from 'react';
import styles from './index.module.scss';
import 'simplemde/dist/simplemde.min.css';
import 'highlight.js/styles/github.css';
import dynamic from 'next/dynamic';
import { NextPage } from 'next';
import { Input, Button } from 'antd';
import http from '@/utils/http';
import { Col, Row } from 'antd';
import MarkdownPreview from '@/components/markdown-preview';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false });

async function saveData(data: any) {
  return await http.post(`/article/create`, { data });
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
    <div style={{height: '100%', overflow: 'auto', padding: '10px 20px'}}>
      <Row style={{padding: '10px 0'}}>
        <Col span={22}>
          <Input placeholder='Title 标题' value={form.title} onChange={(e) => setForm({...form, title: e.target.value})} />
        </Col>
        <Col span={2} style={{textAlign: 'center'}}>
          <Button type='primary' onClick={save}>保存</Button>
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
        <Button type='primary' onClick={save}>保存</Button>
      </div>
    </div>
  );
}

export default MarkdownEditor;
