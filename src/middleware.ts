// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request: any) {
  const { pathname, origin } = request.nextUrl;
  // console.log('pathname: ', pathname);

  // 如果用户访问 /old-route，则重定向到 /new-route
  if (pathname === '/') {
    // return NextResponse.redirect(`${origin}/editor`);
  }

  // 默认继续处理请求
  return NextResponse.next();
}
