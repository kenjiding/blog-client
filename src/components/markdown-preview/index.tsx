import ReactMarkdown, { Components } from 'react-markdown';
import styles from './index.module.scss';
import 'highlight.js/styles/night-owl.css';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

export default function MarkdownPreview({ text }: {
  text: string
}) {
  return <ReactMarkdown
    className={styles.markdown}
    rehypePlugins={[rehypeHighlight, remarkGfm]}
    components={{
      img: (props: any) => {
        return <img {...props} style={{ maxWidth: '100%'}} />
      },
      input: ({ checked }) => (
        <span style={{ color: checked ? 'green' : 'inherit' }}>
          {checked ? '☑️' : '⬜️'}
        </span>
      )
    }}>{text}</ReactMarkdown>
}