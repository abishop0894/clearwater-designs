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
    offset: ["start end", "end start"]
  });

  // Transform from 6.9vh when entering viewport to -6.9vh when exiting
  const rotateValue = useTransform(scrollYProgress, [0, 0.5, 1], [6.9, 0, -6.9]);
  const translateY = useTransform(scrollYProgress, [0, 0.5, 1], [6.9, 0, -6.9]);
  //for commit

  // Create the combined transform string
  const transform = useTransform(
    [translateY, rotateValue, rotateValue],
    ([translateYVal, rotateXVal, rotateYVal]) => 
      `translate3d(0px, ${translateYVal}vh, 0px) scale3d(1, 1, 1) rotateX(${rotateXVal}deg) rotateY(${rotateYVal}deg) rotateZ(0deg)`
  );
  
  return (
    <div ref={targetRef} className="w-full h-screen flex items-center justify-center">
      <motion.div
        className="w-full md:h-[80vh] h-full z-10 flex items-center justify-center"
        style={{
          willChange: 'transform',
          transformStyle: 'preserve-3d',
          transform
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
    </div>
  )
}

export default SectionHeader