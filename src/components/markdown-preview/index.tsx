import ReactMarkdown, { Components } from 'react-markdown';
import styles from './index.module.scss';
import 'highlight.js/styles/night-owl.css';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

// 代码块
const CodeBlock = (data: any) => {
  const isCodeBlock = data.className && typeof data.children !== 'string';
  return (
    isCodeBlock ? 
      <pre className='bg-gray-900'>
        <code {...data}></code>
      </pre> :
      <code {...data} className={styles.code}></code>
  );
};

export default function MarkdownPreview({ text }: {
  text: string
}) {
  return <ReactMarkdown
    className={styles.markdown}
    rehypePlugins={[rehypeHighlight, remarkGfm]}
    components={{
      img: (props: any) => {
        return <img {...props} style={{ maxWidth: '100%'}} alt='' />
      },
      input: ({ checked }) => (
        <span style={{ color: checked ? 'green' : 'inherit' }}>
          {checked ? '☑️' : '⬜️'}
        </span>
      ),
      code: CodeBlock
    }}>{text}</ReactMarkdown>
}