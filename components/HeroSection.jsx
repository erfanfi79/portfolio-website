import Image from 'next/image'
import React from 'react'
import bg_image from './../public/hero_bg_img.jpeg'
const HeroSection = () => {
  return (
<div className="hero" style={{backgroundImage: `url(${bg_image.src})`, height:'90%'}}>
  <div className="hero-overlay bg-opacity-95"></div>
  <div className="hero-content text-left text-neutral-content">
    <div className="max-w-3xl">
      <Image width={100} height={100} src={"/boypic.png"}/>
      <h1 className="mb-5 text-5xl font-bold">Hello, I’m Erfan</h1>
      <p className="mb-5">A software engineer
 specialized in “Full-Stack Development
developing smart contracts, decentralized applications (dApps), and blockchain-based solutions using Ethereum.</p>
      <button className="btn bg-blue-800 border-hidden text-white hover:text-black">See Projects</button>
    </div>
  </div>
</div>
  )
}

export default HeroSection