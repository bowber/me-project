import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Floating } from "./floating";

export const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const transX = useTransform(scrollYProgress, [0.5, 1], [0, 300])
  const sprintTransX = useSpring(transX, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <motion.div
      id="about"
      className="w-full h-[100vh] bg-slate-400 flex items-center justify-center sticky top-0 overflow-x-hidden"
    >
      <motion.div
        className="mt-[-100px] container px-8 box-border"
        style={{ x: sprintTransX }}
        ref={ref}
      >

        <Floating
          className="text-4xl text-slate-800 font-bold leading-tight"
          delay={0.1}>
          - Name: Nguyen Phuc Bao Lam
        </Floating>
        <Floating
          className="text-4xl text-slate-800 font-bold leading-tight"
          delay={0.2}>
          - Age: {new Date().getFullYear() - 2003}
        </Floating>
        <Floating
          className="text-4xl text-slate-800 font-bold leading-tight"
          delay={0.3}>
          - Location: Ho Chi Minh City, Viet Nam
        </Floating>
      </motion.div>

    </motion.div>
  );
};
