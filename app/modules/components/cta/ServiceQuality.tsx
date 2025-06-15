import React from 'react';
import { CheckCircleIcon, ShieldCheckIcon, ClockIcon, StarIcon } from '@heroicons/react/24/outline';

interface QualityItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

interface ServiceQualityProps {
  items: QualityItem[];
}

const ServiceQuality: React.FC<ServiceQualityProps> = ({ items }) => {
  return (
    <div className="bg-transparent  py-8  sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8  lg:grid-cols-4">
          {items.map((item) => (
            <div 
              key={item.id}
              className="flex flex-col bg-white/10 backdrop-blur-sm p-2 rounded-lg border border-white/10 items-center text-center"
            >
              <div className="mb-4 rounded-full bg-white/10 p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/80">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Example usage
export const ServiceQualityExample: React.FC = () => {
  const qualityItems: QualityItem[] = [
    {
      id: '1',
      title: 'Satisfaction Guaranteed',
      description: 'We stand behind our work with a 100% satisfaction guarantee',
      icon: CheckCircleIcon
    },
    {
      id: '2',
      title: 'Proven Track Record',
      description: 'Over 20 years of successful projects and happy clients',
      icon: StarIcon
    },
    {
      id: '3',
      title: 'Quality Assured',
      description: 'Premium materials and expert craftsmanship in every project',
      icon: ShieldCheckIcon
    },
    {
      id: '4',
      title: 'Timely Delivery',
      description: 'We respect your time with on-schedule project completion',
      icon: ClockIcon
    }
  ];

  return <ServiceQuality items={qualityItems} />;
};

export default ServiceQualityExample; 