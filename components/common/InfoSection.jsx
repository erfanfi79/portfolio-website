import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LiaCalendarCheckSolid } from "react-icons/lia";
import { IoLocationSharp } from "react-icons/io5";
const InfoSection = ({ info }) => {
  return (
    <div className="flex flex-col p-5 mb-2">
      <div className="text-black text-2xl">{info.title}</div>
      <Link href={info.company.link}>
        <div className="text-blue-600 font-bold leading-10 inline-flex">
          <div className="mr-2">{info.company.name}</div>
          {info.company.icon && (
            <Image src={info.company.icon} width={20} height={20} />
          )}
        </div>
      </Link>
      {info.date && (
        <div className="inline-flex gap-3 text-neutral-700 text-sm">
          <LiaCalendarCheckSolid size={"1.4em"} />
          <div>{info.date.start}</div> -<div>{info.date.end}</div>
          <IoLocationSharp size={"1.4em"} />
          <div>{info.location}</div>
        </div>
      )}
      <div className="flex flex-col text-black leading-10 m-1"></div>
      {info.description &&
        info.description.map((d, index) => (
          <div className="text-sm">• {d}</div>
        ))}
    </div>
  );
};

export default InfoSection;
