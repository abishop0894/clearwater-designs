import React from 'react';
import Image from 'next/image';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

// Type definitions
interface FeatureCard {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface FeatureCardsSectionProps {
  title: string;
  ctaText?: string;
  ctaHref?: string;
  features: FeatureCard[];
}

const FeatureCardsSection: React.FC<FeatureCardsSectionProps> = ({
  title,
  ctaText,
  ctaHref,
  features
}) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-12 lg:py-16 sm:px-6 lg:px-6">
        {/* Header */}
        <div className="text-center text-gray-900">
          <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white leading-tight">
            {title}
          </h2>
          {ctaText && ctaHref && (
            <a 
              href={ctaHref} 
              className="inline-flex items-center text-base sm:text-lg font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
            >
              {ctaText}
              <ChevronRightIcon className="ml-1 w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          )}
        </div>

        {/* Feature Cards Grid */}
        <div className="grid gap-6 mt-8 sm:mt-12 lg:mt-14 lg:gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.id} className="flex mb-2 md:flex-col md:mb-0">
              {/* Image */}
              <div className="mr-3 w-24 h-24 sm:w-28 sm:h-28 md:w-full md:h-48 lg:h-56 md:mr-0 flex-shrink-0">
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-full"
                  sizes="(max-width: 768px) 25vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="flex-1 md:mt-4">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 md:mb-2.5 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Example usage with sample data
const AboutHome: React.FC = () => {
  const sampleData: FeatureCardsSectionProps = {
    title: "Turn collaboration into innovation",
    ctaText: "Learn more about inner source",
    ctaHref: "#",
    features: [
      {
        id: '1',
        title: "Build as one team",
        description: "Work seamlessly across your organization on a platform designed for collaboration.",
        image: "https://jrdisplays.s3.us-east-1.amazonaws.com/portfolio/interior/IMG-20240410-WA0001.jpg",
        imageAlt: "Team collaboration in office"
      },
      {
        id: '2',
        title: "Transform your culture",
        description: "Embrace innersource, iterate faster, and ship more frequently using best tools from open source teams.",
        image: "https://jrdisplays.s3.us-east-1.amazonaws.com/portfolio/interior/IMG-20240410-WA0001.jpg",
        imageAlt: "Office transformation culture"
      },
      {
        id: '3',
        title: "Learn as you build",
        description: "Get insight into how your team builds today with community-backed KPIs.",
        image: "https://jrdisplays.s3.us-east-1.amazonaws.com/portfolio/interior/IMG-20240410-WA0001.jpg",
        imageAlt: "Learning and building process"
      }
    ]
  };

  return <FeatureCardsSection {...sampleData} />;
};

export default AboutHome;