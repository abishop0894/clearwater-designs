"use client"
import { motion, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";
import { MarqueeComp } from "./MarqueeComp";
import Image from "next/image";
import { useRef } from "react";

interface SectionHeaderProps {
  title: string,
  backgroundImg: string
}

const SectionHeader = ({title, backgroundImg} : SectionHeaderProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.9", "end 0.1"]
  });

  // More pronounced transforms for better visibility
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, -8]);
  const translateY = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  return (
    <div ref={targetRef} className="w-full h-screen flex items-center justify-center">
      <motion.div
        className="w-full md:h-[80vh] h-full z-10 flex items-center justify-center relative"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d"
        }}
      >
        <motion.div
          className="w-full h-full flex items-center justify-center relative"
          style={{
            rotateX,
            rotateY,
            y: translateY,
            scale,
            opacity
          }}
        >
          <Image 
            src={backgroundImg} 
            alt="background" 
            fill 
            className="w-[80vw] md:px-[5vw] h-[80vh] object-cover" 
          />
          <MarqueeComp title={title} />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default SectionHeader