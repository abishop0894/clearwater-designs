"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface AnimatedParagraphProps {
  text: string;
  subparagraph?: boolean;
  subText?: string;
  className?: string;
  textClassName?: string;
  subTextClassName?: string;
}

const AnimatedParagraph = ({ 
  text,
  subparagraph = false,
  subText = "",
  className = "",
  textClassName = "text-lg",
  subTextClassName = "text-sm opacity-80"
}: AnimatedParagraphProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Trigger animation when 100px from center
  const isInView = useInView(targetRef, {
    margin: "-100px 0px -100px 0px"
  });

  // Scroll-based fade out when going below viewport
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  // Fade out when scrolling down past the element
  const fadeOpacity = useTransform(
    scrollYProgress,
    [0.8, 1], // When element is 80% through viewport to fully past
    [1, 0]
  );

  // Animation variants for main text
  const mainTextVariants = {
    hidden: { 
      rotateX: 25,
      rotateY: 8,
      y: 50,
      scale: 0.8,
      opacity: 0
    },
    visible: {
      rotateX: 0,
      rotateY: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      transition: { 
        duration: 1.5, 
        ease: "easeOut" 
      }
    }
  };

  // Animation variants for subtext with delay
  const subTextVariants = {
    hidden: { 
      rotateX: 25,
      rotateY: 8,
      y: 50,
      scale: 0.9,
      opacity: 0
    },
    visible: {
      rotateX: 0,
      rotateY: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      transition: { 
        duration: 1.5, 
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  return (
    <div ref={targetRef} className="flex items-center justify-center min-h-fit">
      <motion.div
        className={`relative ${className}`}
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          opacity: fadeOpacity
        }}
      >
        {/* Main Text */}
        <motion.p
          className={`relative ${textClassName} text-black text-[3em] text-center lg:text-[5.5em]`}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={mainTextVariants}
        >
          {text}
        </motion.p>

        {/* Subparagraph */}
        {subparagraph && subText && (
          <motion.p
            className={`relative mt-4 ${subTextClassName} text-black text-center text-[2em] lg:text-[40px]`}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={subTextVariants}
          >
            {subText}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default AnimatedParagraph;
