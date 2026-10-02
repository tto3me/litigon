import { Slot } from "@radix-ui/react-slot";
import { HTMLMotionProps, motion, useReducedMotion } from "framer-motion";

interface MotionAnimateProps extends HTMLMotionProps<"div"> {
  asChild?: boolean;
  delay?: number;
  once?: boolean;
  blur?: boolean;
  scale?: boolean;
  y?: number;
  opacity?: number;
}

export const AnimateOnView = ({
  children,
  asChild,
  delay = 0,
  once = true,
  blur = false,
  scale = false,
  y = 20,
  opacity = 0,
  ...props
}: MotionAnimateProps) => {
  const Component = asChild ? motion.create(Slot) : motion.div;
  const reduceMotion = useReducedMotion();
  const entranceY = Math.min(Math.abs(y), 20) * Math.sign(y || 1);

  return (
    <Component
      initial={reduceMotion ? false : {
        opacity: blur ? Math.max(opacity, 0.08) : opacity,
        y: entranceY,
        scale: scale ? 0.98 : 1
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1
      }}
      viewport={{ once, margin: "120px 0px", amount: 0.01 }}
      transition={{
        duration: reduceMotion ? 0 : 0.38,
        delay: reduceMotion ? 0 : Math.min(delay, 0.12),
        ease: [0.22, 1, 0.36, 1]
      }}
      {...props}
    >
      {children}
    </Component>
  );
};
