"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import BorderedCard from "./layout/BorderedCard";
import { MarqueeComp } from "./layout/MarqueeComp";

interface CarouselCardData {
  children?: ReactNode;
  className?: string;
  showOuterBorder?: boolean;
  showInnerBorder?: boolean;
  backgroundImage?: string;
  innerBorderColor?: string;
  outerBorderColor?: string;
  id: string | number;
}

interface CarouselProps {
  cards: CarouselCardData[];
  className?: string;
}

const Carousel = ({ cards, className = "" }: CarouselProps) => {
  return (
    <div className={`relative w-full min-h-screen overflow-hidden ${className}`}>
      {/* Background Marquee */}
      <div className="absolute inset-0 z-0 -mt-[40vh] flex items-center justify-center">
        <MarqueeComp title="Portfolio" />
      </div>

      {/* Carousel Container */}
      <div className="relative z-10 w-full h-full flex items-center py-8">
        <motion.div
          className="flex gap-8 px-8 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{
            left: -(cards.length * 600 - window.innerWidth + 200),
            right: 200
          }}
          dragElastic={0.1}
          whileDrag={{ cursor: "grabbing" }}
          style={{
            cursor: "grab"
          }}
        >
          {cards.map((cardData) => (
            <motion.div
              key={cardData.id}
              className="flex-shrink-0"
            >
              <BorderedCard
                showOuterBorder={cardData.showOuterBorder}
                showInnerBorder={cardData.showInnerBorder}
                backgroundImage={cardData.backgroundImage}
                innerBorderColor={cardData.innerBorderColor}
                outerBorderColor={cardData.outerBorderColor}
                className={cardData.className}
              >
                {cardData.children}
              </BorderedCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Drag Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-2 text-white/60 text-sm">
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="text-white/60"
          >
            <path 
              d="M8 6L12 2L16 6M8 18L12 22L16 18M2 12L6 8V16L2 12ZM22 12L18 8V16L22 12Z" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          <span>Drag to scroll</span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
