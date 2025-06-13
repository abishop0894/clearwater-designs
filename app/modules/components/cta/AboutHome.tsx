
import React from 'react';
import Image from 'next/image';

// Type definitions
interface StatItem {
  id: string;
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
}

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  offset?: 'normal' | 'up'; // for staggered effect
}

interface AboutSectionProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  missionTitle: string;
  missionContent: string[];
  numbersTitle: string;
  stats: StatItem[];
  galleryImages: GalleryImage[];
}

const AboutSection: React.FC<AboutSectionProps> = ({
  eyebrow,
  title,
  subtitle,
  missionTitle,
  missionContent,
  numbersTitle,
  stats,
  galleryImages
}) => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        {/* Header */}
        <div className="max-w-4xl">
          <p className="text-base/7 font-semibold text-indigo-600">
            {eyebrow}
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-xl/8 text-balance text-gray-700">
            {subtitle}
          </p>
        </div>

        {/* Main Content Grid */}
        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          {/* Mission Content */}
          <div className="lg:pr-8">
            <h2 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900">
              {missionTitle}
            </h2>
            {missionContent.map((paragraph, index) => (
              <p 
                key={index} 
                className={`text-base/7 text-gray-600 ${index === 0 ? 'mt-6' : 'mt-8'}`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Image Gallery */}
          <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className={`
                    aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10
                    ${image.offset === 'up' ? '-mt-8 lg:-mt-40' : ''}
                  `}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={560}
                    height={560}
                    className="block size-full object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 280px"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="max-lg:mt-16 lg:col-span-1">
            <p className="text-base/7 font-semibold text-gray-500">
              {numbersTitle}
            </p>
            <hr className="mt-6 border-t border-gray-200" />
            <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <div 
                  key={stat.id}
                  className={`
                    flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4
                    ${index >= stats.length - 2 ? 'max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4 sm:border-b-0 sm:pb-0' : ''}
                    ${index === stats.length - 1 ? 'border-b-0 pb-0' : ''}
                  `}
                >
                  <dt className="text-sm/6 text-gray-600">
                    {stat.label}
                  </dt>
                  <dd className="order-first text-6xl font-semibold tracking-tight">
                    {stat.prefix}
                    <span>{stat.value}</span>
                    {stat.suffix}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </div>
    </div>
  );
};

// Example usage with sample data
const AboutHome: React.FC = () => {
  const sampleData: AboutSectionProps = {
    eyebrow: "About us",
    title: "On a mission to empower remote teams",
    subtitle: "Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas.",
    missionTitle: "Our mission",
    missionContent: [
      "Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.",
      "Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci."
    ],
    numbersTitle: "The numbers",
    stats: [
      {
        id: '1',
        label: 'Metric',
        value: '150',
        prefix: '$',
        suffix: 'M'
      },
      {
        id: '2',
        label: 'Metric',
        value: '30',
        suffix: 'K'
      },
      {
        id: '3',
        label: 'Metric',
        value: '1.5',
        suffix: 'M'
      },
      {
        id: '4',
        label: 'Metric',
        value: '200',
        suffix: 'M'
      }
    ],
    galleryImages: [
      {
        id: '1',
        src: 'https://jrdisplays.s3.us-east-1.amazonaws.com/portfolio/interior/IMG-20240410-WA0001.jpg',
        alt: 'Team member working remotely',
        offset: 'normal'
      },
      {
        id: '2',
        src: 'https://jrdisplays.s3.us-east-1.amazonaws.com/portfolio/interior/IMG-20240410-WA0001.jpg',
        alt: 'Remote collaboration session',
        offset: 'up'
      },
      {
        id: '3',
        src: 'https://jrdisplays.s3.us-east-1.amazonaws.com/portfolio/interior/IMG-20240410-WA0001.jpg',
        alt: 'Team building activity',
        offset: 'normal'
      },
      {
        id: '4',
        src: 'https://jrdisplays.s3.us-east-1.amazonaws.com/portfolio/interior/IMG-20240410-WA0001.jpg',
        alt: 'Office collaboration space',
        offset: 'up'
      }
    ]
  };

  return <AboutSection {...sampleData} />;
};

export default AboutHome;