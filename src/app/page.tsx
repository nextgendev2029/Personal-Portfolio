import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

// Lazy load below-the-fold sections for faster initial paint
const About = dynamic(() => import("@/components/About"));
const Education = dynamic(() => import("@/components/Education"));
const Projects = dynamic(() => import("@/components/Projects"));
const Skills = dynamic(() => import("@/components/Skills"));
const Achievements = dynamic(() => import("@/components/Achievements"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
