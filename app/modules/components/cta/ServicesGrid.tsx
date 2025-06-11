import React from 'react';
import Image from 'next/image';

// Type definitions
interface ImageGridItem {
  id: string;
  title: string;
  buttonText: string;
  href: string;
  backgroundImage: string;
  spanCols?: 'full' | 'half'; // full = col-span-2, half = col-span-1
  titleSize?: 'large' | 'medium'; // large = text-5xl, medium = text-4xl
}

interface ImageGridSectionProps {
  items: ImageGridItem[];
}

const ImageGridSection: React.FC<ImageGridSectionProps> = ({ items }) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px-12">
        <div className="grid grid-cols-2 gap-2">
          {items.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`
                p-8 text-left h-96 relative overflow-hidden group
                ${item.spanCols === 'half' ? 'col-span-2 md:col-span-1' : 'col-span-2'}
              `}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={item.backgroundImage}
                  alt={item.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gray-500/50 group-hover:bg-opacity-0 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-end h-full">
                <h2 className={`
                  mb-5 max-w-xl font-extrabold tracking-tight leading-tight text-white
                  ${item.titleSize === 'large' ? 'text-5xl' : 'text-4xl'}
                `}>
                  {item.title}
                </h2>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2.5 font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700 transition-colors duration-200 w-fit"
                >
                  {item.buttonText}
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// Example usage with sample data
const ExampleImageGridSection: React.FC = () => {
  const sampleData: ImageGridSectionProps = {
    items: [
      {
        id: '1',
        title: 'Enjoy nature sustainable travel in the BMW iX',
        buttonText: 'Show more',
        href: '#',
        backgroundImage: 'https://jrdisplays.s3.us-east-1.amazonaws.com/portfolio/interior/IMG-20240410-WA0001.jpg',
        spanCols: 'full',
        titleSize: 'large'
      },
      {
        id: '2',
        title: 'Experience the power of BMW M4',
        buttonText: 'Show more',
        href: '#',
        backgroundImage: 'https://jrdisplays.s3.us-east-1.amazonaws.com/portfolio/interior/IMG-20240410-WA0001.jpg',
        spanCols: 'half',
        titleSize: 'medium'
      },
      {
        id: '3',
        title: 'Discover luxury with BMW M6',
        buttonText: 'Show more',
        href: '#',
        backgroundImage: 'https://jrdisplays.s3.us-east-1.amazonaws.com/portfolio/interior/IMG-20240410-WA0001.jpg',
        spanCols: 'half',
        titleSize: 'medium'
      }
    ]
  };

  return <ImageGridSection {...sampleData} />;
};

export default ExampleImageGridSection;