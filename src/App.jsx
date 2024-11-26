import { Sidebar, Footer } from "./components";
import { motion, useScroll, useSpring } from "framer-motion";
import { Hero, About, Skills, Experience, Projects } from "./pages";
function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="App  text-slate-200 bg-slate-900">
      <motion.div className="progress-bar z-50 " style={{ scaleX }} />
      <div className="flex items-start bg-slate-900 h-[100vh]">
        <Sidebar />
        <div className="flex-col ml-[15vw] w-[85vw]">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          {/* <Contact /> */}
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
