import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Sidebar() {
  const navItems = ["About", "Skills", "Experience", "Projects", "Contact"];
  const [currentPage, setCurrentPage] = useState(navItems[0]);

  return (
    <motion.div className="font-extrabold fixed italic w-[15vw] h-[100vh] py-60 bg-slate-900 flex-col space-y-6 px-8 items-center self-center justify-center">
      <h1 className="text-5xl  text-center">{"<Hash />"}</h1>
      <div className="flex-col space-y-4 ">
        {navItems.map((item, idx) => {
          return (
            <motion.h1
              whileHover={{ scale: 1.2 }}
              onClick={() => setCurrentPage(navItems[idx])}
              className={`font-semibold text-center cursor-pointer ${
                currentPage === item ? "text-slate-100" : "text-slate-400"
              }`}
            >
              {item}
            </motion.h1>
          );
        })}
      </div>
    </motion.div>
  );
}
