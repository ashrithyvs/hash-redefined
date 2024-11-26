import React, { useState } from "react";
import { Ionio, NXP, CGI } from "../assets";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { motion } from "framer-motion";
export default function Experience() {
  const [currentItem, setCurrentItem] = useState(0);
  const experiences = [
    {
      companyName: "CGI",
      companyLogo: CGI,
      position: "Software Developer",
      timeline: { from: "July 2024", to: "Present" },
      description:
        "As part of the MIFARE2GO project at NXP, I rebuilt the test framework, achieving a 10x improvement in execution speed while enhancing logging and readability. This redesign simplified test-writing for non-technical testers and removed redundant code, making the process more efficient. I developed over 500 test cases for the Flex4Mobile feature and collaborated with teams to integrate hardware emulation tools, enabling automated processes and ensuring seamless compatibility. Additionally, I worked on a prototype for a cloud service to support the MIFARE project, focusing on improving scalability and integration.",
    },
    {
      companyName: "NXP Semiconductors",
      companyLogo: NXP,
      position: "Software Intern",
      timeline: { from: "August 2023", to: "June 2024" },
      description:
        "For the MIFARE2GO and NXP TagInfo projects, I developed an Appium test suite for four mobile apps and automated regression testing for the TagInfo app, saving over 60 hours per release. I streamlined testing workflows by automating AWS Device Farm for cloud-based Appium testing. To enhance code quality, I identified and refactored code smells in the Command Generator library, improving maintainability, and wrote unit tests to cover previously uncovered sections in SDKs, ensuring greater software reliability. Additionally, I created utilities like License & SCR release reports and X509 Certificate tools within a React.js web application for internal use.",
    },
    {
      companyName: "Ionio LLC",
      companyLogo: Ionio,
      position: "Frontend Developer",
      timeline: { from: "September 2021", to: "February 2023" },
      description:
        "For projects called Hypemail, Revvyco, and Degen Alerts, I designed and developed the Frontend segment featuring highly functional, robust, and visually appealing UIs for SaaS web applications. Leveraging technologies such as React.js, React-Redux, Tailwind CSS, and MUI, I delivered flexible and efficient solutions. Additionally, I utilized low-code platforms like Webflow to design and develop websites with CMS integration, ensuring rapid deployment and seamless user experiences.",
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
                <h4 className="font-bold text-2xl">{item.companyName}</h4>
                <div className="flex justify-between w-full">
                  <h4 className="font-extrabold text-4xl">{item.position}</h4>
                  <div className="flex justify-between space-x-1 font-semibold items-center">
                    <span>{item.timeline.from} -</span>
                    <span> {item.timeline.to}</span>
                  </div>
                </div>
              </div>
              <p className="text-lg">{item.description}</p>
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
