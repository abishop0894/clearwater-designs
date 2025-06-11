"use client"
import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from "framer-motion";

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
  brandLogos: BrandLogo[];
}

// Category Card Component with Image Background
const CategoryCard: React.FC<CategoryCardProps> = ({ title, ctaText, ctaHref }) => {
  return (
    <div className="relative rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm p-6 shadow-lg overflow-hidden min-h-[300px] flex flex-col justify-end">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
        //change this back to a prop
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
    <section className="relative py-[16vh] antialiased md:py-[18vh] overflow-hidden bg-black">
      {/* Previous Image (Background) */}
      <div className="absolute inset-0 w-full h-full z-[1]">
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
      <div className="absolute inset-0 bg-black/70 z-[5]" />

      <div className="relative z-10 mx-auto grid max-w-screen-xl px-4 pb-8 xl:grid-cols-12 xl:gap-16 lg:pb-16 2xl:px-0">
        {/* Hero Content */}
        <div className="mx-auto content-center text-center xl:col-span-5 xl:justify-self-start xl:text-start">
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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-8 xl:col-span-7 xl:mt-0 xl:gap-8">
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

      {/* Brand Logos */}
      
    </section>
  );
};

// Example usage with sample data
const ExampleHeroSection: React.FC = ({}) => {
  const sampleData: HeroSectionProps = {
    title: "We Transform Your Interiors",
    subtitle: "Get in touch with us today.",
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
      },
      {
        title: "Lighting",
        ctaText: "Learn More",
        ctaHref: "#",
        backgroundImage: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=600&fit=crop&crop=center"
      }
    ],
    brandLogos: [
      {
        name: "Brand 1",
        href: "#",
        svg: (
          <svg className="h-10 hover:text-gray-900 dark:hover:text-white" viewBox="0 0 106 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M92.1288 21.0435C90.3398 21.4564 85.6148 21.6858 85.6148 21.6858L85.0337 23.5513C85.0337 23.5513 87.3732 23.3525 89.0859 23.5207C89.0859 23.5207 89.6364 23.4748 89.6975 24.1324C89.7281 24.8052 89.6516 25.5086 89.6516 25.5086C89.6516 25.5086 89.6058 25.9214 89.04 26.0285C88.3825 26.1355 83.948 26.3343 83.948 26.3343L83.2293 28.7503C83.2293 28.7503 82.9694 29.3008 83.5657 29.1479C84.1162 28.995 88.7648 28.1081 89.3764 28.2304C90.0186 28.3833 90.7526 29.2702 90.5385 30.0654C90.2939 31.0287 85.6453 33.9952 82.8317 33.7964C82.8317 33.7964 81.3485 33.8882 80.1099 31.885C78.9172 29.9736 80.5228 26.3802 80.5228 26.3802C80.5228 26.3802 79.8041 24.6981 80.3393 24.0865C80.3393 24.0865 80.6451 23.8265 81.5626 23.7501L82.7094 21.3952C82.7094 21.3952 81.4097 21.4717 80.6451 20.5236C79.9417 19.6062 79.8805 19.2086 80.431 18.9639C81.0121 18.6581 86.3946 17.6947 90.0951 17.8171C90.0951 17.8171 91.3949 17.6642 92.5417 19.912C92.5417 19.912 93.0616 20.8295 92.1441 21.0435M78.1832 30.096C77.7245 31.2122 76.4553 32.3896 74.9262 31.671C73.3665 30.937 70.9046 25.9214 70.9046 25.9214C70.9046 25.9214 69.9871 24.0559 69.8036 24.1171C69.8036 24.1171 69.6048 23.7501 69.4978 25.7991C69.3449 27.8328 69.5284 31.7933 68.6873 32.4202C67.9228 33.0319 67.0053 32.7719 66.4854 32.0532C66.0572 31.3345 65.8737 29.6066 66.1184 26.5943C66.3937 23.5819 67.0818 20.3707 67.9534 19.3768C68.8708 18.3676 69.6048 19.1015 69.8801 19.3768C69.8801 19.3768 71.0575 20.4472 73.0453 23.6125L73.3818 24.1935C73.3818 24.1935 75.1861 27.2059 75.3696 27.1906C75.3696 27.1906 75.5225 27.3435 75.6449 27.2212C75.8284 27.1753 75.7672 26.1967 75.7672 26.1967C75.7672 26.1967 75.4308 22.9396 73.7487 17.4348C73.7487 17.4348 73.5041 16.7314 73.6723 16.0586C73.8252 15.4469 74.4827 15.7528 74.4827 15.7528C74.4827 15.7528 77.0211 16.9761 78.2597 21.1047C79.483 25.2333 78.6572 28.9797 78.1985 30.096M65.7361 19.4991C65.4915 19.9273 65.3844 20.5236 64.3293 20.6918C64.3293 20.6918 54.0842 21.4105 53.5796 22.1292C53.5796 22.1292 53.2432 22.5574 53.7937 22.6644C54.3747 22.7867 56.699 23.0926 57.8 23.1537C58.9927 23.1537 62.999 23.1843 64.467 24.9887C64.467 24.9887 65.308 25.845 65.2774 27.787C65.2468 29.7748 64.8951 30.4782 64.1153 31.1969C63.3048 31.8697 56.3626 34.9892 51.8823 30.2183C51.8823 30.2183 49.8332 27.9246 52.6009 26.1814C52.6009 26.1814 54.5888 24.9581 59.6808 26.3802C59.6808 26.3802 61.2099 26.9307 61.1488 27.4964C61.057 28.1081 59.8796 28.7197 58.167 28.6892C56.5155 28.6433 55.2922 27.8481 55.5369 27.9858C55.7662 28.0622 53.7478 27.0071 53.1208 27.7258C52.5092 28.3986 52.6621 28.7962 53.2738 29.2091C54.8029 30.096 60.8123 29.7748 62.6014 27.7717C62.6014 27.7717 63.3201 26.9612 62.2344 26.3037C61.164 25.6921 58.0446 25.3098 56.8366 25.2639C55.6898 25.2028 51.3929 25.2639 50.7507 24.1477C50.7507 24.1477 50.1391 23.3525 50.8119 21.1812C51.5153 18.8875 56.5155 18.0006 58.6869 17.8171C58.6869 17.8171 64.6504 17.5724 65.7667 18.7957C65.7667 18.7957 65.9196 19.071 65.7361 19.4838M48.824 32.9401C48.1053 33.4753 46.5762 33.246 46.1327 32.6343C45.7046 32.0991 45.5517 29.9889 45.6281 26.6707C45.7352 23.2761 45.781 19.1168 46.5456 18.444C47.3102 17.7865 47.7689 18.3676 48.0747 18.811C48.3806 19.2697 48.7781 19.7744 48.8393 20.8295C48.931 21.8998 49.191 27.4047 49.191 27.4047C49.191 27.4047 49.5274 32.4202 48.8393 32.9401M50.3531 15.0494C48.2429 15.7681 46.8056 15.5387 45.5823 15.0035C45.0471 15.9668 44.7259 16.2574 44.3284 16.3185C43.7167 16.3797 43.1815 15.4011 43.1051 15.0952C42.9827 14.8659 42.6922 14.453 43.0439 13.5202C41.8512 12.4498 41.7594 11.0125 41.9735 10.0491C42.2488 8.91757 44.2672 4.6666 50.3837 4.16199C50.3837 4.16199 53.3808 3.94791 53.9007 5.5382H53.9924C53.9924 5.5382 56.8978 5.5382 56.8366 8.13771C56.8366 10.7372 53.6255 13.979 50.3531 15.0952M53.075 7.64839C51.1483 7.95422 48.1818 10.5231 46.7597 12.6486C48.9463 13.0462 52.7691 12.8933 54.4818 9.43747C54.4818 9.43747 55.2922 7.26611 53.075 7.64839ZM44.6189 9.33043C44.0073 10.3244 43.9767 10.9207 44.2672 11.3183C44.9859 10.2479 46.2551 8.56587 48.1665 7.25082C46.6985 7.40373 45.4599 8.01538 44.6189 9.33043ZM96.7162 32.8331C95.3094 36.2889 94.1167 39.7906 93.4286 45.0355C93.4286 45.0355 93.2757 46.06 92.4347 45.7236C91.5936 45.4178 90.2174 44.0416 89.9116 42.0996C89.6058 39.5612 90.7373 35.2797 93.0463 30.3559C92.3735 29.2855 91.8995 27.6952 92.2817 25.4627C92.2817 25.4627 92.8934 21.3341 97.022 17.603C97.022 17.603 97.5114 17.1901 97.7866 17.3278C98.123 17.4807 97.9854 18.7957 97.7101 19.4685C97.4655 20.1108 95.6305 23.2913 95.6305 23.2913C95.6305 23.2913 94.4837 25.4627 94.8048 27.16C96.9762 23.8265 101.915 17.0678 104.973 19.2086C106.915 20.5848 106.915 25.0193 105.463 27.5882C104.316 29.6219 101.074 33.827 96.7468 32.8484M103.108 22.4503C101.976 23.6736 99.9579 25.9979 98.3677 29.1479C100.05 28.9644 101.686 28.0316 102.19 27.5576C103.001 26.8389 104.866 24.8969 104.576 22.328C104.576 22.328 104.392 20.9824 103.108 22.4503ZM34.6031 34.6375C29.19 36.2889 24.0828 35.5244 21.2998 34.7904C21.2233 35.9219 21.101 36.396 20.9175 36.5794C20.7034 36.8241 18.9296 37.8333 17.951 36.396C17.5228 35.7078 17.3087 34.4693 17.1864 33.3377C10.917 30.4935 8.01165 26.3037 7.91991 26.1508C7.76699 25.9979 6.34491 24.5146 7.76699 22.6797C9.09733 21.0282 13.5012 19.3615 17.4464 18.704C17.5993 15.3399 17.9663 12.7404 18.4403 11.5935C19.0061 10.2173 19.7248 11.4406 20.367 12.3581C20.8869 13.0462 21.208 15.9974 21.2386 18.3523C23.8075 18.2299 25.3672 18.4134 28.2267 18.9639C31.9883 19.6062 34.4961 21.5329 34.2973 23.7042C34.1138 25.845 32.1565 26.7319 31.392 26.793C30.6274 26.8542 29.4041 26.2884 29.4041 26.2884C28.5478 25.8909 29.3277 25.5239 30.3216 25.0957C31.4226 24.5605 31.1779 24.0253 31.1779 24.0253C30.7803 22.802 25.9024 21.9916 21.0551 21.9916C21.0551 24.6676 21.1621 29.102 21.2386 31.6862C24.6332 32.3285 27.1716 32.1909 27.1716 32.1909C27.1716 32.1909 39.5575 31.8392 39.9092 23.9336C40.2915 16.0127 27.5233 8.42825 18.1192 6.04281C8.73034 3.58092 3.40899 5.32412 2.95025 5.55349C2.44564 5.79815 2.90438 5.8899 2.90438 5.8899C2.90438 5.8899 3.40899 5.96636 4.32646 6.27218C5.24394 6.57801 4.50996 7.03674 4.50996 7.03674C2.90438 7.58723 1.1153 7.26611 0.763601 6.53213C0.411903 5.81344 0.99297 5.15592 1.68108 4.19257C2.32331 3.19864 3.05729 3.22922 3.05729 3.22922C14.6786 -0.822962 28.8689 6.44038 28.8689 6.44038C42.1417 13.138 44.4048 21.0129 44.1602 24.0712C43.9461 27.0836 42.784 32.1756 34.6031 34.6528M9.06675 23.7042C7.7517 24.3159 8.66918 25.2945 8.66918 25.2945C11.1464 27.9399 14.174 29.6066 17.0794 30.6464C17.4158 26.0591 17.3852 24.4229 17.3852 22.1139C12.8896 22.4197 10.2901 23.1537 9.06675 23.7042Z" fill="currentColor" />
          </svg>
        )
      },
      {
        name: "Samsung",
        href: "#",
        svg: (
          <svg className="h-8 hover:text-gray-900 dark:hover:text-white" viewBox="0 0 210 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M198.522 14.8868V19.2429H201.583V23.5649C201.593 23.9511 201.572 24.3676 201.505 24.7009C201.384 25.507 200.618 26.8797 198.445 26.8797C196.285 26.8797 195.533 25.507 195.402 24.7009C195.347 24.3676 195.324 23.9511 195.324 23.5649V9.91396C195.324 9.4311 195.356 8.9026 195.459 8.50258C195.607 7.77503 196.252 6.34025 198.429 6.34025C200.713 6.34025 201.283 7.85289 201.414 8.50258C201.5 8.9329 201.505 9.6547 201.505 9.6547V11.3123H209.027V10.3324C209.027 10.3324 209.061 9.30991 208.97 8.35569C208.405 2.75274 203.788 0.980072 198.495 0.980072C193.192 0.980072 188.669 2.76923 188.01 8.35569C187.951 8.86655 187.86 9.78548 187.86 10.3324V22.8898C187.86 23.4368 187.877 23.8602 187.979 24.8596C188.469 30.3084 193.192 32.2399 198.474 32.2399C203.788 32.2399 208.478 30.3084 208.977 24.8596C209.066 23.8602 209.075 23.4368 209.087 22.8898V14.8868H198.522Z" fill="currentColor" />
          </svg>
        )
      }
      // Add more brand logos as needed
    ]
  };

  return <HeroSection {...sampleData} />;
};

export default ExampleHeroSection;