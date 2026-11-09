import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ResumeSection from "@/components/ResumeSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { existsSync } from "node:fs";
import path from "node:path";
import { tnBikeRaceProject } from "@/data/content";

// Checked at build time so a missing image is simply left out (never a broken <img>).
const publicFileExists = (src: string) => existsSync(path.join(process.cwd(), "public", src));

export default function Home() {
  const { icon, screenshots } = tnBikeRaceProject.images;
  const tnBikeRaceImages = {
    icon: publicFileExists(icon) ? icon : null,
    screenshots: screenshots.filter(publicFileExists),
  };

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects tnBikeRaceImages={tnBikeRaceImages} />
        <Skills />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
