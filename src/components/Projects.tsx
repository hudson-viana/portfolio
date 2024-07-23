"use client";

import React from "react";
import SectionHeading from "@/components/SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "@/components/Project";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <SectionHeading>Projects</SectionHeading>
        <div>
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
