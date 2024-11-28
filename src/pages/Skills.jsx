import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJava, FaDocker, FaAndroid } from "react-icons/fa";
import { TbSettingsAutomation, TbSdk } from "react-icons/tb";
import {
  SiRobotframework,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiJavascript,
  SiAppium,
  SiSelenium,
  SiTestin,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { HiMiniQueueList } from "react-icons/hi2";
export default function Skills() {
  const skills = [
    {
      name: "Java",
      logo: FaJava,
    },
    {
      name: "DSA",
      logo: HiMiniQueueList,
    },
    {
      name: "Javascript",
      logo: SiJavascript,
    },
    {
      name: "ReactJS",
      logo: FaReact,
    },
    {
      name: "NodeJS",
      logo: FaNodeJs,
    },
    {
      name: "ExpressJS",
      logo: SiExpress,
    },
    {
      name: "MongoDB",
      logo: SiMongodb,
    },
    {
      name: "Framework Development",
      logo: SiRobotframework,
    },
    {
      name: "Docker",
      logo: FaDocker,
    },
    {
      name: "Automation",
      logo: TbSettingsAutomation,
    },
    {
      name: "Firebase",
      logo: SiFirebase,
    },
    {
      name: "Android Development",
      logo: FaAndroid,
    },
    {
      name: "SDK Development",
      logo: TbSdk,
    },
    {
      name: "NoSQL Database",
      logo: SiMongodb,
    },
    {
      name: "Postegre SQL",
      logo: BiLogoPostgresql,
    },
    {
      name: "Selenium",
      logo: SiSelenium,
    },
    {
      name: "Appium",
      logo: SiAppium,
    },
    {
      name: "TestNG",
      logo: SiTestin,
    },
  ];
  return (
    <div
      id="experience"
      className="w-full my-auto flex flex-col justify-center bg-slate-900 py-24  relative z-10 xl:min-h-[70%] md:flex-row"
    >
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        id="skills"
        className="flex flex-wrap items-center justify-center min-h-full my-auto bg-slate-900"
      >
        {skills.map((Skill, idx) => {
          return (
            <div
              key={idx}
              className="hover:bg-slate-800 border-[1px] border-slate-900 rounded-lg hover:border-slate-100 m-6 cursor-pointer flex items-center justify-center space-x-4 w-[20%] p-4"
            >
              {Skill.logo && <Skill.logo size={24} />}
              <h4 className="font-semibold text-lg">{Skill.name}</h4>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
