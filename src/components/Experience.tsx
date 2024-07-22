"use client";

import React from "react";
import { experiencesData } from "@/lib/data";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Experiencie</SectionHeading>
      <ul className="px-5">
        {experiencesData.map((experience, index) => (
          <li
            key={index}
            className="bg-[#313337] max-w-[22rem] sm:max-w-[42rem] border border-black/5 rounded-lg overflow-hidden transition pl-4 pt-5 pb-5 pr-5"
          >
            <div className="flex gap-3">
              <Image
                src={experience.imageUrl}
                alt="SouJunior Logo"
                className="rounded-lg size-10"
              />
              <div>
                <h3 className="text-lg font-extrabold pt-0">
                  {experience.position}
                </h3>
                <p className="mt-2 italic">{experience.company}</p>
                <p className="mt-0.5 text-[#b3b5ba] text-xs italic">{`${experience.startDate} - ${experience.endDate}`}</p>
                <p className="mt-0.5 text-[#b3b5ba] text-xs italic">
                  {experience.location}
                </p>
                <p className="whitespace-pre-line mt-4 leading-normal font-normal text-sm">
                  {experience.description}
                </p>
              </div>
            </div>
            <ul className="flex flex-wrap pt-7 pb-2 gap-2 justify-center">
              {experience.projectTags.map((tag, index) => (
                <li
                  className="bg-[#364d42] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-[#f5fef9] rounded-full "
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
