"use client"
import { useState, useEffect, useMemo, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TextAppearUp } from "@/lib/helpers/TextAppearUp"
import Link from "next/link"
import SplitText from "../cta/layout/SplitText"

export const HomeHero = () => {
  // Memoized array of carousel images to prevent recreation on each render
  const slides = useMemo(() => [
    "https://jrdisplays.s3.us-east-1.amazonaws.com/portfolio/interior/IMG-20240410-WA0001.jpg",
    "https://jrdisplays.s3.us-east-1.amazonaws.com/portfolio/interior/IMG-20250219-WA0005.jpg",
    "https://jrdisplays.s3.us-east-1.amazonaws.com/portfolio/interior/IMG-20250219-WA0006.jpg"
  ], []);

  // State to track current slide
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Ref-based previous index to avoid update conflicts
  const previousIndexRef = useRef(slides.length - 1);
  
  // Update previous index before current index changes
  useEffect(() => {
    const newPreviousIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    previousIndexRef.current = newPreviousIndex;
  }, [currentIndex, slides.length]);

  // Image preloading - Preloads all images on component mount to prevent loading delays
  useEffect(() => {
    slides.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [slides]);

  // Memoized callbacks - useCallback for the nextSlide function to prevent useEffect recreation
  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      
      // Transition lock - Prevents multiple transitions from overlapping
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1200);
    }
  }, [slides.length, isTransitioning]);
  
  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Stable dependencies - Memoized customEase to prevent unnecessary re-renders
  const customEase = useMemo(() => [0.785, 0.135, 0.15, 0.86], []);

  // Get previous index for background image from ref
  const previousIndex = previousIndexRef.current;

  return (
    <div className="h-screen w-full flex items-center relative overflow-hidden bg-black">
      {/* Previous Image (Background) */}
      <div className="absolute inset-0 w-full h-full z-[1]">
        <img
          key={`bg-${previousIndex}`}
          src={slides[previousIndex]}
          className="h-full w-full object-cover object-center absolute inset-0 [mask-image:radial-gradient(square,transparent,black_20%)] pointer-events-none"
          loading="eager"
          decoding="sync"
        />
      </div>

      {/* Carousel Images */}
      <AnimatePresence initial={false}>
        <motion.div
          key={`slide-${currentIndex}`}
          className="absolute inset-0 w-full h-full z-[2]"
          initial={{ x: "100%", }}
          animate={{ x: 0 }}
          exit={{ x: -40,  }}
          transition={{ 
            duration: 1.2,
            ease: customEase
          }}
        >
          <motion.img
            src={slides[currentIndex]}
            className="h-full w-full object-cover object-center absolute inset-0 [mask-image:radial-gradient(square,transparent,black_20%)] pointer-events-none"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1.1,  }}
            transition={{ 
              scale: { duration: 1, ease: customEase }
            }}
            loading="eager"
            decoding="sync"
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-start gap-6">
        
        <SplitText 
          text="Clearwater Luxury Designs"
          delay={0.05}
          textAlign="left"
          duration={1}
          ease="easeInOut"
          className="text-4xl md:text-6xl text-wrap overflow-visible h-[25vh] lg:text-8xl font-bold text-white max-w-6xl"
        />
      

        <TextAppearUp delay={0.3} className="inline-block">
          <Link href="/contact">
            <button className="bg-white text-black px-4 py-2 rounded-md">Get Started</button>
          </Link>
        </TextAppearUp>
      </div>
    </div>
  );
}