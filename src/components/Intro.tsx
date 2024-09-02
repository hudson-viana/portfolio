"use client";

import React from "react";
import Image from "next/image";
import profileImage from "../../public/profileImage.png";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Intro() {
  return (
    <section
      id="home"
      className="mb-24 max-w-[45rem] text-center scroll-mt-[100rem]"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center items-center">
          <div className="overflow-hidden h-24 w-24 rounded-full shadow-xl">
            <Image
              src={profileImage}
              alt="Hudson portrait"
              quality={95}
              priority={true}
              className="scale-105 object-cover"
            />
          </div>
        </div>

        <h1 className="text-3xl font-black mt-4 px-10 sm:px-36 ">
          I create, fix and improve websites and web apps
        </h1>
        <h2 className="px-8 sm:px-12 text-[0.95rem] !leading-[1.75] mt-4 italic">
          I&#39;m a <span className="font-extrabold">Front-end developer</span>{" "}
          with experience, bachelor&#39;s degree in progress in{" "}
          <span className="font-extrabold">Software Engineering</span>, a Full
          Stack Santander <span className="font-extrabold">Bootcamp</span>,
          certifications,{" "}
          <span className="font-extrabold">open source contributions</span>,
          volunteer work, personal projects and a strong interest in technology.
          I also keep up with news, videos, and newsletters about{" "}
          <span className="font-extrabold">best practices</span>, trends, and
          new rules. My future plan is to become a Full Stack Developer.
          Currently, I am specializing in{" "}
          <span className="font-extrabold">React and TypeScript</span> and their
          related technologies: Vite, Next, libraries, tools, etc.
        </h2>        

        <div className="flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium mt-5">
          <a
            className="bg-[#364d42] p-4 text-[#f5fef9] flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
            href="https://www.linkedin.com/in/hudson-viana/"
            target="_blank"
            rel="noopener"
            aria-label="Linkedin"
          >
            <FaLinkedin />
          </a>
          <a
            className="bg-[#364d42] p-4 text-[#f5fef9] flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
            href="https://x.com/HudsonViana31"
            target="_blank"
            rel="noopener"
            aria-label="Twitter"
          >
            <FaSquareXTwitter />
          </a>
          <a
            className="bg-[#364d42] p-4 text-[#f5fef9] flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack "
            href="https://github.com/hudson-viana"
            target="_blank"
            rel="noopener"
            aria-label="Github"
          >
            <FaGithubSquare />
          </a>

          <a
            className="bg-[#364d42] text-[#f5fef9] px-2 py-3 flex items-center rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack "
            href="/CV_HudsonViana.pdf"
            download
          >
            {" "}
            CV <HiDownload />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
