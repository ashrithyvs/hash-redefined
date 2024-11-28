import React from "react";
import { motion } from "framer-motion";
export default function About() {
  return (
    <div
      id="about"
      className="w-full bg-purple-600 about flex items-center justify-center relative z-10 xl:min-h-screen flex-col md:flex-row"
    >
      <div className="w-[70%] m-auto flex flex-col space-y-2">
        <motion.p
          initial={{ opacity: 0, scale: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-slate-100 font-bold text-xl self-end"
        >
          👋 Hey there! I'm a software engineer with a multifaceted skill set in
          designing, developing, and optimizing SaaS. From building Full-stack
          Webapps (MERN) to automating workflows, developing Java-based SDKs,
          and acing blackbox testing (Appium), I've worn a lot of hats in my
          tech journey. 🎯
        </motion.p>
        <motion.p
          initial={{ opacity: 0, scale: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-slate-100 font-bold text-xl self-end"
        >
          I'm passionate about solving problems, experimenting with new tools,
          and bringing ideas to life through R&D, QA, and automation as well.
          Currently, I'm open to new opportunities—let's build something amazing
          together! 🚀
        </motion.p>
      </div>
    </div>
  );
}
