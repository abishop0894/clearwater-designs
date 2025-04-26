"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TextAppearUp } from "@/lib/helpers/TextAppearUp"
import Link from "next/link"

export const HomeHero = () => {
  // Array of carousel images
  const slides = [
    "https://jrdisplays.s3.us-east-1.amazonaws.com/portfolio/interior/IMG-20240410-WA0001.jpg",
    "https://jrdisplays.s3.us-east-1.amazonaws.com/portfolio/interior/IMG-20250219-WA0005.jpg",
    "https://jrdisplays.s3.us-east-1.amazonaws.com/portfolio/interior/IMG-20250219-WA0006.jpg"
  ];

  // State to track current slide
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  // Updated cubic bezier curve for left transition
  const customEase = [0.46, 0.14, 0.15, 0.86];

  return (
    <div className="h-screen w-full flex items-center relative overflow-hidden bg-black">
      {/* Carousel Images */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.5, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ 
            opacity: { duration: 1, ease: customEase },
            x: { duration: 5, ease: customEase }
          }}
        >
          <motion.img
            src={slides[currentIndex]}
            className="h-full w-full object-cover object-center absolute inset-0 [mask-image:radial-gradient(square,transparent,black_20%)] pointer-events-none"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1.1 }}
            transition={{ 
              scale: { duration: 1, ease: customEase }
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-start gap-6">
        <TextAppearUp delay={0.1} className="text-4xl md:text-6xl lg:text-8xl font-bold text-white max-w-4xl">
          Clearwater Luxury Designs
        </TextAppearUp>
        
        <TextAppearUp delay={0.2} className="text-lg md:text-xl text-gray-300 max-w-2xl">
       Text here
        </TextAppearUp>

        <TextAppearUp delay={0.3} className="inline-block">
       <Link href="/contact">
      <button className="bg-white text-black px-4 py-2 rounded-md">Get Started</button>
       </Link>
        </TextAppearUp>
      </div>

      {/* Carousel Indicator Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 transition-all duration-300 ${
              index === currentIndex ? "bg-white w-6" : "bg-white/50"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}