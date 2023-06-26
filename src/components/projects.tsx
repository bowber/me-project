import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Floating } from "./floating";

export const Projects = () => {

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const springProgress = useSpring(scrollYProgress, { damping: 50, stiffness: 200 });
  const transX = useTransform(springProgress, [0, 0.5, 1], [300, 0, -300])

  return (
    <motion.div
      id="projects"
      className="w-full h-[100vh] bg-slate-600 flex items-center justify-center sticky top-0 overflow-x-hidden"
    >
      <motion.div
        className="mt-[-100px] flex flex-col items-end"
        style={{ x: transX }}
        ref={ref}
      >
        <Floating className="text-4xl text-slate-200 font-bold" delay={0}>
          <span>
            ME Project - This website -{" "}
          </span>
          <a
            className="text-slate-800 hover:text-black"
            target="_blank"
            href="https://github.com/bowber/me-project">
            View Code
          </a>
        </Floating>
        {/* <Floating className="text-4xl text-slate-200 font-bold mt-2" delay={0.2}>
        <span>
            Dungeon Merchant -{" "}
          </span>
          <a
            className="text-slate-800 hover:text-black"
            target="_blank"
            Steam
          </a>
        </Floating> */}
      </motion.div>
    </motion.div>
  );
};
