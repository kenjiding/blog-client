import HeroSvg from "@/assets/icons/HeroSvg";
import Job from "@/components/pages/Job";
import Social from "@/components/Social";
import { Slide } from "@/components/animation/Slide";
import ContributionGraph from "@/components/pages/GithubCalendarComponent";
import DownloadPDFButton from "@/components/DownloadPDFButton";


// 个人简介说明：一个人支撑起整个前后端，云部署的80%的工作
export default async function Home() {
  const profile: any[] = [{
    _id: "60f4e3b4b7d1e4f7b0b1c5b7",
    headline: "Hi, I'm Kenji Ding as a full-stack developer with 7 years of experience",
    shortBio: `
    I am a seasoned developer with a proven track record of delivering high-quality solutions. Developed a GitHub open-source project with over 100 stars. I have built multiple independent website services from the ground up, skilled in Node.js, NestJS, Express, and related frameworks. On the front-end, I am highly proficient in React, Vue, Webpack, and Vite, Micro Front-end, and skilled in building responsive websites and applications across PC, mobile, and desktop. My experience spans full-stack development, microservices, cloud technologies like AWS, and SEO optimization. I am passionate about performance optimization and latest tech exploration. I specialize in writing clean, test-driven code, ensuring project stability through comprehensive testing (TDD and E2E). As an individual contributor, I have independently handled 80% of the front-end, back-end, and cloud deployment work in multiple projects, working collaboratively to deliver innovative, efficient, and user-centric solutions`,
    socials: {
      github: "",
    },
  }];

  return (
    <main className="max-w-7xl mx-auto  px-6 lg:mt-32 mt-20">
      <section className="relative flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 mb-16 min-h-[600px] md:min-h-[500px]">
        {/* 背景 SVG */}
        <div className="absolute inset-0 z-0">
          <HeroSvg className="w-full h-full object-contain opacity-30 dark:opacity-20" />
        </div>

        {/* 前景内容 */}
        <div className="relative z-10 flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 w-full max-w-6xl mx-auto">
          {/* Profile 内容 */}
          {profile &&
            profile.map((data) => (
              <div key={data._id} className="lg:max-w-2xl max-w-2xl">
                <Slide>
                  <h1 className="font-incognito font-semibold tracking-tight text-3xl sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
                    {data.headline}
                  </h1>
                  <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
                    {data.shortBio}
                  </p>
                </Slide>
              </div>
            ))}

          {/* 时钟 */}
          <Slide delay={0.14} className="w-full flex justify-center xl:justify-end">
            <div className="relative z-10">
              <animated-clock-com></animated-clock-com>
            </div>
          </Slide>
        </div>
      </section>
      <div className="flex justify-center">
        <DownloadPDFButton></DownloadPDFButton>
      </div>
      <Slide delay={0.1}>
        <div className="mt-32 mb-32">
          <h2 className="font-incognito text-4xl font-bold tracking-tight animate-bounce">Skills</h2>
          <Social type="frontend" />
          <Social type="backend" />
          <Social type="devOps" />
        </div>
      </Slide>
      <ContributionGraph />
      <Job />
    </main>
  );
}
