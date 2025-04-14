'use client';

import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import Image from 'next/image';

// 类型定义
interface Job {
  _id: string;
  url: string;
  logo?: string;
  name: string;
  jobTitle?: string;
  summary?: string;
  startDate: string;
  endDate: string;
  description: string[];
  images?: string[];
}

const job: Job[] = [
  {
    _id: '1',
    url: 'https://www.tencent.com/',
    logo: '/images/7cmg-logo.png',
    name: 'International e-commerce independent website',
    startDate: '2023/06',
    endDate: 'now',
    description: [
      `Designed and optimized a high-concurrency order-snapping service using Node.js, Redis, and RabbitMQ, leveraging Lua scripts, distributed locks, and async queues to reduce order processing latency from 200ms to 50ms, stably handling 100,000 requests per second.`,
      `Enhanced SEO for a Next.js e-commerce platform by implementing incremental static regeneration (ISR) and dynamic sitemap generation, improving page load speed by 30% and increasing organic search visibility.`,
      // 其他描述...
    ],
    images: ['/images/7cmg.jpg'],
  },
  {
    _id: '2',
    url: 'https://www.tencent.com/',
    logo: '/images/tencent.png',
    name: 'Tencent Technology',
    jobTitle: 'BI Visualization Low-code Platform',
    startDate: '2021/05',
    endDate: '2023/03',
    summary: 'This is a low-code SaaS platform that allows for the construction of visual pages through a drag-and-drop method.',
    description: [
      `Responsible for core rendering engine, system design, maintenance, and code review of low-code BI visualization platform, Built a remote plugin system and CLI scaffold, streamlining development workflows and boosting efficiency.`,
      // 其他描述...
    ],
    images: ['/images/tencent01.jpg', '/images/tencent02.jpg'],
  },
  // 其他 job 数据...
];

const ResumeDownload: React.FC = () => {
  const resumeRef = useRef<HTMLDivElement>(null);

  const downloadPDF = async () => {
    if (!resumeRef.current) return;

    const element = resumeRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('resume.pdf');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* 下载按钮 */}
      <button
        onClick={downloadPDF}
        className="mb-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
      >
        Download Resume as PDF
      </button>

      {/* 简历内容 */}
      <div
        ref={resumeRef}
        className="bg-white p-8 shadow-xl rounded-lg border border-gray-200"
      >
        {/* 标题 */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">My Resume</h1>
        <p className="text-gray-600 mb-8">Professional Experience</p>

        {/* 工作经历 */}
        {job.map((item) => (
          <div key={item._id} className="mb-8">
            <div className="flex items-center mb-4">
              {item.logo && (
                <Image
                  src={item.logo}
                  alt={`${item.name} logo`}
                  width={40}
                  height={40}
                  className="mr-4"
                />
              )}
              <div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-semibold text-blue-600 hover:underline"
                >
                  {item.name}
                </a>
                <p className="text-gray-500">
                  {item.startDate} - {item.endDate}
                </p>
              </div>
            </div>
            {item.jobTitle && (
              <p className="text-lg font-medium text-gray-700 mb-2">
                {item.jobTitle}
              </p>
            )}
            {item.summary && (
              <p className="text-gray-600 mb-4 prose">{item.summary}</p>
            )}
            <ul className="list-disc pl-6 mb-4">
              {item.description.map((desc, index) => (
                <li key={index} className="text-gray-700 mb-2">
                  {desc}
                </li>
              ))}
            </ul>
            {item.images && item.images.length > 0 && (
              <div className="flex gap-4">
                {item.images.map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt={`${item.name} image ${ index + 1}`}
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeDownload;