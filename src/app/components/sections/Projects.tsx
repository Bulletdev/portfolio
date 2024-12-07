import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import Link from "next/link";
import { ProjectsProps } from "../../page";
import { BackgroundGradient } from "../ui/background-gradient";
import { GrLinkNext } from "react-icons/gr";
import { FaArrowDown } from "react-icons/fa6";

export default function Projects({ onSetExperienceSection }: ProjectsProps) {
  return (
    <div
      className="max-md:hidden max-lg:col-span-1 max-lg:row-span-1 col-span-2 row-span-6 col-start-5 bg-spotify-light-dark rounded-xl overflow-hidden"
      id="projects"
    >
      <div className="p-4">
        <div className="flex gap-3 justify-center">
          {/* Primary Button (Green) */}
          <button className="flex items-center justify-center text-sm font-bold bg-spotify-green hover:bg-spotify-dark-green hover:scale-105  px-4 py-2.5 rounded-full gap-2 transition-all duration-200">
            Projetos Recentes
            <FaArrowDown className="text-base" />
          </button>

          {/* Secondary Button (White Border) */}
          <button
            className="flex items-center justify-center text-sm font-bold border border-[#727272] hover:border-white hover:scale-105 text-white px-4 py-2.5 rounded-full gap-2 transition-all duration-200"
            onClick={onSetExperienceSection}
          >
            Demais Projetos
            <GrLinkNext className="text-base" />
          </button>
        </div>
      </div>
      <StickyScroll content={projectLists} />
    </div>
  );
}

const projectLists: {
  title: string;
  description: string;
  content?: React.ReactNode | any;
}[] = [
  {
    title: "API Rest Golang",
    description:
      "API para gerenciamento de produtos",
    content: (
      <a target="_blank" href="https://github.com/Bulletdev/bullet-cloud-api">
        <Image
          src="/bulletlogo.png"
          alt="Requisições aqui: https://bullet-cloud-api.onrender.com"
          width={500}
          height={500}
        />
      </a>
    ),
  },
  {
    title: "Github ⛏️",
    description:
      "Penetration test for git repo",
    content: (
      <a target="_blank" href="https://github.com/Bulletdev/GitPentest">
        <Image
          src="/public/bulletlogo.png"
          alt="demo"
          loading="lazy"
          width={500}
          height={300}
        />
      </a>
    ),
  },
  {
    title: "ShortMe",
    description:
      "Simple site to group all my profiles on social networks in one place",
      content: (
      <a target="_blank" href="https://github.com/Bulletdev/ShortMe">
        <Image
          src="/screenshot.png"
          alt="Demo"
          loading="lazy"
          width={500}
          height={300}
        />
      </a>
    ),
  },
];
