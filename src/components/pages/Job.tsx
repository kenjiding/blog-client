import Image from "next/image";
import { formatDate } from "@/utils/helper";
import { Slide } from "../animation/Slide";
import RefLink from "../RefLink";
import { AiOutlineCheck } from "react-icons/ai";
import LazyImage from "../LazyImage";
import { jobs } from "@/configs/static-config";

export default async function Job() {
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
        {jobs.map((data, i) => (
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
                        <span className="ml-2 font-mono" dangerouslySetInnerHTML={{__html: desc}}></span>
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
