import React, { useState } from "react";
import { Ionio } from "../assets";
import { motion } from "framer-motion";
export default function Experience() {
  const [currentItem, setCurrentItem] = useState(0);
  const experiences = [
    {
      companyName: "Ionio LLC",
      companyLogo: Ionio,
      position: "Frontend Developer 1",
      timeline: { from: "9th September 2021", to: "Present" },
      description:
        "I'm working as a Frontend Developer at Ionio LLC. I have worked using No-Code platforms like Webflow, Bubble, Wix for FIT24 project, React.js framework for Revvyco, Hypemail-V2, Degen Alerts and also worked on bug fixing in Hypemail-V1. I have gained a lot of experience and insight while building these projects from scratch by learning new tools, libraries, strategies & conventions.",
    },
    {
      companyName: "Ionio LLC",
      companyLogo: Ionio,
      position: "Frontend Developer 2",
      timeline: { from: "9th September 2021", to: "Present" },
      description:
        "I'm working as a Frontend Developer at Ionio LLC. I have worked using No-Code platforms like Webflow, Bubble, Wix for FIT24 project, React.js framework for Revvyco, Hypemail-V2, Degen Alerts and also worked on bug fixing in Hypemail-V1. I have gained a lot of experience and insight while building these projects from scratch by learning new tools, libraries, strategies & conventions.",
    },
  ];
  return (
    <div className="w-full p-24 my-auto flex-col justify-between bg-slate-900 relative z-10 xl:min-h-screen md:flex-row">
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center my-auto self-center justify-self-center min-h-[75vh]"
      >
        {[experiences[currentItem]].map((item, idx) => {
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-col space-y-4"
            >
              <div className=" flex-col justify-between items-center space-y-4">
                <img src={Ionio} className="rounded-full w-16" />
                <h4 className="font-bold text-xl">{item.companyName}</h4>
                <div className="flex justify-between">
                  <h4 className="font-extrabold text-4xl">{item.position}</h4>
                  <div className="flex justify-between space-x-1 font-semibold items-center">
                    <span>{item.timeline.from} -</span>
                    <span> {item.timeline.to}</span>
                  </div>
                </div>
              </div>
              <p>{item.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
      <div className="flex min-h-1/4 space-x-4 items-center justify-center">
        {experiences.map((item, idx) => {
          return (
            <div
              key={idx}
              onClick={() => {
                setCurrentItem(idx);
              }}
              className={`w-[15px] h-[15px]    transition duration-300 rounded-full ${
                currentItem === idx
                  ? "bg-[#9333ea] hover:bg-[#6c12c0]"
                  : "bg-white hover:bg-[#9333ea]"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
