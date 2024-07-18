"use client";

import React from "react";
import SectionHeading from "@/components/SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "@/components/Project";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
