import React from "react";

type SectionHeadingPros = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingPros) {
  return <h2 className="text-3xl font-black capitalize mb-8 text-center mx-2">{children}</h2>;
}
