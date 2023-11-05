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
    <div className="flex   justify-center min-h-screen bg-gradient-to-l from-blue-200 to-stone-300">
      <div className="fixed top-0 w-4/5 max-w-5xl shadow-md z-10">
        <Navbar />
      </div>
      <div className="flex flex-col w-4/5 max-w-5xl shadow-xl ">
        <div className="h-20"></div>
        <HeroSection />
        <Experience id="s-experience" />
        <Skills id="s-skills" />
        <Education id="s-education" />
        <Projects id="s-projects" />
        <ContactMe id="s-contactme" />
        <div className="h-40"></div>
      </div>
      <div className="fixed bottom-0 w-4/5 max-w-5xl shadow-md z-10">
        <Footer />
      </div>
    </div>
  );
}
