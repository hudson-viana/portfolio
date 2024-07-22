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
    <motion.section
      id="home"
      className="mb-24 max-w-[45rem] text-center scroll-mt-[100rem]"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}

    >
      <div className="flex justify-center items-center">
        <div
          className="overflow-hidden h-24 w-24 rounded-full shadow-xl"
        >
          <Image
            src={profileImage}
            alt="Hudson portrait"
            quality={95}
            priority={true}
            className="scale-105 object-cover"
          />
        </div>
      </div>

      <h1
        className="text-3xl font-black mt-4 px-10 sm:px-36 "
      >
        I create, fix and improve websites, web apps and landing pages.
      </h1>
      <h2
        className="px-8 sm:px-12 text-[0.95rem] !leading-[1.75] mt-4 italic"
      >
        I&#39;m a <span className="font-bold">Front-end developer</span> aiming
        to become a MERN¹ Full Stack developer. I continuously improve my skills by contributing to{" "}
        <span className="font-bold">open source projects</span>, creating
        personal projects that provide{" "}
        <span className="font-bold">real solutions and value</span>, and fully
        immersing myself in the development world by staying updated with{" "}
        <span className="font-bold">best practices and news</span> on YouTube,
        newsletters, Twitter(X), and coding during day, night and weekends.
        Currently, I&#39;m specializing in the{" "}
        <span className="font-bold">React ecosystem</span>².
      </h2>
      <h3
        className="text-[0.7rem] text-gray-400 mt-3"
      >
        1. MERN: MongoDB, Express.js, React, and Node.js
      </h3>
      <h3
        className="mb-5 text-[0.7rem] text-gray-400"
      >
        2. React ecosystem: Next.js, libraries, tools
      </h3>

      <div
        className="flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      >
        <a
          className="bg-[#364d42] p-4 text-[#f5fef9] flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
          href="https://www.linkedin.com/in/hudson-viana/"
          target="_blank"
          rel="noopener"
        >
          <FaLinkedin />
        </a>
        <a
          className="bg-[#364d42] p-4 text-[#f5fef9] flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
          href="https://x.com/HudsonViana31"
          target="_blank"
          rel="noopener"
        >
          <FaSquareXTwitter />
        </a>
        <a
          className="bg-[#364d42] p-4 text-[#f5fef9] flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack "
          href="https://github.com/hudson-viana"
          target="_blank"
          rel="noopener"
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
    </motion.section>
  );
}
