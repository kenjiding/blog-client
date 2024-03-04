'use client'
import { Button } from "antd"

export default function Error({ error, reset }: {
  error: Error,
  reset: () => void
}) {
  return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', padding: '20% 30%'}}>
    <div>
      <h3>error react: <span style={{color: 'red'}}>{error.message}</span></h3>
      <p style={{marginTop: '40px'}}><Button onClick={reset}>click here to try rerender</Button></p>
    </div>
  </div>
}