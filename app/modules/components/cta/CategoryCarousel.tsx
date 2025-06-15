import React, { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface CategoryCard {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface CategoryCarouselProps {
  categories: CategoryCard[];
}

const CategoryCarousel: React.FC<CategoryCarouselProps> = ({ categories }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust this value based on your card width
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {categories.map((category) => (
          <div 
            key={category.id}
            className="flex-none w-[300px] snap-start"
          >
            <div className="relative h-[400px] mx-2 rounded-lg overflow-hidden">
              <img
                src={category.image}
                alt={category.imageAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-sm text-white/90">{category.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => scroll('left')}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Previous category"
        >
          <ChevronLeftIcon className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Next category"
        >
          <ChevronRightIcon className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
};

// Example usage
const CategoryCarouselExample: React.FC = () => {
  const categories: CategoryCard[] = [
    {
      id: '1',
      title: 'Interior Design',
      description: 'Transform your space with our expert interior design services',
      image: 'https://jrdisplays.s3.us-east-1.amazonaws.com/portfolio/interior/IMG-20240410-WA0001.jpg',
      imageAlt: 'Interior design showcase'
    },
    {
      id: '2',
      title: 'Exterior Design',
      description: 'Create stunning outdoor spaces that complement your home',
      image: 'https://jrdisplays.s3.us-east-1.amazonaws.com/portfolio/interior/IMG-20240410-WA0001.jpg',
      imageAlt: 'Exterior design showcase'
    },
    {
      id: '3',
      title: 'Renovation',
      description: 'Breathe new life into your existing spaces with our renovation services',
      image: 'https://jrdisplays.s3.us-east-1.amazonaws.com/portfolio/interior/IMG-20240410-WA0001.jpg',
      imageAlt: 'Renovation project showcase'
    }
  ];

  return <CategoryCarousel categories={categories} />;
};

export default CategoryCarouselExample; 