import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hudson | Portfolio",
  description:
    "I am a Front-end Developer with experience, bachelor’s degree in progress in software engineering, a Full Stack Santander Bootcamp, certifications, open source contributions, volunteer work, personal projects and a strong interest in technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className="fontFamily bg-[#232529] text-[#b3b5ba] relative pt-28 sm:pt-36">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
