import Image from "next/image";
import { formatDate } from "@/utils/helper";
import { Slide } from "../animation/Slide";
import RefLink from "../RefLink";
import { AiOutlineCheck } from "react-icons/ai";
import tencent01 from "@/assets/images/tencent01.png"
import tencent02 from "@/assets/images/tencent02.png"
import LazyImage from "../LazyImage";

export default async function Job() {
  const job: any[] = [
    {
      "_id": "1",
      "url": "https://www.tencent.com/",
      "logo": require("../../assets/images/7cmg-logo.png"),
      "name": "International e-commerce independent website",
      // "jobTitle": "This is an online music exchange platform that supports Tauri desktop on-demand, ordering of derivative products, and more!",
      "summary": "",
      "startDate": "2023/06",
      "endDate": "now",
      "description": [
        `Designed and optimized a high-concurrency order-snapping service using Node.js, Redis, and RabbitMQ, leveraging Lua scripts, distributed locks, and async queues to reduce order processing latency from 200ms to 50ms, stably handling 100,000 requests per second.`,
        `Enhanced SEO for a Next.js e-commerce platform by implementing incremental static regeneration (ISR) and dynamic sitemap generation, improving page load speed by 30% and increasing organic search visibility.`,
        `Using Lambda Serverless architecture to deploy Next.js applications, optimizing scalability and 40% cost reduction.Front-end resources hosted on S3 and CloudFront are efficiently distributed via CDN routing;`,
        `Implemented GitLab CI/CD pipeline to efficiently achieve automated deployment and regression testing, enhancing development and operational efficiency.`,
        `Deployed scalable and high availability full-stack services on AWS with EC2, Load Balancer, and Auto Scaling Groups; leveraged Docker for containerized deployment and Nginx for efficient traffic routing, enhancing system performance and responsiveness.`,
        `Integrate Cypress E2E testing and Lighthouse CI for comprehensive testing and performance monitoring, Greatly improved the fault tolerance and maintainability of the project, keep consistently high performance LCP scores above 85 points.`
      ],
      "images": [require("../../assets/images/7cmg.jpg")]
    },
    {
      "_id": "2",
      "url": "https://www.tencent.com/",
      "logo": require("../../assets/images/tencent.png"),
      "name": "Tencent Technology",
      "jobTitle": "BI Visualization Low-code Platform",
      "startDate": "2021/05",
      "endDate": "2023/03",
      "summary": "This is a low-code SaaS platform that allows for the construction of visual pages through a drag-and-drop method.",
      "description": [
        `Responsible for core rendering engine, system design, maintenance, and code review of low-code BI visualization platform, Built a remote plugin system and CLI scaffold, streamlining development workflows and boosting efficiency.`,
        `Built a serverless service using Node.js to generate web page screenshots with Puppeteer and automatically push them to users, enabling low-cost, maintenance-free automation`,
        `Collaborated on developing a full-link data processing SASS platform, responsible for building themicro frontend engineering framework and handling the integration issues of React and Vue sub-projects, Resolved complex dependency and state management challenges, enhancing system reliability`,
        `Led the development of the company's internal business component library, supporting both full and on-demand imports, enhance the reusability of the same components across different projects.accelerating feature delivery.`,
        `Led the splitting of a large-scale project into monorepo multi-package management, making it easier to maintain and decouple. Implemented multi-version build solutions for the SASS platform`,
        // `Achieved 92% unit test for the core functionality coverage using Jest, and effectively improved code quality and maintainability through the Test-Driven Development (TDD) approach.`
      ],
      "images": [
        tencent01,
        tencent02,
      ],
    },
    {
      "_id": "3",
      "url": "https://www.yy.com/",
      "logo": require("../../assets/images/yy-logo.jpg"),
      "name": "YY Live, Bigo Live Technology",
      "jobTitle": "Data Content Processing Platform Developer",
      "summary": "",
      "startDate": "2019/04",
      "endDate": "2021/04",
      "description": [
        `Maintaining the core logic of the enhanced webRTC interactive live component`,
        `Enhanced project build performance, achieving an 16MB reduction in package size and a notable increase in build access speed.`,
        `Responsible for developing and maintaining the internal YY live data content processing platform, as well as audio and video streaming playback. Participated in the engineering of remote public library sharing using module federation.`,
        // `Implemented a Node.js BFF layer to harmonize data discrepancies and integrate cleansing processes across various live platforms.`,
        `Led the refactoring of the PC project into a responsive project to meet the needs of mobile office work.`
      ],
      "images": [require("../../assets/images/yy-live.jpg")]
    },
    {
      "_id": "4",
      "url": "https://www.rapeseedflower.com/",
      "logo": require("../../assets/images/youcaihua.png"),
      "name": "Rapeseed Flower Game Technology",
      "jobTitle": "Game Store Management System (Desktop)",
      "summary": "",
      "startDate": "2018/02",
      "endDate": "2019/03",
      "description": [
        `Developed a reusable Electron printing component and enhanced frontend data caching with IndexedDB and WebSocket.`,
        `Optimized UI animations and image uploads using requestAnimationFrame and canvas-based compression for improved performance.`
      ]
    }
  ];

  return (
    <section className="mt-32">
      <Slide delay={0.16}>
        <div className="mb-16">
          <h2 className="animate-bounce font-incognito text-4xl mb-4 font-bold tracking-tight">
            Work Experience
          </h2>
        </div>
      </Slide>
      <div>
        {job.map((data, i) => (
          <Slide key={data._id} delay={0.3}>
            <div className="flex max-md:flex-col">
              <div className="relative flex flex-auto items-start lg:gap-x-6 gap-x-4 max-w-2xl
            md:before:absolute md:before:bottom-0 md:before:top-[5rem] md:before:left-9 
            md:before:w-[1px] md:before:h-[calc(100%-70px)] dark:md:before:bg-zinc-800 md:before:bg-zinc-200
            max-md:flex-col max-md:items-center max-md:before:hidden">
                <RefLink
                  href={data.url}
                  className="grid place-items-center dark:bg-primary-bg bg-secondary-bg border 
                dark:border-zinc-800 border-zinc-200 min-h-[80px] min-w-[80px] p-2 rounded-md 
                overflow-clip relative max-md:mb-6"
                >
                  <Image
                    src={data.logo}
                    className="object-cover duration-300"
                    alt={`${data.name} logo`}
                    width={50}
                    height={50}
                  />
                </RefLink>
                <div className="flex flex-col items-start max-md:w-full max-md:items-center max-md:text-center">
                  <h3 className="text-2xl font-semibold">{data.name}</h3>
                  <p className="text-left my-3">{data.jobTitle}</p>
                  <time className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                    {formatDate(data.startDate)} -{" "}
                    {data.endDate ? (
                      formatDate(data.endDate)
                    ) : (
                      <span className="dark:text-primary-color text-tertiary-color">
                        Present
                      </span>
                    )}
                  </time>
                  <div className="text-left tracking-tight dark:text-zinc-400 text-zinc-600 my-4 max-md:w-full">
                    {data.description.map((desc: string, index: number) => (
                      <p key={index} className="max-md:w-full">
                        <AiOutlineCheck className="inline text-green-400" />
                        <span className="ml-2 font-mono">{desc}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex-1 flex justify-center items-center hidden xl:block ml-10">
                {data.images && data.images.map((img: string, index: number) => (
                  <LazyImage key={index} src={img} alt="jj" index={i} />
                ))}
              </div>
            </div>
          </Slide>
        ))}
      </div>
    </section>
  );
}
