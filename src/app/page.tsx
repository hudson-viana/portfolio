import Contributions from "@/components/Contributions";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Skills />
      <Contributions />
      <Projects />
      <Experience />
    </main>
  );
}
