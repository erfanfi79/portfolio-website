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
    <div className="flex flex-row p-1  bg-neutral-200 justify-center items-end">
      {parts.map((item, index) => (
        <div className="p-1">
          <item.icon size="1.6em"/>
        </div>
      ))}
    </div>
  );
};

export default Footer;
