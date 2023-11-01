import React from "react";

const Navbar = () => {
  const parts = [
    {
      name: "Experience",
    },
    { name: "Skills" },
    { name: "Education" },
    { name: "Projects" },
    { name: "Contact me" },
  ];
  return (
    <div className="flex flex-row p-2  bg-neutral-200 justify-around items-end">
      {parts.map((item, index) => (
        <div className="text-center text-black lg:text-3xl md:text-xl font-semibold font-['Inter'] hover:text-blue-800">
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
