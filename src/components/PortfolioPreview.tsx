import React from 'react';
import { ArrowUpRight, MapPin, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PortfolioItem {
  id: string;
  title: string;
  location: string;
  year: string;
  category: string;
  image: string;
  size: 'large' | 'medium' | 'small';
}

interface PortfolioPreviewProps {
  onViewAllClick: () => void;
  onProjectClick: (projectId: string) => void;
}

export function PortfolioPreview({ onViewAllClick, onProjectClick }: PortfolioPreviewProps) {
  const portfolioItems: PortfolioItem[] = [
    {
      id: '1',
      title: 'Penthouse Sanctuary',
      location: 'Manhattan, NY',
      year: '2024',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070&auto=format&fit=crop',
      size: 'large'
    },
    {
      id: '2',
      title: 'Modern Workspace',
      location: 'San Francisco, CA',
      year: '2024',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
      size: 'medium'
    },
    {
      id: '3',
      title: 'Luxury Villa',
      location: 'Malibu, CA',
      year: '2023',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
      size: 'medium'
    },
    {
      id: '4',
      title: 'Boutique Hotel',
      location: 'Miami, FL',
      year: '2023',
      category: 'Hospitality',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop',
      size: 'small'
    },
    {
      id: '5',
      title: 'Executive Suite',
      location: 'Chicago, IL',
      year: '2024',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2070&auto=format&fit=crop',
      size: 'small'
    },
    {
      id: '6',
      title: 'Garden Pavilion',
      location: 'Napa Valley, CA',
      year: '2023',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop',
      size: 'small'
    }
  ];

  const getGridClasses = (size: string, index: number) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2';
      case 'medium':
        return 'col-span-1 row-span-2';
      case 'small':
        return 'col-span-1 row-span-1';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div className="mb-8 lg:mb-0">
            <p className="subtitle text-gold mb-4 tracking-wide">Our Work</p>
            <h2 className="text-charcoal mb-6">Recent Projects</h2>
            <p className="text-stone-grey max-w-2xl">
              Each project tells a unique story of collaboration, creativity, and craftsmanship. 
              Explore our latest works that showcase the breadth of our design expertise.
            </p>
          </div>
          
          <button
            onClick={onViewAllClick}
            className="inline-flex items-center px-6 py-3 bg-charcoal hover:bg-gold text-cream hover:text-charcoal transition-colors duration-200 rounded-lg group"
          >
            View All Projects
            <ArrowUpRight size={20} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-4 gap-4 lg:gap-6 auto-rows-[200px] lg:auto-rows-[250px]">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`group cursor-pointer relative overflow-hidden rounded-lg bg-stone-grey/10 hover:shadow-xl transition-all duration-500 ${getGridClasses(item.size, index)}`}
              onClick={() => onProjectClick(item.id)}
            >
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-charcoal text-xs font-medium rounded-full">
                  {item.category}
                </span>
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-start justify-between">
                    <div className="text-white">
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <div className="space-y-1 text-cream/80 text-sm">
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-2" />
                          {item.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-2" />
                          {item.year}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-2 rounded-full bg-gold">
                      <ArrowUpRight size={16} className="text-charcoal" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 pt-16 border-t border-stone-grey/20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-charcoal mb-2">150+</div>
              <div className="text-stone-grey text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-charcoal mb-2">15+</div>
              <div className="text-stone-grey text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-charcoal mb-2">98%</div>
              <div className="text-stone-grey text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-charcoal mb-2">25+</div>
              <div className="text-stone-grey text-sm">Design Awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}