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
    <div className="flex flex-col justify-center min-h-screen bg-gradient-to-l from-blue-200 to-stone-300">
      <Navbar />
      <HeroSection />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}
