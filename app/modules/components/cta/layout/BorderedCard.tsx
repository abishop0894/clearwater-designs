"use client";
import { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface BorderedCardProps {
  children?: ReactNode;
  className?: string;
  showOuterBorder?: boolean;
  showInnerBorder?: boolean;
  backgroundImage?: string;
  innerBorderColor?: string;
  outerBorderColor?: string;
}

const BorderedCard = ({
  children,
  className = "",
  showOuterBorder = false,
  showInnerBorder = false,
  backgroundImage,
  innerBorderColor = 'black',
  outerBorderColor = 'black',
}: BorderedCardProps) => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Main Card Body */}
      <motion.div 
        className={`relative w-[90vw] h-[50vh] md:w-[40vw] md:h-[60vh] overflow-hidden group ${className}`}
        whileHover="hover"
        initial="initial"
      >
        {/* Background Image */}
        {backgroundImage && (
          <>
            <Image
              src={backgroundImage}
              alt="Card background"
              fill
              className="object-cover object-center"
              style={{ pointerEvents: 'none' }}
            />
            {/* Dimmed Overlay */}
            <span 
              className="absolute inset-0 bg-black/40 z-[1]"
              style={{ pointerEvents: 'none' }}
            />
          </>
        )}

        {/* Outer Border */}
        {showOuterBorder && (
          <div 
            className={`absolute border border-${outerBorderColor}`}
            style={{
              top: '-1vh',
              left: '-1vh',
              right: '-1vh',
              bottom: '-1vh',
              pointerEvents: 'none'
            }}
          />
        )}

        {/* Inner Border */}
        {showInnerBorder && (
          <motion.div 
            className={`absolute border border-${innerBorderColor} z-[2]`}
            style={{
              top: '1vh',
              left: '1vh',
              right: '1vh',
              bottom: '1vh',
              pointerEvents: 'none'
            }}
            variants={{
              initial: { scale: 1 },
              hover: { scale: 0.97 }
            }}
            transition={{ duration: 0.3, ease: [0.785, 0.135, 0.15, 0.86] }}
          />
        )}

        {/* Content */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default BorderedCard;
