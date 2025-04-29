import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/layout.css";
import Navbar from "../../components/global/Navbar";
import Footer from "../../components/global/Footer";
import { Providers } from "../../providers";
import MobileSidebar from "@/components/global/SideBar";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";
// const ClockWithWebComponent = dynamic(
//   () => import("@/components/Clock"), // 替换为实际组件路径
//   { ssr: false } // 禁用 SSR
// );

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

const options = {
  title: "kenjiding | Software Developer",
  description:
    "kenjiding Eke is a Software Developer and Technical Writer who is passionate about building solutions and contributing to open source communities",
  url: "https://www.kenjiding.com",
  ogImage:
    "",
};

export const metadata: Metadata = {
  title: options.title,
  metadataBase: new URL(options.url),
  description: options.description,
  openGraph: {
    title: options.title,
    url: options.url,
    siteName: "www.kenjiding.com",
    locale: "en-US",
    type: "website",
    description: options.description,
    images: options.ogImage,
  },
  alternates: {
    canonical: options.url,
  },
  other: {
    "google-site-verification": "IzcWMgn5Qjf-LCtA337KTGjivsf9bmod_1pZ-jxYQh8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="root">
      <MobileSidebar></MobileSidebar>
      <div id="main-content">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </div>
      <ul className="fixed bottom-0 right-10 self-start">
        <li className="text-2xl hover:text-blue-700 cursor-pointer">
          <a href="https://www.linkedin.com/in/kenji-ding-50308527b/" target="_blank"><FaLinkedin></FaLinkedin></a>
        </li>
        <li className="text-2xl mt-5 mb-5 hover:text-gray-700 cursor-pointer">
          <a href="https://github.com/kenjiding" target="_blank"><FaGithub></FaGithub></a>
        </li>
        <li className="text-2xl hover:text-green-700 cursor-pointer">
          <a href="mailto:kenjiding807@gmail.com" target="_blank"><MdOutlineMarkEmailRead></MdOutlineMarkEmailRead></a>
        </li>
        <li className="w-0.5 h-32 bg-orange-400 m-auto mt-5"></li>
      </ul>
      <Script defer src="/js/clock.js" />
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
        />
    </div>
  );
}
