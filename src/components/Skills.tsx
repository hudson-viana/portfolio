"use client";

import React from "react";
import { skillsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mb-28 max-w-[48rem] scroll-mt-28 text-center sm:mb-40 px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        viewport={{ once: true }}
      >
        <SectionHeading>Skills</SectionHeading>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-[#f5fef9]">
          {skillsData.map((skill, index) => (
            <li
              className="bg-[#364d42] borderBlack rounded-xl px-3 py-1"
              key={index}
            >
              {skill}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
