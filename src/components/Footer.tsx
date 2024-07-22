import React from "react";

export default function Footer() {
  return (
    <footer className="mt-14 mb-10 px-4 text-center text-[#b3b5ba]">
      <small className="mb-2 block text-xs">
        &copy; 2024 Hudson Viana. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">Website built with: </span> 
        React & Next.js (App Router), TypeScript, Tailwind CSS,
        Framer Motion, Vercel hosting.
      </p>
    </footer>
  );
}