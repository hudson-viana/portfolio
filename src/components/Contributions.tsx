"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import Separator from "@/components/Separator";
import { contributionsData } from "@/lib/data";
import { motion } from "framer-motion";

export default function Contributions() {
  return (
    <section id="contributions" className="scroll-mt-28 mb-28">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <SectionHeading>Featured contributions</SectionHeading>
        <ul>
          {contributionsData.map((contribution, index) => (
            <li
              key={index}
              className=" bg-[#313337] rounded-lg transition max-w-[42rem] mb-5"
            >
              <div className="sm:flex">
                <div className="flex flex-col items-center text-center">
                  <h3 className="font-bold pt-2 text-xl">
                    {contribution.titleBefore}
                  </h3>
                  <div className="pt-3 pr-5 pl-5 pb-2">
                    <Image
                      src={contribution.imageUrlBefore}
                      alt="Showing the contribution"
                      className="shadow-lg rounded-xl min-h-[18rem] max-h-[18rem] max-w-[18rem]"
                    />
                  </div>
                  <p className="pt-1 px-4 pb-3 text-[#b3b5ba] max-w-[21rem]">
                    {contribution.descriptionBefore}
                  </p>
                </div>
                <Separator hiddenWhenSM={true} />
                <div className="flex flex-col items-center text-center">
                  <h3 className="font-bold pt-2 text-xl">
                    {contribution.titleAfter}
                  </h3>

                  <div className="pt-3 pr-5 pl-5 pb-2">
                    <Image
                      src={contribution.imageUrlAfter}
                      alt="Showing the contribution"
                      className="shadow-lg rounded-xl min-h-[18rem] max-h-[18rem] max-w-[18rem]"
                    />
                  </div>
                  <p className="pt-1 px-4 pb-3 text-[#b3b5ba] max-w-[21rem]">
                    {contribution.descriptionAfter}
                  </p>
                </div>
              </div>
              <Separator hiddenWhenSM={false} />
              <div className="flex flex-col justify-center items-center">
                <p className="text-sm text-[#b3b5ba]">
                  Review{" "}
                  <a
                    href={contribution.githubPrUrl}
                    target="_blank"
                    rel="noopener"
                    className="underline"
                  >
                    other fix/solutions in this PR.
                  </a>
                </p>
                <div className="flex justify-center gap-2 items-center pt-2 pb-3 px-3">
                  <span className="font-bold text-sm text-[#b3b5ba]">
                    Open sorce:
                  </span>
                  <Image
                    src={contribution.openSourceLogo}
                    alt="Open source organization logo"
                    className="size-7 rounded-lg"
                  />
                  <a
                    href={contribution.openSourceProjectUrl}
                    target="_blank"
                    rel="noopener"
                    className="text-sm text-[#b3b5ba] underline"
                  >
                    {contribution.openSourceName}
                  </a>
                </div>
                <ul className="flex flex-wrap pt-2 pb-5 gap-2 justify-center sm:justify-start">
                  {contribution.openSourceProjectTags.map((tag, index) => (
                    <li
                      className="bg-[#364d42] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-[#f5fef9] rounded-full "
                      key={index}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
