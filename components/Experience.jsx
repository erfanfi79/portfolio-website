import React from "react";
import InfoSection from "./common/InfoSection";

const Experience = ({ id }) => {
  const infos = [
    {
      title: "Backend Developer",
      company: {
        name: "Bale Messaging",
        link: "https://bale.ai/",
        icon: "https://bale.ai/shop/icons/bale-logo-flat.svg",
      },
      date: {
        start: "July 2021",
        end: "February 2022",
      },
      location: "Tehran",
      description: [
        "Using microservices to build card-to-card transfer and improve messaging",
        "Implementing Crowd Funding Service",
        "Implementing Telegram Bot to get daily reports of transactions",
      ],
    },
    {
      title: "Web Developer",
      company: {
        name: "Torob",
        link: "https://torob.com/",
        icon: "https://torob.com/static/images/torob_logo.svg",
      },
      date: {
        start: "July 2021",
        end: "February 2022",
      },
      location: "Tehran",
      description: [
        "Working with Django to develop Torob backend service ",
        "Developing a crowdsource web page for Customer to better manage products",
        "Frequently debugging code base on client requests",
      ],
    },
  ];
  return (
    <div id={id}>
      <div class="m-3 pt-2">
        <div class="text-center text-xl font-bold text-blue-900 sm:text-2xl">
          Experience
        </div>
        {infos.map((item, index) => (
          <InfoSection info={item} key={index} />
        ))}
      </div>
      <div class="h-px w-full border border-neutral-400"></div>
    </div>
  );
};

export default Experience;
