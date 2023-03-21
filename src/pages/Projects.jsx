import { useState } from "react";
import {
  R1,
  R2,
  R3,
  R4,
  D1,
  D2,
  D3,
  D4,
  D5,
  D6,
  D7,
  D8,
  D9,
  C1,
  C2,
  C3,
  C4,
  C5,
  C6,
} from "../assets";
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ProjectsModal from "../components/ProjectsModal";
import { motion } from "framer-motion";
export default function Projects() {
  const [currentItem, setCurrentItem] = useState(0);
  const projects = [
    {
      title: "Revvy",
      subTitle: "Preferred Revenue",
      timeline: { from: "October, 2021", to: "February, 2022" },
      affliation: "Ionio LLC",
      description:
        "Revvyco is a Utah based property management SaaS for property managers. It allows property managers to track the data of the properties at property-level and unit-group-level and be able to renew leases for individual units too. I have developed the frontend UI for this SaaS using ReactJS framework and chart.js, Material-UI, React-Bootstrap as CSS libraries, Redux as state management tool.",
      images: [R1, R2, R3, R4],
    },
    {
      title: "Hypemail",
      subTitle: "Cold emails that convert",
      timeline: { from: "October,2021", to: "November,2021" },
      affliation: "Ionio LLC",
      description:
        "Hypemail.io helps the user in sending cold mails as a campaign for cold outreach in a convertible way and great UX features for the user to track the sent cold mails, sending replies templates scheduled automatically. I have re- developed Hypemail from scratch to accommodate a fresh, robust, interactive UI using React.js, Tailwind CSS as CSS Library, React-Redux for state management.",
      images: [R2],
    },
    {
      title: "Degen Alerts",
      timeline: { from: "February, 2022", to: "May, 2022" },
      affliation: "Ionio LLC",
      description:
        "Degen Alerts is a SaaS that sends the user alerts of the users' NFTs by tracking the price and allows users to create customized simple and sophisticated alerts. It also provides strategies and marketing tips to flip their NFTs at higher prices in the market. Users also can buy their Early lifetime access NFTs too. I have developed the frontend UI using ReactJS as framework and Tailwind as CSS library",
      images: [D6, D1, D2, D3, D4, D5, D6, D7, D8, D9],
    },
    {
      title: "Folium",
      timeline: { from: "January, 2023", to: "March, 2023" },
      affliation: "Personal",
      description:
        "Folium helps users in creating portfolios using easy-to-use User Interface. User just have to fill in their data and choose a template and then it generates html file using ReactDOMServer and Tailwind CSS CDN. Users can also create portfolios using their Google Scholar account.",
      images: [R2],
    },
    {
      title: "Chainsaw",
      timeline: { from: "February, 2022", to: "February, 2022" },
      affliation: "Personal",
      description:
        "Chainsaw is a web app that allows users to send ETH coins by connecting to the users' Metamask wallet and uses Smart contracts built using Solidity to make transactions.",
      images: [C1, C2, C3, C4, C5, C6],
    },
    // {
    //   title: "Sudo Chatroom",
    //   affliation: "Personal",
    //   timeline: { from: "March, 2021", to: "March, 2021" },
    //   description:
    //     "The Sudo Chatroom is a web app built using ReactJS, Firebase, Google OAuth and deployed to Vercel. This web app allows users to converse with each other in a sudo room.",
    //   images: [R2],
    // },
    // {
    //   title: "Hash Chat",
    //   timeline: { from: "July, 2021", to: "July, 2021" },
    //   affliation: "Personal",
    //   description:
    //     "The Hash-chat project is built using ReactJS, Socket.io, ExpressJS. It allows users to interact with each other in a private room created by the user. The user can share the unique room ID with their friends to join into the room. I'll be connecting this web app to MongoDB or Firebase for the database and Firebase or JWT for the Authentication in the next version.",
    //   images: [R2],
    // },
  ];

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
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      id="projects"
      className="w-full my-auto flex-col justify-between bg-slate-900  relative z-10 xl:min-h-screen md:flex-row"
    >
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
                  size={40}
                />
                <div className="px-6 min-w-[90%] max-w-[90%]  flex flex-col justify-end self-end">
                  <div className=" pb-24 flex flex-col">
                    <div className=" flex-col justify-between items-center space-y-4">
                      {project.affliation && (
                        <h4 className="font-bold text-xl">
                          {project.affliation}
                        </h4>
                      )}
                      <div
                        onClick={() =>
                          document
                            .getElementById(`project-modal-${idx + 1}`)
                            .classList.toggle("hidden")
                        }
                        className="flex justify-between cursor-pointer hover:underline"
                      >
                        <h4 className="font-extrabold text-4xl ">
                          {project.title}{" "}
                          {project.subTitle && `- ${project.subTitle}`}
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
                          key={idx}
                          onClick={() => {
                            setCurrentItem(idx);
                          }}
                          className={`w-[15px] h-[15px]  transition duration-300 rounded-full ${
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
                  size={40}
                />
                <ProjectsModal
                  item={{
                    name: `project-modal-${idx + 1}`,
                    images: projects[idx].images,
                  }}
                />
              </div>
            );
        })}
      </div>
      <div
        id="contact"
        className="bg-slate-900 flex flex-col items-center justify-center py-4"
      >
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
    </motion.div>
  );
}
