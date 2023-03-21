import React, { useState } from "react";
import { Ionio } from "../assets";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { motion } from "framer-motion";
export default function Experience() {
  const [currentItem, setCurrentItem] = useState(0);
  const experiences = [
    {
      companyName: "Ionio LLC",
      companyLogo: Ionio,
      position: "Frontend Developer",
      timeline: { from: "9th September 2021", to: "February 2023" },
      description:
        "I'm working as a Frontend Developer at Ionio LLC. I have worked using No-Code platforms like Webflow, Bubble, Wix for FIT24 project, React.js framework for Revvyco, Hypemail-V2, Degen Alerts and also worked on bug fixing in Hypemail-V1. I have gained a lot of experience and insight while building these projects from scratch by learning new tools, libraries, strategies & conventions.",
    },
    {
      companyName: "Beat The Heat club",
      position: "PR Team Lead",
      timeline: { from: "August 2022", to: "April 2023" },
      description:
        "Managed to get sponsors and trainers for events and workshops like Freestyle, Zumba. \nManaged to get participants from different universities to perform in Inter University Dance Competition. \nVolunteered for events like Murder Mystery, Crescendo.",
    },
    {
      companyName: "Model United Nation club",
      position: "PR Team Member",
      timeline: { from: "August 2021", to: "May 2022" },
      description: "Helped in organizing UNSC and UNODC.",
    },
    {
      companyName: "Null Chapter",
      position: "PR Team Member",
      timeline: { from: "August 2020", to: "April 2021" },
      description:
        "Helped in conducting and managing different kinds of events in the club like Hacker's Union.",
    },
    {
      companyName: "Dhwani - Theatre and Fine arts club",
      position: "PR Team Member",
      timeline: { from: "August 2019", to: "April 2020" },
      description:
        "Organized and volunteered in events like Treasure Hunt, Drama workshop, Social Outreach.",
    },
  ];
  return (
    <div
      id="experience"
      className="w-full p-16 my-auto flex-col justify-between bg-slate-900 relative z-10 xl:min-h-screen md:flex-row"
    >
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex space-x-12 items-center my-auto self-center justify-self-center min-w-full min-h-[75vh]"
      >
        {" "}
        <AiOutlineLeft
          className={` ${
            currentItem === 0
              ? "hover:cursor-not-allowed"
              : "hover:cursor-pointer"
          }`}
          onClick={() =>
            setCurrentItem((prev) => (prev !== 0 ? prev - 1 : prev))
          }
          size={40}
        />
        {[experiences[currentItem]].map((item, idx) => {
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-col space-y-4 w-full"
            >
              <div className=" flex-col justify-between items-center space-y-4">
                {item.companyLogo && (
                  <img src={item.companyLogo} className="rounded-full w-16" />
                )}
                <h4 className="font-bold text-xl">{item.companyName}</h4>
                <div className="flex justify-between w-full">
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
        <AiOutlineRight
          className={` ${
            currentItem === experiences.length - 1
              ? "hover:cursor-not-allowed"
              : "hover:cursor-pointer"
          }`}
          onClick={() =>
            setCurrentItem((prev) =>
              prev !== experiences.length - 1 ? prev + 1 : prev
            )
          }
          size={40}
        />
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
