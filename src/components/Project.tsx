"use client";

import { projectsData } from "@/lib/data";
import Image from "next/image";
import { TbWorldWww } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  liveUrl,
  githubUrl,
}: ProjectProps) {
  return (
    <div
      className="mb-3"
    >
      <section className="bg-[#313337] max-w-[22rem] sm:max-w-[42rem] border border-black/5 rounded-lg transition">
        <div className="flex flex-col items-center text-center  sm:text-left sm:flex-row">
          <div className="sm:pl-10 sm:pr-2 py-4 max-w-[80%] sm:max-w-[50%] flex flex-col h-full">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="mt-2 mb-1 sm:mb-3 leading-relaxed text-[#b3b5ba] ">
              {description}
            </p>
            <div className="flex mt-2 mb-1 sm:mb-3 text-[#b3b5ba] gap-2 justify-center sm:justify-start text-xl">
              <a href={liveUrl} target="_blank" rel="noopener">
                <TbWorldWww />
              </a>
              <a href={githubUrl} target="_blank" rel="noopener">
                <FaGithub />
              </a>
            </div>
            <ul className="flex flex-wrap py-2 gap-2 justify-center sm:justify-start">
              {tags.map((tag, index) => (
                <li
                  className="bg-[#364d42] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-[#f5fef9] rounded-full "
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:px-10 sm:py-4 ">
            <Image
              src={imageUrl}
              alt="Project preview"
              quality={95}
              className="size-72 rounded-lg sm:size-60 mb-4 sm:my-4"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
