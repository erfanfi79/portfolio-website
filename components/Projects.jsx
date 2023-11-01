import React from "react";
import InfoSection from "./common/InfoSection";

const Projects = () => {
  const infos = [
    {
      title: "Ethereum Crowdfunding platform",
      company: {
        name: "BSc Project",
        link: "",
      },
      description: ["Developing web pages using React and chakra-ui"],
    },
    {
      title: "AIC20-Client",
      company: {
        name: "AlChallenge 2020",
        link: "",
      },
      description: [
        "Developing client side of Al challenge for users with Python",
      ],
    },
    {
      title: "Duelyst Game",
      company: {
        name: "Advanced Programming Class",
        link: "",
      },
      description: [
        "Working on the server-client program to implement the game with MVC using Java programming language",
      ],
    },
  ];
  return (
    <div>
      <div className="m-3 pt-2">
        <div className="text-center text-blue-900 text-2xl font-bold">
          Projects
        </div>
        {infos.map((item, index) => (
          <InfoSection info={item} />
        ))}
      </div>
      <div className="w-full h-px border border-neutral-400"></div>
    </div>
  );
};

export default Projects;
