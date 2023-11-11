import React from "react";
import InfoSection from "./common/InfoSection";

const Education = ({ id }) => {
  const infos = [
    {
      title: "B.E. in computer engineering",
      company: {
        name: "Sharif University of Technology",
        link: "https://www.sharif.edu/",
      },
      date: {
        start: "July 2021",
        end: "February 2022",
      },
      location: "Tehran",
    },
    {
      title: "High School Diploma",
      company: {
        name: "National Organization for Development of Exceptional Talents",
        link: "https://torob.com/",
        icon: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Sampad.svg",
      },
      date: {
        start: "July 2021",
        end: "February 2022",
      },
      location: "Tehran",
    },
  ];
  return (
    <div id={id}>
      <div class="m-3 pt-2">
        <div class="text-center text-xl font-bold text-blue-900 sm:text-2xl">
          Education
        </div>
        {infos.map((item, index) => (
          <InfoSection info={item} key={index} />
        ))}
      </div>
      <div class="h-px w-full border border-neutral-400"></div>
    </div>
  );
};

export default Education;
