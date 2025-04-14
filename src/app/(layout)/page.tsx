import HeroSvg from "@/assets/icons/HeroSvg";
import Job from "@/components/pages/Job";
import Social from "@/components/Social";
import { Slide } from "@/components/animation/Slide";
import ContributionGraph from "@/components/pages/GithubCalendarComponent";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";

export default async function Home() {
  const profile: any[] = [{
    _id: "60f4e3b4b7d1e4f7b0b1c5b7",
    headline: "Hi, I'm Kenji Ding as a full-stack developer with 7 years of experience",
    shortBio: `
    I have a proven track record of delivering high-quality solutions, Built multiple independent website services from scratch. Proficient in nodejs, nestjs, express and related technical frameworks, front-end react, Vue, build tools and performance optimization. including an open-source project on GitHub with over 100 stars. My expertise spans across Independent website SEO optimization, React, Vue, Electron, Node.js, Java, Docker, and cloud technologies like AWS and Tencent Cloud. I specialize in building responsive websites, PC/mobile/desktop applications, and SaaS platforms, and I’m passionate about performance optimization and cloud service deployment. I am committed to writing clean, test-driven code and ensuring project stability through comprehensive testing (TDD and E2E). With a strong focus on user experience, I collaborate closely with teams to deliver innovative and efficient solutions across both front-end and back-end development.`,
    socials: {
      github: "",
    },
  }];

  return (
    <main className="max-w-7xl mx-auto  px-6 lg:mt-32 mt-20">
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
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 mb-16">
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
        <Slide delay={0.14} className="w-full flex justify-center">
          <animated-clock-com></animated-clock-com>
          {/* <HeroSvg /> */}
        </Slide>
      </section>

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
