"use client"
import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from "framer-motion";
import ServiceQualityExample from '../cta/ServiceQuality';

// Type definitions
interface CategoryCardProps {
  title: string;
  ctaText: string;
  ctaHref: string;
  backgroundImage: string;
}

interface BrandLogo {
  name: string;
  href: string;
  svg: React.ReactNode;
}

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton: {
    text: string;
    href: string;
  };
  categoryCards: CategoryCardProps[];
}

// Category Card Component with Image Background
const CategoryCard: React.FC<CategoryCardProps> = ({ title, ctaText, ctaHref }) => {
  return (
    <div className="relative rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm p-6 shadow-lg overflow-hidden min-h-[300px] flex flex-col justify-end">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={"https://jrdisplays.s3.us-east-1.amazonaws.com/portfolio/interior/IMG-20240410-WA0001.jpg"}
          alt={title}
          fill
          className="object-cover object-center h-full w-full"
        />
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-lg font-bold text-white mb-4">{title}</h2>
        <a 
          href={ctaHref} 
          className="inline-flex items-center gap-1 font-medium text-white hover:text-gray-200 hover:underline transition-colors"
        >
          {ctaText}
          <ArrowRightIcon className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

// Brand Logo Component
const BrandLogo: React.FC<{ logo: BrandLogo }> = ({ logo }) => {
  return (
    <a href={logo.href} className="flex items-center justify-center">
      {logo.svg}
    </a>
  );
};

// Main Hero Section Component
const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  categoryCards,
}) => {
  // Carousel background functionality - same as HomeHero
  const slides = useMemo(() => [
    "https://jrdisplays.s3.us-east-1.amazonaws.com/portfolio/interior/IMG-20240410-WA0001.jpg",
    "https://jrdisplays.s3.us-east-1.amazonaws.com/portfolio/interior/IMG-20250219-WA0005.jpg",
    "https://jrdisplays.s3.us-east-1.amazonaws.com/portfolio/interior/IMG-20250219-WA0006.jpg"
  ], []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const previousIndexRef = useRef(slides.length - 1);
  
  useEffect(() => {
    const newPreviousIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    previousIndexRef.current = newPreviousIndex;
  }, [currentIndex, slides.length]);

  useEffect(() => {
    slides.forEach((src) => {
      const img = document.createElement('img');
      img.src = src;
    });
  }, [slides]);

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1200);
    }
  }, [slides.length, isTransitioning]);
  
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const customEase = useMemo(() => [0.785, 0.135, 0.15, 0.86], []);
  const previousIndex = previousIndexRef.current;

  return (
    <section className="relative min-h-screen bg-black">
      {/* Previous Image (Background) */}
      <div className="absolute inset-0 -mb-[62px] w-full h-full z-[1]">
        <img
          key={`bg-${previousIndex}`}
          src={slides[previousIndex]}
          className="h-full w-full object-cover object-center absolute inset-0 [mask-image:radial-gradient(square,transparent,black_20%)] pointer-events-none"
          loading="eager"
        />
      </div>

      {/* Carousel Images */}
      <AnimatePresence initial={false}>
        <motion.div
          key={`slide-${currentIndex}`}
          className="absolute inset-0 w-full h-full z-[2]"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: -40 }}
          transition={{ 
            duration: 1.2,
            ease: customEase
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
            loading="eager"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dimmed Overlay */}
      <div className="absolute inset-0 min-h-screen h-full  bg-black/70 z-[5]" />

      <div className="relative z-[6] flex flex-col min-h-screen">
        {/* Main Content */}
        <div className="flex-grow mx-auto grid max-w-screen-xl px-4 py-32 xl:grid-cols-12 xl:gap-16 2xl:px-0">
          {/* Hero Content */}
          <div className="mx-auto content-center text-center xl:col-span-7 xl:justify-self-start xl:text-start">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:max-w-2xl md:text-5xl xl:text-6xl">
              {title}
            </h1>
            <p className="mb-4 max-w-2xl text-white/80 md:text-lg xl:mb-8 xl:text-xl">
              {subtitle}
            </p>
            <div className="mb-6 flex items-center justify-center space-x-4 md:mb-0 xl:justify-start">
              <a 
                href={primaryButton.href} 
                className="rounded-lg bg-primary-700 px-6 py-3.5 text-center font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {primaryButton.text}
              </a>
              <a 
                href={secondaryButton.href} 
                className="inline-flex items-center rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm px-6 py-3.5 text-base font-medium text-white hover:bg-white/20 hover:border-white/50 focus:z-10 focus:outline-none focus:ring-4 focus:ring-white/20"
              >
                {secondaryButton.text}
                <ArrowRightIcon className="-me-1 ms-2 h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Category Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:mt-8 xl:col-span-5 xl:mt-0 xl:gap-8">
            {categoryCards.map((card, index) => (
              <CategoryCard 
                key={index}
                title={card.title}
                ctaText={card.ctaText}
                ctaHref={card.ctaHref}
                backgroundImage={card.backgroundImage}
              />
            ))}
          </div>
        </div>

        {/* Service Quality Section */}
        <div className="w-full bg-white/10 backdrop-blur-sm mb-[-45px] sm:-mb-[40px]">
          
            <ServiceQualityExample />
       
        </div>
      </div>
    </section>
  );
};

// Example usage with sample data
const ExampleHeroSection: React.FC = () => {
  const sampleData: HeroSectionProps = {
    title: "We Transform Your Interiors",
    subtitle: "At Clearwater Designs, we transform homes and offices into beautiful, functional spaces that reflect your unique style. Our certified interior designers specialize in complete makeovers, kitchen remodeling, and space planning for every budget. Contact us today for a free consultation and let's bring your dream space to life.",
    primaryButton: {
      text: "Free Quote",
      href: "#"
    },
    secondaryButton: {
      text: "Learn more",
      href: "#"
    },
    categoryCards: [
      {
        title: "Interior Design",
        ctaText: "Learn More",
        ctaHref: "#",
        backgroundImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center"
      }
    ]
  };

  return <HeroSection {...sampleData} />;
};

export default ExampleHeroSection;