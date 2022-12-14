import { useState } from "react";
import "./App.css";
import { Sidebar, Footer } from "./components";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  JumboIntro,
  About,
  Skills,
  Experience,
  Projects,
  Contact,
} from "./pages";
function App() {
  const [count, setCount] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="App  text-slate-200 bg-slate-900">
      <motion.div className="progress-bar z-50" style={{ scaleX }} />
      <div className="flex items-start mt-[10px] h-[100vh]">
        <Sidebar />
        <div className="flex-col ml-[15vw] w-[85vw]">
          <JumboIntro />
          <About />
          {/* <Skills /> */}
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
