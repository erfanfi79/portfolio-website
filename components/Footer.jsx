import React from "react";
import {
    LiaEnvelope,
  LiaGithub,
  LiaLinkedin,
  LiaMailBulkSolid,
  LiaTelegram,
  LiaWhatsapp,
} from "react-icons/lia";
const Footer = () => {
  const parts = [
    {
      name: "Github",
      link: "",
      icon: LiaGithub,
    },
    { name: "LinkedIn", link: "", icon: LiaLinkedin },
    { name: "Whatsapp", link: "", icon: LiaWhatsapp },
    { name: "Telegram", link: "", icon: LiaTelegram },
    { name: "Email", link: "", icon: LiaEnvelope },
  ];
  return (
    <div className="flex flex-row p-1  bg-neutral-200 justify-center gap-2 h-12">
      {parts.map((item, index) => (
        <div className="m-1" key={index}>
          <item.icon size="2em" className="hover:text-blue-800 hover:text-lg"/>
        </div>
      ))}
    </div>
  );
};

export default Footer;
