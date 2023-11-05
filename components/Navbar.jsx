"use client";
import React from "react";

const Navbar = () => {
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const parts = [
    {
      name: "Experience",
      id: "s-experience",
    },
    { name: "Skills", id: "s-skills" },
    { name: "Education", id: "s-education" },
    { name: "Projects", id: "s-projects" },
    { name: "Contact me", id: "s-contactme" },
  ];
  return (
    <nav className="flex flex-row p-2  bg-neutral-200 justify-around ">
      {parts.map((item, index) => (
        <div
          className="text-center text-black lg:text-2xl md:text-lg sm:text-sm font-semibold font-sans hover:text-blue-800"
          onClick={() => handleClickScroll(item.id)}
          key={index}
        >
          {item.name}
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
