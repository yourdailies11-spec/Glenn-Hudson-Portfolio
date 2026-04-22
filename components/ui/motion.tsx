"use client";

import { ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";

interface AnimationProps extends MotionProps {
  children: ReactNode;
  type?: "fade-in" | "slide-up" | "slide-in-left";
  delay?: number;
  respectMotion?: boolean;
  className?: string;
}

const animations = {
  "fade-in": {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
  "slide-up": {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
  "slide-in-left": {
    initial: { opacity: 0, x: -32 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export function AnimatedElement({
  children,
  type = "fade-in",
  delay = 0,
  respectMotion = true,
  className = "",
  ...props
}: AnimationProps) {
  const animation = animations[type] || animations["fade-in"];

  return (
    <motion.div
      className={className}
      initial={animation.initial}
      whileInView={animation.animate}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        ...animation.transition,
        delay: respectMotion ? 0 : delay,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger container for animating multiple children with delays
 */
export function StaggerContainer({
  children,
  delay = 0,
  className = "",
  ...props
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
} & MotionProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Individual child in a stagger container
 */
export function StaggerItem({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
