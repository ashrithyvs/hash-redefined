import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Sidebar() {
  const navItems = [
    { name: "About", slug: "about" },
    { name: "Skills", slug: "skills" },
    { name: "Experience", slug: "experience" },
    { name: "Projects", slug: "projects" },
    { name: "Contact", slug: "contact" },
  ];
  const [currentPage, setCurrentPage] = useState(navItems[0]);

  // const observer = new IntersectionObserver(
  //   ([entry]) => {
  //     if (entry.isIntersecting) {
  //       console.log(entry.target.innerHTML);
  //       // setCurrentPage()
  //       return;
  //     }
  //     console.log("LEAVE");
  //   },
  //   {
  //     root: null,
  //     threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
  //   }
  // );

  // useEffect(() => {
  //   const el = document.getElementById("skills");
  //   observer.observe(el);
  // }, []);

  return (
    <motion.div className="font-extrabold fixed italic w-[15vw] h-[100vh] py-60 bg-slate-900 flex-col space-y-6 px-8 items-center self-center justify-center">
      <h1 className="text-5xl text-center cursor-pointer">{"<Hash />"}</h1>
      <div className="flex-col space-y-4 ">
        {navItems.map((item, idx) => {
          return (
            <motion.a
              key={idx}
              whileHover={{ scale: 1.2 }}
              onClick={() => {
                document
                  .getElementById(item.slug)
                  .scrollIntoView({ behavior: "smooth" });
                setCurrentPage(navItems[idx]);
              }}
              className={`font-semibold block text-center cursor-pointer ${
                currentPage.name === item.name
                  ? "text-slate-100"
                  : "text-slate-400"
              }`}
            >
              {item.name}
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
}
