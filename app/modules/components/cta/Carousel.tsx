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
  vertical?: boolean;
}

const Carousel = ({ cards, className = "", vertical = false }: CarouselProps) => {
  return (
    <div className={`relative w-full h-auto bg-black ${vertical ? 'h-auto -mt-[5vh] pt-[90vh] max-h-screen overflow-y-auto' : 'overflow-hidden'} ${className}`}>
      {/* Background Marquee */}
     {!vertical && <div className="absolute inset-0 z-0 mt-[1/2] flex items-center justify-center">
        <MarqueeComp title="Portfolio" />
      </div>}

      {/* Carousel Container */}
      <div className={`relative z-10 w-full h-full flex items-center py-8 ${vertical && 'justify-center'}`}>
        {vertical ? (
          // Vertical scroll layout
          <>
          <span className="h-[100vh]"></span>
          <div className="flex flex-col gap-8 py-8 w-full items-center">
            {cards.map((cardData) => (
              <div
                key={cardData.id}
                className="flex-shrink-0 m-2"
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
              </div>
            ))}
            {/* Empty space after last card to ensure cards are out of viewport */}
            <div className="h-[100vh]" />
          </div>
          </>
        ) : (
          // Horizontal drag layout
          <motion.div
            className="flex gap-8 px-8 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{
              left: -(cards.length * 600 - 1200),
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
        )}
      </div>

      
    </div>
  );
};

export default Carousel;