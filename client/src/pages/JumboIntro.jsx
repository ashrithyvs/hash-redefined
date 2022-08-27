import { motion } from "framer-motion";
export default function JumboIntro() {
  return (
    <div className=" flex place-items-center h-screen z-0 w-full bg-brand bg-center bg-no-repeat bg-[length:105%_105%] py-28 transition-all duration-75 sticky top-0">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-col justify-center self-center justify-self-center mx-auto text-center"
        >
          <h1
            className="text-8xl font-bold italic"
            style={{ fontFamily: "Brig" }}
          >
            Ashrith Yakkali
          </h1>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl font-bold italic text-center my-4"
        >
          A MERN stack Developer
        </motion.h1>
      </div>
    </div>
  );
}
