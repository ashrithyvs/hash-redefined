import React from "react";
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";
export default function Footer() {
  const social = [
    {
      icon: AiOutlineLinkedin,
      href: "https://www.linkedin.com/in/ashrith-yakkali-a60379191/",
    },
    { icon: AiOutlineGithub, href: "https://github.com/ashrithyvs" },
    { icon: AiOutlineInstagram, href: "https://www.instagram.com/_ashh.y/" },
    { icon: AiOutlineMail, href: "mailto:ashrithy20@gmail.com" },
  ];
  return (
    <div className="bg-slate-900 flex flex-col items-center justify-center py-4">
      <div className="flex space-x-4 my-4 mb-8">
        {social.map((Item, idx) => {
          return (
            <a
              key={idx}
              href={Item.href}
              target="_blank"
              className="cursor-pointer"
            >
              <Item.icon size={26} />
            </a>
          );
        })}
      </div>
      <h4>{"<Hash />"} by Ashrith Yakkali</h4>
    </div>
  );
}
