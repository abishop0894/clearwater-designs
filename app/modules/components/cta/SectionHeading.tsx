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
    const rotateX = useTransform(scrollY, [0, 1000], [6.9, 10  ]);
    const rotateY = useTransform(scrollY, [0, 1000], [-6.9, 10]);
    const scale = useTransform(scrollY, [0, 1000], [1.3, 1.3]);
    return (
        <div className="w-full h-screen flex items-center justify-center ">
            {/*infintie text carousel import here */}
          
          <motion.div
          className="w-full md:h-[80vh] h-full z-10 flex items-center justify-center"
          style={{
            willChange: 'transform',
            transformStyle: 'preserve-3d',
            y: 0,
            transform: `translate3d(0px, ${rotateY}vh, 0px) scale3d(${scale}, ${scale}, ${scale})`,
            rotateX: rotateX,
            transition: "all 0.7s ease-out",
            rotateY: rotateY,
          }}
        >
          <Image src={backgroundImg} alt="background" fill className="w-[80vw] md:px-[5vw] h-[80vh] object-cover" />
        <MarqueeComp title={title} />
        </motion.div>
        </div>
    )

    }

    export default SectionHeader