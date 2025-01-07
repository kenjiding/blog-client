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