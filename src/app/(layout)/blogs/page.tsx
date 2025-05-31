import ArticleCom from "@/components/article";
import { typeData } from '@/configs/static-config';
import logo from "@/assets/images/logo.png";
import Image from "next/image";

export default async function Blog() {
  return <div className="md:flex md:p-10">
    <div className="w-3/5 min-w-60 sticky top-32 left-0 self-start hidden md:block">
      <div className="flex flex-col justify-center">
        {/* <div className="m-auto"><Image width="100" height="100" alt='kenjiding logo' src={logo}></Image></div> */}
        {/* <p className="mt-5 mb-5 text-center dark:text-zinc-300 text-zinc-600">Interest is the best teacher, keep your passion for learning</p> */}
      </div>
      <ul>
        {typeData.map((item, i) => (
          <li key={i} className="flex justify-center pt-5 pb-5 pl-10 pr-10 cursor-pointer dark:hover:shadow-[0_0_10px_#4a5568] hover:shadow-[0_0_10px_#2e2e2e] dark:text-zinc-300 text-zinc-700 transition-all duration-300">
            {item.icon("text-2xl")}
            <span className="ml-3 inline-block w-20">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="md:pl-20 md:pr-10">
      <ArticleCom></ArticleCom>
    </div>
  </div>
}