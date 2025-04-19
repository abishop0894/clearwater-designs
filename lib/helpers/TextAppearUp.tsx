"use client"
import { motion } from "framer-motion";

interface TextAppearUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

// Custom ease curve to match nav animations
const customEase = [0.65, 0.05, 0, 1];

export const TextAppearUp = ({ children, delay = 0, className = "" }: TextAppearUpProps) => {
  const variants = {
    hidden: { y: "140%", rotate: 1, opacity: 0 },
    visible: { 
      y: 0,
      rotate: 0,
      opacity: 1,
      transition: { 
        duration: 1.3,
        delay: delay,
        ease: customEase
      }
    }
  };

  return (
    <div className="overflow-hidden relative">
      <motion.div
        className={className}
        variants={variants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
