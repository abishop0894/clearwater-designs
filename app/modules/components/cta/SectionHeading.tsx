"use client"
import { motion, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";
import { MarqueeComp } from "./MarqueeComp";
import Image from "next/image";
interface SectionHeaderProps {
title: string,
backgroundImg: string
}

const SectionHeader = ({title, backgroundImg} : SectionHeaderProps) => {
     const { scrollY } = useScroll();
  
  // Convert scroll position to rotation values
 
  // Adjust the input range [0, 1000] based on your needs
const rotateX = useTransform(scrollY, [0, 1000], [-3.3838, 15]);
const rotateY = useTransform(scrollY, [0, 1000], [-3.3838, 15]);
return (
    <div className="w-full h-screen flex items-center justify-center ">
        {/*infintie text carousel import here */}
      
       <motion.div
       className="w-full h-[80vh] z-10 flex items-center justify-center"
      style={{
        willChange: 'transform',
        transformStyle: 'preserve-3d',
        y: '-3.3838vh',
        rotateX,
        rotateY,
      }}
    >
      <Image src={backgroundImg} alt="background" fill className="w-[80vw] md:px-[5vw] h-[80vh] object-cover" />
     <MarqueeComp title={title} />
    </motion.div>
    </div>
)

}

export default SectionHeader