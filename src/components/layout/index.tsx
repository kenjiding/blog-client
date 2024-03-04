import React, { FC, ReactNode } from 'react';
import Summary from "../summary"

interface IProps {
  children: ReactNode
}

const Layout: FC<IProps> = ({ children }) => {
  return <main style={{display: 'flex'}}>
    <Summary></Summary>
    <div style={{flex: '1', overflow: 'hidden'}}>{children}</div>
  </main>
}

export default Layout;