import React, { useEffect, useState } from "react";
import { Ash, R1, R2, R3, R4 } from "../assets";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
export default function Projects() {
  const [currentItem, setCurrentItem] = useState(0);
  const [currentBgImage, setCurrentBgImage] = useState(0);
  const projects = [
    {
      title: "Revvy",
      subTitle: "Preferred Revenue",
      timeline: { from: "9th September 2021", to: "Present" },
      affliation: "Ionio LLC",
      description:
        "I'm working as a Frontend Developer at Ionio LLC. I have worked using No-Code platforms like Webflow, Bubble, Wix for FIT24 project, React.js framework for Revvyco, Hypemail-V2, Degen Alerts and also worked on bug fixing in Hypemail-V1. I have gained a lot of experience and insight while building these projects from scratch by learning new tools, libraries, strategies & conventions.",
      images: [R1, R2, R3, R4],
    },
    {
      title: "Hypemail",
      subTitle: "Cold emails that convert",
      timeline: { from: "9th September 2021", to: "Present" },
      affliation: "Ionio LLC",
      description:
        "I'm working as a Frontend Developer at Ionio LLC. I have worked using No-Code platforms like Webflow, Bubble, Wix for FIT24 project, React.js framework for Revvyco, Hypemail-V2, Degen Alerts and also worked on bug fixing in Hypemail-V1. I have gained a lot of experience and insight while building these projects from scratch by learning new tools, libraries, strategies & conventions.",
      images: [Ash],
    },
  ];
  useEffect(() => console.log(currentBgImage), [currentBgImage]);
  return (
    <div className="w-full my-auto flex-col justify-between  relative z-10 xl:min-h-screen md:flex-row">
      <div className="flex items-center my-auto self-center justify-self-center min-h-[75vh]">
        {projects.map((project, idx) => {
          if (idx === currentItem)
            return (
              <div
                key={idx}
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${project.images[0]})`,
                  backgroundSize: "cover",
                }}
                className="min-h-screen min-w-full flex items-center px-6"
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
                  size={64}
                />
                <div className="px-6 flex flex-col justify-end self-end">
                  <div className=" pb-24 flex flex-col">
                    <div className=" flex-col justify-between items-center space-y-4">
                      <h4 className="font-bold text-xl">
                        {project.affliation}
                      </h4>
                      <div className="flex justify-between">
                        <h4 className="font-extrabold text-4xl">
                          {project.title}{" "}
                          {`- ${project.subTitle ? project.subTitle : null}`}
                        </h4>
                        <div className="flex justify-between space-x-1 font-semibold items-center">
                          <span>{project.timeline.from} -</span>
                          <span> {project.timeline.to}</span>
                        </div>
                      </div>
                      <p className="font-medium">{project.description}</p>
                    </div>
                  </div>
                  <div className="flex min-h-1/4 space-x-4 pb-6 items-center justify-center">
                    {projects.map((item, idx) => {
                      return (
                        <div
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
                <AiOutlineRight
                  className={` ${
                    currentItem === projects.length - 1
                      ? "hover:cursor-not-allowed"
                      : "hover:cursor-pointer"
                  }`}
                  onClick={() =>
                    setCurrentItem((prev) =>
                      prev !== projects.length - 1 ? prev + 1 : prev
                    )
                  }
                  size={64}
                />
              </div>
            );
        })}
      </div>
    </div>
  );
}
