import { FCPropsWithStyle } from "@/types/common.types";

const Tags: React.FC<FCPropsWithStyle<{
  tags: string
}>> = ({ tags = '', ...rest }) => {
  const list = tags.split(',') || [];
  return <div {...rest}>
    {
      list.map(item => {
        return <span key={item} style={{
          margin: '8px 15px 8px 0', 
          fontSize: '12px',
          borderRadius: '20px',
          backgroundColor: '#d5dfff',
          padding: '3px 10px',
          display: 'inline-block', 
          textAlign: 'center',
          color: '#7d8aee',
        }}>{item}</span>
      })
    }
  </div>
}

export default Tags;