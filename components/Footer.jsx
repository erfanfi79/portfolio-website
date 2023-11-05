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
      link: "https://github.com/erfanfi79",
      icon: LiaGithub,
    },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/erfanfi79/", icon: LiaLinkedin },
    { name: "Whatsapp", link: "", icon: LiaWhatsapp },
    { name: "Telegram", link: "http://t.me/@erfanfaravani", icon: LiaTelegram },
    { name: "Email", link: "mailto:erfanfaravani@gmail.com", icon: LiaEnvelope },
  ];
  return (
    <div class="flex h-12 flex-row  justify-center gap-2 bg-neutral-200 p-1">
      {parts.map((item, index) => (
        <a href={item.link}>
          <div class="m-1" key={index}>
            <item.icon size="2em" class="hover:text-lg hover:text-blue-800" />
          </div>
        </a>
      ))}
    </div>
  );
};

export default Footer;
