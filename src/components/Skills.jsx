import React from "react";

const Skills = ({ id }) => {
  const infos = [
    {
      name: "Python,Django",
      level: 80,
    },
    {
      name: "React,Nextjs",
      level: 70,
    },
    {
      name: "Golang",
      level: 60,
    },
    {
      name: "Solidity",
      level: 60,
    },
  ];
  return (
    <div id={id}>
      <div class="m-3 pt-2">
        <div class="text-center text-xl font-bold  text-blue-900 sm:text-2xl">
          Skills
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-4">
          {infos.map((item, index) => (
            <div class="m-4 flex flex-col items-center" key={index}>
              <div>{item.name}</div>
              <div
                class="radial-progress m-2 border-4 border-blue-500 p-2 text-blue-800 shadow-md hover:text-xl"
                style={{ "--value": item.level }}
              >
                {item.level}%
              </div>
            </div>
          ))}
        </div>
      </div>
      <div class="h-px w-full border border-neutral-400"></div>
    </div>
  );
};

export default Skills;
