import Head from 'next/head';
import Image from 'next/image';
import AnimatedButton from "@/components/animatedButton/AnimatedButton";

// 项目数据， 熟悉nodejs 高并发编程，性能优化。负载均衡，高可用，高性能，高并发，高可维护，高可扩展，高安全，高效率，高质量，高可读性，高可测试性
const projects = [
  {
    id: 1,
    title: 'job-information-crawler(over 100 github stars)',
    description: 'This is an automated project that scrapes job listings from Seek and LinkedIn, automatically sorts the files by date, and sends them to an email.',
    tech: ['Nodejs', 'Puppeteer', 'React.js', 'TypeScript'],
    link: 'https://github.com/kenjiding/job-information-crawler',
    start: 1212,
    image: '/images/pacong.png',
  },
  {
    id: 2,
    title: 'A high-performance, low-latency live streaming platform based on WebRTC, designed for learning purposes',
    description: 'A real-time live streaming platform like TikTok built with NestJS, Next.js, WebRTC, and mediasoup. This project includes both the frontend and backend for a complete low-latency broadcasting system.',
    tech: ['webRTC', 'mediasoup', 'Nextjs', 'Nestjs'],
    link: 'https://github.com/kenjiding/kenji-live',
    image: '/images/live.jpg',
  },
  {
    id: 3,
    title: 'A PC-based cashier system for a large amusement park.',
    description: 'This is a PC-based cashier system for a large amusement park, featuring automatic software updates, color printing, membership cards, coupons, product management, and order management.',
    tech: ['Electron', 'Node.js', 'Vuejs'],
    link: 'https://github.com/kenjiding/youlebao',
    image: '/images/youlebao.png',
  },
  {
    id: 4,
    title: 'Next.js-based e-commerce website with advanced SEO optimization.',
    description: 'A high-performance SEO-optimized Next.js C-suite project with integrated back-end services supporting high concurrency, integrated Gray-scale release and Google Analytics (GA4) and Google Search for improved SEO rankings.',
    tech: ['SEO', 'SSR', 'Nextjs', 'Lambda', 'CloudFront', 'React.js', 'Postgres', 'Drizzle orm'],
    link: 'https://github.com/kenjiding/chengyi-website',
    image: '/images/dianshang.png',
  },
  {
    id: 5,
    title: 'Java-based intelligent e-commerce management website.',
    description: 'This is a next-generation intelligent e-commerce management project, featuring complex functionalities, route permissions, user and operation permissions management, and highly efficient product listing and delisting.',
    tech: ['Java', 'EC2', 'Nginx', 'Docker', 'Mysql'],
    link: 'https://github.com/kenjiding/outside',
    image: '/images/admin.png',
  },
  {
    id: 6,
    title: 'RN-based bill-sharing app.',
    description: 'This is a bill-sharing app that uses facial recognition to automatically sort utility bills (water, electricity, gas) and send them to an email. It also supports multi-user bill sharing.',
    tech: ['React Native', 'Mqtt', 'express', 'MongoDB'],
    link: 'https://github.com/kenjiding/billshare-app',
    image: '/images/bill.png',
  },
  {
    id: 29,
    title: 'High Cohesion · Lightweight Business components library',
    description: `High Cohesion · Lightweight · Cross-Ecosystem"
      Deeply integrating core business modules through dynamic External orchestration, intelligent CSS/JS atomic splitting, and a dual-mode build system, achieving on-demand loading acceleration of 40%+ and build size reduction of 65%. Seamlessly supports React/Vue multi-framework integration, covering 80% of mid-to-backend scenarios, driving 15+ product lines towards standardization and boosting development efficiency`,
    tech: ['Vuejs', 'React.js', 'rollup', 'webpack', 'gulp', 'TypeScript'],
    link: '#',
    image: '/images/ui.png',
  },
  {
    id: 7,
    title: 'blog service',
    description: 'This is a blog service deployed in EC2 using Docker, Nginx and other technologies. It includes features such as CRUD (Create, Read, Update, Delete), Comments, Likes and User Rights Management for blog posts.',
    tech: ['Nestjs', 'AWS', 'EC2', 'Serverless', 'Lambda', 'Mysql', 'Node.js'],
    link: 'https://github.com/kenjiding/blog-server',
    image: '/images/cicd.jpg',
  },
  {
    id: 8,
    title: 'blog client',
    description: 'This is a Next.js client for a blog, featuring a stylish UI design, resume information, CRUD (Create, Read, Update, Delete) for articles, comments, likes, and user permission management.',
    tech: ['Nextjs', 'SEO', 'React', 'Node.js', 'postgres'],
    link: 'https://github.com/kenjiding/blog-clients',
    image: '/images/cicd.jpg',
  },
];
export default function Projects() {
  return (
    <>
      <Head>
        <title>我的项目 | 个人博客</title>
        <meta name="description" content="展示我的个人项目和技术能力" />
      </Head>
      <div className='flex justify-center mb-14'>
        <AnimatedButton>
          <h1 className='text-3xl'>Open-source project</h1>
        </AnimatedButton>
      </div>

      <div className="min-h-screen bg-transparent text-white overflow-hidden pt-6">
        {/* 项目时间线 */}
        <main className="max-w-4xl mx-auto px-6 pb-20 relative">
          {/* 时间线中央线 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full 
                        bg-gradient-to-b from-gray-500 to-gray-800 
                        animate-[lineGlow_4s_ease-in-out_infinite]" />

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="relative flex items-center justify-center group"
              >
                {/* 时间线节点 */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 
                              bg-gray-300 rounded-full border-4 border-gray-500 
                              transition-all duration-400 ease-out
                              group-hover:scale-150 group-hover:shadow-[0_0_15px_rgba(209,213,219,0.8)] 
                              animate-[pulseNode_2s_ease-in-out_infinite]" />

                {/* 项目卡片 */}
                <div
                  className={`w-full md:w-4/12 p-4 bg-gray-900/70 rounded-3xl 
                            border-4 border-gray-700 backdrop-blur-md
                            transition-all duration-400 ease-out
                            group-hover:rotate-2 group-hover:scale-105 
                            group-hover:shadow-[8px_8px_0px_rgba(107,114,128,0.8)]
                            group-hover:border-gray-500
                            ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}
                >
                  <div className="relative overflow-hidden rounded-2xl mb-3">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-auto object-contain 
                               transition-transform duration-600 ease-out
                               group-hover:scale-110 group-hover:rotate-[-2deg]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent 
                                  opacity-50 group-hover:opacity-70 transition-opacity duration-400" />
                  </div>

                  <h2 className="text-lg font-bold mb-2 text-white 
                               transition-colors duration-300 group-hover:text-gray-300"
                  >
                    {project.title}
                  </h2>
                  {/* <p className="text-gray-400 text-xs mb-3 line-clamp-2">
                    {project.description}
                  </p> */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 py-0.5 bg-gray-700/30 text-gray-300 text-[10px] 
                                 font-medium rounded-full border border-gray-600/50
                                 transition-all duration-300
                                 group-hover:bg-gray-600/50 group-hover:border-gray-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-1.5 bg-transparent text-gray-300 
                             font-bold rounded-full border-2 border-gray-500
                             transition-all duration-300
                             hover:bg-gray-500 hover:text-white hover:scale-110 
                             hover:shadow-[0_0_15px_rgba(107,114,128,0.7)]"
                  >
                    More Details
                  </a>
                </div>

                {/* 描述 - hover 时渐显 */}
                <div
                  className={`absolute w-full md:w-6/12 p-4 bg-gray-900/70 rounded-3xl 
                            border-4 border-gray-700 backdrop-blur-md
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out
                            ${index % 2 === 0 ? 'md:left-1/2 md:ml-12' : 'md:right-1/2 md:mr-12'}`}
                >
                  <p className="text-gray-400 text-lg">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}