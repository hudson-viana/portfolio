import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hudson | Portfolio",
  description:
    "I create, fix and improve websites, web apps and landing pages. I'm a Front-end developer aiming to become a MERN Full Stack developer. I continuously improve my skills by contributing to open source projects, creating personal projects that provide real solutions and value, and fully immersing myself in the development world by staying updated with best practices and news on YouTube, newsletters, Twitter(X), and coding during day, night and weekends. Currently, I'm specializing in the React ecosystem.",
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
