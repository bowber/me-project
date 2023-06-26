import { HTMLMotionProps, motion } from "framer-motion";

interface FloatingProps extends HTMLMotionProps<"div"> {
  delay?: number;
}
export const Floating = (props: FloatingProps) => (
  <motion.div
    {...props}
    initial={{
      opacity: 0,
      y: 100,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    transition={{ delay: props.delay }}
  />
)