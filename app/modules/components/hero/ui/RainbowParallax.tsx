"use client"
// components/RainbowParallax/index.tsx
import React, {  useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ParallaxOptions } from '@/lib/utils/types';
import  Nav  from '@/app/modules/layout/Nav';

interface ParallaxHeroProps extends ParallaxOptions {
  title: string;
}

export const ParallaxHero: React.FC<ParallaxHeroProps> = ({ 
  title, 
}) => {
  const [rainbowOpacity, setRainbowOpacity] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  // Transform values based on scroll position
  const titleY = useTransform(scrollY, [0, 500], [0, 350]);
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const bgPositionY = useTransform(scrollY, [0, 500], ['50%', '60%']);
  const bgSize = useTransform(scrollY, [0, 500], [ '300%', '250%']);
  const rainbowAdditionalOpacity = useTransform(scrollY, [0, 500], [0, 0.6]);
  const combinedOpacity = useTransform(rainbowAdditionalOpacity, value => 0.4 + value);

  console.log(setRainbowOpacity)

  
  

  return (
    <div className="w-full relative">
        <Nav />

      <div 
        ref={heroRef}
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Parallax Effect */}
        <motion.div 
          className="absolute inset-0 w-screen h-screen bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url(https://jrdisplays.s3.us-east-1.amazonaws.com/portfolio/interior/IMG-20250219-WA0007.jpg)`,
            backgroundPositionY: bgPositionY,
            backgroundSize: bgSize,
          }}
        />
        
        {/* Rainbow Overlay */}
        {!rainbowOpacity && (
          <div 
            className="absolute inset-0 w-full h-full opacity-40 z-[5]"
            style={{
              background: 'linear-gradient(#30f89c, #352ce6, #fc5e9d)'
            }}
          />
        )}
        
        {/* Optional Rainbow with Dynamic Opacity */}
        {rainbowOpacity && (
          <motion.div 
            className="absolute inset-0 w-full h-full z-[4]"
            style={{
              background: 'linear-gradient(#FFFFFF, #000000, #000000)',
              opacity: combinedOpacity,
            }}
          />
        )}
        
        {/* Rainbow Border at Bottom */}
        <div 
          className="absolute bottom-0 left-0 w-full h-1.5 z-10"
          style={{
            background: 'linear-gradient(to right, #000000, #FFD700, #000000)'
          }}
        />
        
        {/* Title with Parallax Effect */}
        <motion.div 
          className="container mx-auto text-center z-[50]" 
          style={{ 
            y: titleY,
            opacity: titleOpacity
          }}
        >
          <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-extralight">
            {title}
          </h1>
        </motion.div>
      </div>

      
    </div>
  );
};

export default ParallaxHero;