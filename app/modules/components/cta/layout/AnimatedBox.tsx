"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedBoxProps {
  text: string;
}

const AnimatedBox = ({ text }: AnimatedBoxProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const isInView = useInView(targetRef, {
    margin: "-100px 0px -100px 0px"
  });

  return (
    <div ref={targetRef} className="flex items-center justify-center min-h-screen">
      {/* Outer Box */}
      <motion.div
        className="relative flex items-center justify-center border border-white overflow-hidden"
        style={{
          width: 60,
          height: 60,
        }}
        initial={{ scaleX: 0.1 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0.1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Inner Box */}
        <motion.div
          className="absolute flex items-center justify-center border border-white overflow-hidden"
          style={{
            width: 40,
            height: 40,
          }}
          initial={{ scaleX: 0.1 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0.1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        >
          {/* Text */}
          <motion.span
            className="text-white text-sm font-medium whitespace-nowrap"
            initial={{ x: 20, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
          >
            {text}
          </motion.span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedBox; 