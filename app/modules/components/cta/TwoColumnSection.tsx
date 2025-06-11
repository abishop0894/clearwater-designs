import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

// Type definitions
interface TwoColumnSectionProps {
  title: string;
  firstColumnContent: string;
  ctaText?: string;
  ctaHref?: string;
  secondColumnContent: string[];
}

const TwoColumnSection: React.FC<TwoColumnSectionProps> = ({
  title,
  firstColumnContent,
  ctaText,
  ctaHref,
  secondColumnContent
}) => {
  return (
    <section className="bg-black">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        {/* First Column */}
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="mb-4">
            {firstColumnContent}
          </p>
          {ctaText && ctaHref && (
            <a 
              href={ctaHref} 
              className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
            >
              {ctaText}
              <ChevronRightIcon className="ml-1 w-6 h-6" />
            </a>
          )}
        </div>

        {/* Second Column */}
        <div className="mt-4 font-light text-gray-500 sm:text-lg lg:mt-0 dark:text-gray-400">
          {secondColumnContent.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

// Example usage with sample data
const TwoColumnSectionComponent: React.FC = () => {
  const sampleData: TwoColumnSectionProps = {
    title: "Powering innovation at 200,000+ companies worldwide",
    firstColumnContent: "Empower Developers, IT Ops, and business teams to collaborate at high velocity. Respond to changes and deliver great customer and employee service experiences fast.",
    ctaText: "Learn more",
    ctaHref: "#",
    secondColumnContent: [
      "Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.",
      "Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change."
    ]
  };

  return <TwoColumnSection {...sampleData} />;
};

export default TwoColumnSectionComponent;