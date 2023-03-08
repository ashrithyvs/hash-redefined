import React from "react";
import { motion } from "framer-motion";
export default function About() {
  return (
    <div
      id="about"
      className="w-full bg-purple-600 about flex items-center justify-center relative z-10 xl:min-h-screen flex-col md:flex-row"
    >
      <div className="w-1/2 m-auto">
        <motion.p
          initial={{ opacity: 0, scale: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-slate-100 font-bold text-xl self-end"
        >
          Hey! I'm Ashrith Yakkali. I'm a self taught MERN stack developer
          primarily oriented towards client side webapp development in React.js
          . Do reach out to me for Contracts and Freelancing to projects through
          contact section!
        </motion.p>
      </div>
    </div>
  );
}
