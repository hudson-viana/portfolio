"use client";

import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { TbWorldWww } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05,
    },
  },
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  liveUrl,
  githubUrl,
}: ProjectProps) {
  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      className="mb-3"
    >
      <section className="bg-gray-200 max-w-[42rem] border border-black/5 rounded-lg hover:bg-gray-300 transition">
        <div className="flex flex-col items-center text-center  sm:text-left sm:flex-row">
          <div className="sm:pl-10 sm:pr-2 py-4 max-w-[80%] sm:max-w-[50%] flex flex-col h-full">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 mb-1 sm:mb-3 leading-relaxed text-gray-700 ">
              {description}
            </p>
            <div className="flex mt-2 mb-1 sm:mb-3 text-gray-700 gap-2 justify-center sm:justify-start text-xl">
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
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full "
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
    </motion.div>
  );
}
