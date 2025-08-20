import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FeaturedInspirationsProps {
  onCategoryClick: (category: string) => void;
}

export function FeaturedInspirations({ onCategoryClick }: FeaturedInspirationsProps) {
  const inspirations = [
    {
      category: 'Modern Living',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2041&auto=format&fit=crop',
      count: '24 Projects'
    },
    {
      category: 'Luxury Dining',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop',
      count: '18 Projects'
    },
    {
      category: 'Minimalist Bedroom',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2070&auto=format&fit=crop',
      count: '31 Projects'
    },
    {
      category: 'Executive Office',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
      count: '12 Projects'
    },
    {
      category: 'Spa Bathroom',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069&auto=format&fit=crop',
      count: '15 Projects'
    },
    {
      category: 'Outdoor Living',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop',
      count: '9 Projects'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="subtitle text-gold mb-4 tracking-wide">Our Expertise</p>
          <h2 className="text-charcoal mb-6">Featured Inspirations</h2>
          <p className="text-stone-grey max-w-3xl mx-auto">
            Discover our curated collection of distinctive spaces, each thoughtfully designed 
            to reflect the unique personality and lifestyle of our discerning clients.
          </p>
        </div>

        {/* Inspirations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {inspirations.map((inspiration, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => onCategoryClick(inspiration.category)}
            >
              <div className="relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <ImageWithFallback
                    src={inspiration.image}
                    alt={inspiration.category}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover Content */}
                  <div className="absolute inset-0 flex items-end justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white">
                      <h3 className="text-xl font-semibold mb-1">{inspiration.category}</h3>
                      <p className="text-cream/80 text-sm">{inspiration.count}</p>
                    </div>
                    <div className="p-2 rounded-full bg-gold">
                      <ArrowUpRight size={20} className="text-charcoal" />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-charcoal mb-1">
                        {inspiration.category}
                      </h3>
                      <p className="text-stone-grey text-sm">{inspiration.count}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-warm-beige group-hover:bg-gold transition-colors duration-200 flex items-center justify-center">
                      <ArrowUpRight size={16} className="text-charcoal" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => onCategoryClick('all')}
            className="inline-flex items-center px-8 py-3 bg-charcoal hover:bg-gold text-cream hover:text-charcoal transition-colors duration-200 rounded-lg"
          >
            View All Categories
            <ArrowUpRight size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}