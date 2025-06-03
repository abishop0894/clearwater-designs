"use client";
import { ReactNode } from "react";

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
      <div 
        className={`relative w-[40vw] h-[40vh] ${className}`}
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
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
          <div 
            className={`absolute border border-${innerBorderColor}`}
            style={{
              top: '1vh',
              left: '1vh',
              right: '1vh',
              bottom: '1vh',
              pointerEvents: 'none'
            }}
          />
        )}

        {/* Content */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BorderedCard;
