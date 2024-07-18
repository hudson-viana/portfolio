import React from "react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import Separator from "@/components/Separator";
import { contributionsData } from "@/lib/data";
import { FaGithubSquare } from "react-icons/fa";

type ContributionsProps = (typeof contributionsData)[number];

export default function Contributions({
  imageUrlBefore,
  titleBefore,
  descriptionBefore,
  imageUrlAfter,
  titleAfter,
  descriptionAfter,
  githubPrUrl,
  openSourceName,
  openSourceLogo,
}: ContributionsProps) {
  return (
    <section id="contributions" className="mb-28">
      <SectionHeading>Featured contributions</SectionHeading>
      <ul>
        {contributionsData.map((contribution, index) => (
          <li
            key={index}
            className="border border-black/10 bg-gray-200 rounded-lg hover:bg-gray-300 transition max-w-[42rem] mb-5"
          >
            <div className="sm:flex">
              <div className="flex flex-col items-center text-center">
                <h3 className="font-bold pt-2">{contribution.titleBefore}</h3>
                <div className="pt-3 pr-5 pl-5 pb-2">
                  <Image
                    src={contribution.imageUrlBefore}
                    alt="Showing the contribution"
                    className="shadow-2xl rounded-xl min-h-[18rem] max-h-[18rem] object-cover object-right-bottom"
                  />
                </div>
                <p className="pt-1 px-4 pb-3 text-gray-700">
                  {contribution.descriptionBefore}
                </p>
              </div>
              <Separator hiddenWhenSM={true} />
              <div className="flex flex-col items-center text-center">
                <h3 className="font-bold pt-2">{contribution.titleAfter}</h3>

                <div className="pt-3 pr-5 pl-5 pb-2">
                  <Image
                    src={contribution.imageUrlAfter}
                    alt="Showing the contribution"
                    className="shadow-2xl rounded-xl min-h-[18rem] max-h-[18rem] object-cover object-right-bottom"
                  />
                </div>
                <p className="pt-1 px-4 pb-3 text-gray-700">
                  {contribution.descriptionAfter}
                </p>
              </div>
            </div>
            <Separator hiddenWhenSM={false} />
            <div className="flex flex-col justify-center items-center">
              <p className="text-sm text-gray-700">
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
              <div className="flex justify-center gap-2 items-center pt-2 pb-3">
                <span className="font-bold text-sm text-gray-700">Open sorce:</span>
                <Image
                  src={contribution.openSourceLogo}
                  alt="Open source organization logo"
                  className="size-7 rounded-lg"
                />
                <a
                  href={contribution.openSourceProjectUrl}
                  target="_blank"
                  rel="noopener"
                  className="text-sm text-gray-700 underline"
                >
                  {contribution.openSourceName}
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
