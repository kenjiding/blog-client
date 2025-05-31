
import tencent01 from "../assets/images/tencent01.png"
import tencent02 from "../assets/images/tencent02.png"
import { FaAws, FaNodeJs, FaReact, FaVuejs, FaScrewdriverWrench } from "react-icons/fa6";
import {
  HiBeaker,
  HiBookmarkAlt,
  HiUser,
} from "react-icons/hi";

export const typeData = [
  {
    value: 'aws',
    label: 'AWS',
    icon: (className?: string) => <FaAws className={`text-orange-500 ${className}`} />,
  },
  {
    value: 'nodejs',
    label: 'Nodejs',
    icon: (className?: string) => <FaNodeJs className={`text-green-500 ${className}`} />,
  },
  {
    value: 'react',
    label: 'React',
    icon: (className?: string) => <FaReact className={`text-blue-500 ${className}`} />,
  },
  {
    value: 'vue',
    label: 'Vue',
    icon: (className?: string) => <FaVuejs className={`text-green-500 ${className}`} />,
  },
  {
    value: 'oAndM',
    label: 'O&M',
    icon: (className?: string) => <FaScrewdriverWrench className={`text-orange-500 ${className}`} />,
  },
];


export const MenuData = [
  {
    title: "Home",
    href: "/",
    icon: HiUser,
  },
  {
    title: "Blog",
    href: "/blog",
    icon: HiBookmarkAlt,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: HiBeaker,
  },
];

export const jobs: any[] = [
  {
    "_id": "1",
    "url": "https://www.tencent.com/",
    "logo": require("../assets/images/7cmg-logo.png"),
    "name": "International e-commerce independent website",
    "jobTitle": "Senior Full Stack Engineer",
    "projectDesc": "Independently architected and delivered a scalable full-stack e-commerce platform with high availability, low-latency order processing, serverless deployment, SEO optimization, and automated CI/CD and testing pipelines, resulting in significant performance, cost, and maintainability improvements.",
    "summary": "",
    "startDate": "2023/06",
    "endDate": "now",
    "techStack": ["Next.js", "Node.js", "Nest.js", "Redis", "RabbitMQ", "AWS", "GitLab CI/CD"],
    "description": [
      `Designed and optimized a <span class="highlight-text">high-concurrency</span> order-snapping service using 
        <span class="highlight-text">Node.js</span>, <span class="highlight-text">Redis</span>, and 
        <span class="highlight-text">RabbitMQ</span>, leveraging <span class="highlight-text">Lua scripts</span>, 
        distributed locks, and async queues to reduce order processing latency from <span class="highlight-text">200ms to 50ms</span>, 
        stably handling <span class="highlight-text">100,000</span> requests per second.`,
      `Enhanced <span class="highlight-text">SEO</span> for a <span class="highlight-text">Next.js</span> 
      e-commerce platform by implementing <span class="highlight-text">incremental static regeneration (ISR)</span> 
      and dynamic sitemap generation, improving page load speed by <span class="highlight-text">30%</span> and 
      increasing organic search visibility.`,
      `Using <span class="highlight-text">Lambda Serverless</span> architecture to deploy Next.js applications, 
      optimizing scalability and <span class="highlight-text">40% cost reduction</span>. Front-end resources hosted on 
      <span class="highlight-text">S3</span> and <span class="highlight-text">CloudFront</span> are efficiently 
      distributed via <span class="highlight-text">CDN</span> routing.`,
      `Implemented <span class="highlight-text">GitLab CI/CD</span> pipeline to efficiently achieve automated deployment 
      and regression testing, enhancing development and operational efficiency.`,
      `Deployed scalable and high availability full-stack services on <span class="highlight-text">AWS</span> with 
      <span class="highlight-text">EC2</span>, <span class="highlight-text">Load Balancer</span>, and 
      <span class="highlight-text">Auto Scaling Groups</span>; leveraged <span class="highlight-text">Docker</span> 
      for containerized deployment and <span class="highlight-text">Nginx</span> for efficient traffic routing, 
      enhancing system performance and responsiveness.`,
      `Integrate <span class="highlight-text">Cypress E2E</span> testing and <span class="highlight-text">Lighthouse CI</span> 
      for comprehensive testing and performance monitoring, Greatly improved the fault tolerance and maintainability of the project, 
      keep consistently <span class="highlight-text">high performance</span> scores above 
      <span class="highlight-text">95 points</span>.`
    ],
    "images": [require("../assets/images/7cmg.jpg")]
  },
  {
    "_id": "2",
    "url": "https://www.tencent.com/",
    "logo": require("../assets/images/tencent.png"),
    "name": "Tencent Technology (China) Co., Ltd",
    "jobTitle": "Senior Full Stack Engineer",
    "projectDesc": "Designed and implemented a SaaS-based low-code platform for enterprise-level data analytics, enabling external database integration, data modeling, field cleansing, and dimension configuration. The platform empowers users to complete the entire data pipeline—from ingestion to BI visualization—without writing any code.",
    "startDate": "2021/05",
    "endDate": "2023/03",
    "summary": "This is a low-code SaaS platform that allows for the construction of visual pages through a drag-and-drop method.",
    "techStack": ["React", "Vue", "Node.js", "Monorepo", "Micro Frontend", "Webpack", "Rollup", "Puppeteer", "SASS"],
    "description": [
      `Responsible for <span class="highlight-text">core rendering engine</span>, system design, maintenance, and code review of 
      <span class="highlight-text">low-code BI visualization platform</span>, Built a 
      <span class="highlight-text">remote plugin system</span> and <span class="highlight-text">CLI scaffold</span>, 
      streamlining development workflows and boosting efficiency.`,
      `Built a <span class="highlight-text">serverless</span> service using Node.js to generate web page screenshots with 
      <span class="highlight-text">Puppeteer</span> and automatically push them to users, enabling low-cost, 
      maintenance-free automation.`,
      `Collaborated on developing a full-link data processing <span class="highlight-text">SASS platform</span>, 
      responsible for building the <span class="highlight-text">micro frontend</span> engineering framework 
      and handling the integration issues of <span class="highlight-text">React</span> and 
      <span class="highlight-text">Vue</span> sub-projects, Resolved complex dependency and state management challenges, 
      enhancing system reliability.`,
      `Led the development of the company's internal <span class="highlight-text">business component library</span>, 
      supporting both full and on-demand imports, enhance the reusability of the same components across different projects, 
      accelerating feature delivery.`,
      `Led the splitting of a large-scale project into <span class="highlight-text">monorepo multi-package</span> management, 
      making it easier to maintain and decouple. Implemented <span class="highlight-text">multi-version build solutions</span> for the SASS platform.`,
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
    "logo": require("../assets/images/yy-logo.jpg"),
    "name": "YY Live, Bigo Live Technology",
    "projectDesc": "Data Content Processing Platform Developer",
    "summary": "",
    "startDate": "2019/04",
    "endDate": "2021/04",
    "jobTitle": "Mid-level Frontend Engineer",
    "techStack": ["Web Component", "React", "Vue", "Redux", "Vuex", "Webpack"],
    "description": [
      `Built a reusable Component library with <span class="highlight-text">Web Component</span> and Shadow DOM, enabling cross-framework integration and powering a design system used by 3+ teams`,
      `Enhanced project build performance, achieving an <span class="highlight-text">16MB</span> reduction in package size and a notable increase in build access speed.`,
      `Responsible for developing and maintaining the internal YY live data content processing platform, as well as audio and video streaming playback. Participated in the engineering of remote public library sharing using <span class="highlight-text">module federation</span>.`,
      // `Implemented a Node.js BFF layer to harmonize data discrepancies and integrate cleansing processes across various live platforms.`,
      `Led the refactoring of the PC project into a responsive project to meet the needs of mobile office work.`
    ],
    "images": [require("../assets/images/yy-live.jpg")]
  },
  {
    "_id": "4",
    "url": "https://www.rapeseedflower.com/",
    "logo": require("../assets/images/youcaihua.png"),
    "name": "Rapeseed Flower Game Technology",
    "jobTitle": "Frontend Engineer",
    "projectDesc": "Game Store Management System (Desktop)",
    "summary": "",
    "startDate": "2018/02",
    "endDate": "2019/03",
    "techStack": ["React", "Node.js", "Electron", "Webpack"],
    "description": [
      `Developed a reusable <span class="highlight-text">Electron printing component</span> and enhanced frontend data caching with IndexedDB and WebSocket.`,
      `Optimized UI animations and image uploads using requestAnimationFrame and canvas-based compression for improved performance.`
    ]
  }
];