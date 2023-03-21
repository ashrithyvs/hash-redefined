import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiJavascript,
  SiTailwindcss,
  SiWebflow,
  SiRedux,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
export default function Skills() {
  const skills = [
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
      name: "Firebase",
      logo: SiFirebase,
    },
    {
      name: "Java",
      logo: FaJava,
    },
    {
      name: "Data Structures & Algorithms",
    },
    {
      name: "Javascript",
      logo: SiJavascript,
    },
    {
      name: "React-Redux",
      logo: SiRedux,
    },
    {
      name: "SQL Database",
      logo: GrMysql,
    },
    {
      name: "NoSQL Database",
    },
    {
      name: "Tailwind CSS",
      logo: SiTailwindcss,
    },
    {
      name: "Material - UI",
    },
    {
      name: "Webflow",
      logo: SiWebflow,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      id="skills"
      className="w-full my-auto flex flex-col justify-center bg-slate-900 py-24  relative z-10 xl:min-h-[70%] md:flex-row"
    >
      <div className="flex flex-wrap items-center justify-center min-h-full my-auto">
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
      </div>
    </motion.div>
  );
}
