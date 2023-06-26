import { motion} from "framer-motion";
import { Floating } from "./floating";

export const Contact = () => {

  return (
    <motion.div
      id="contact"
      className="w-full h-[100vh] bg-slate-800 flex items-center justify-center sticky top-0 overflow-x-hidden"
    >
      <motion.div className="mt-[-100px] flex flex-col items-center">
        <Floating className="text-4xl text-slate-200 font-bold" delay={0}>
          <motion.a
            className="hover:text-black"
            target="_blank"
            href="https://fb.com/bowber2"
          >
            Facebook
          </motion.a>
        </Floating>
        <Floating className="text-4xl text-slate-200 font-bold mt-2" delay={0.2}>
          <motion.a
            className="hover:text-black"
            target="_blank"
            href="https://www.linkedin.com/in/l%C3%A2m-nguy%E1%BB%85n-956484263/"
          >
            LinkedIn
          </motion.a>
        </Floating>
      </motion.div>
    </motion.div>
  );
};
