import { socialLinks } from "../configs/social";
import RefLink from "./RefLink";
import ShinyText from "@/components/ShinyText";

export default function Social({ type }: { type: string }) {
  return (
    <ul className="flex items-center flex-wrap gap-x-5 gap-y-4 my-10">
      {socialLinks
        .filter((item) => item.status === type)
        .map((value) => (
          <li key={value.id}>
            <RefLink
              href={"#"}
              className="flex items-center border-b dark:border-b-zinc-800 border-zinc-200 group"
            >
              <span className=" group-hover:dark:text-green-500 group-hover:text-zinc-800">
                <value.icon
                  className="flex-shrink-0 h-5 w-5 duration-300 inline-block -mt-1"
                  aria-hidden="true"
                />{" "}
                &nbsp;
                <ShinyText text={value.name}></ShinyText>
              </span>
            </RefLink>
          </li>
        ))}
    </ul>
  );
}
