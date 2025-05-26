import { motion, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";

interface SectionHeaderProps {
title: string,
backgroundImg: string
}

const SectionHeader = ({title, backgroundImg} : SectionHeaderProps) => {
     const { scrollY } = useScroll();
  
  // Convert scroll position to rotation values
  // Adjust the input range [0, 1000] based on your needs
  const rotateX = useTransform(scrollY, [0, 1000], [-3.3838, -15]);
  const rotateY = useTransform(scrollY, [0, 1000], [-3.3838, -15]);
return (
    <div className="w-full h-full ">
        {/*infintie text carousel import here */}
       <span className="w-full h-full px-[5vw] z-10">{title}</span>
       <motion.div
      style={{
        willChange: 'transform',
        transformStyle: 'preserve-3d',
        y: '-3.3838vh',
        rotateX,
        rotateY,
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      
    </motion.div>
    </div>
)

}

export default SectionHeader