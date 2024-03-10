import { Roboto } from 'next/font/google'
import '@/styles/globals.css'; // 全局样式

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Kenji Ding blog',
  description: 'Technology Blog, focus on react, vue, nextjs, nestjs, docker, nodejs, AWS, EC2',
  keywords: 'front-end, back-end, full-stack, react, vue, nextjs, nestjs, docker, nodejs, AWS, EC2'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        {children}
      </body>
    </html>
  )
}
