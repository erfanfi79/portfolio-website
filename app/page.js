import ContactMe from "@/components/ContactMe";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";
export default function Home() {
  return (
    <div class="flex min-h-screen justify-center bg-gradient-to-l from-blue-200 to-stone-300">
      <div class="fixed top-0 z-10 w-4/5 max-w-5xl shadow-md">
        <Navbar />
      </div>
      <div class="flex w-4/5 max-w-5xl flex-col shadow-xl ">
        <div class="h-20"></div>
        <HeroSection />
        <Experience id="s-experience" />
        <Skills id="s-skills" />
        <Education id="s-education" />
        <Projects id="s-projects" />
        <ContactMe id="s-contactme" />
        <div class="h-40"></div>
      </div>
      <div class="fixed bottom-0 z-10 w-4/5 max-w-5xl shadow-md">
        <Footer />
      </div>
    </div>
  );
}
