import Image from "next/image";
import React from "react";
import bg_image from "./../public/hero_bg_img.jpeg";
const HeroSection = () => {
  return (
    <div
      class="hero"
      style={{ backgroundImage: `url(${bg_image.src})`, height: "90%" }}
    >
      <div class="hero-overlay bg-opacity-95"></div>
      <div class="hero-content text-left text-neutral-content">
        <div class="max-w-3xl">
          <Image width={120} height={120} src={"/boypic.png"} alt="portfolio-hero-pic" />
          <h1 class="mb-5 mt-4 text-4xl font-bold">Hello, I’m Erfan</h1>
          <p class="mb-5">
          I'm a Full-Stack Developer with a keen interest in Blockchain Technology. With over two year of hands-on experience, I've developed a strong skill set in a variety of technologies, including Solidity, Django, Golang, React, and Next.js.
          </p>
          {/* <button class="btn border-hidden bg-blue-800 text-white hover:text-black">
            See Projects
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
