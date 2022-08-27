import React from "react";

export default function Experience() {
  const experiences = [
    {
      companyName: "Ionio LLC",
      companyLogo: "",
      position: "Frontend Developer",
      timeline: { from: "9th September 2021", to: "Present" },
      description:
        "I'm working as a Frontend Developer at Ionio LLC. I have worked using No-Code platforms like Webflow, Bubble, Wix for FIT24 project, React.js framework for Revvyco, Hypemail-V2, Degen Alerts and also worked on bug fixing in Hypemail-V1. I have gained a lot of experience and insight while building these projects from scratch by learning new tools, libraries, strategies & conventions.",
    },
  ];
  return (
    <div className="w-full px-24  bg-slate-900 relative z-10 xl:min-h-screen flex-col md:flex-row">
      <div className="flex-col">
        {experiences.map((item) => {
          return <div className="font-bold text-xl">{item.companyName}</div>;
        })}
      </div>
    </div>
  );
}
