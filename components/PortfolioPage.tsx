import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Hospitality';
  location: string;
  year: string;
  image: string;
  description: string;
}

export function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      id: '1',
      title: 'Manhattan Penthouse',
      category: 'Residential',
      location: 'New York, NY',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070&auto=format&fit=crop',
      description: 'A sophisticated urban retreat with panoramic city views and contemporary elegance.'
    },
    {
      id: '2',
      title: 'Modern Workspace',
      category: 'Commercial',
      location: 'San Francisco, CA',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
      description: 'Innovative office design promoting collaboration and creativity through open spaces.'
    },
    {
      id: '3',
      title: 'Coastal Villa',
      category: 'Residential',
      location: 'Malibu, CA',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
      description: 'Seamless indoor-outdoor living with breathtaking ocean views and natural materials.'
    },
    {
      id: '4',
      title: 'Boutique Hotel',
      category: 'Hospitality',
      location: 'Miami, FL',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop',
      description: 'Luxury hospitality experience with local cultural influences and modern amenities.'
    },
    {
      id: '5',
      title: 'Executive Residence',
      category: 'Residential',
      location: 'Chicago, IL',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2070&auto=format&fit=crop',
      description: 'Minimalist design with maximum comfort and sophisticated functionality.'
    },
    {
      id: '6',
      title: 'Corporate Headquarters',
      category: 'Commercial',
      location: 'Austin, TX',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      description: 'Sustainable design reflecting company values and promoting employee wellbeing.'
    },
    {
      id: '7',
      title: 'Luxury Spa',
      category: 'Hospitality',
      location: 'Napa Valley, CA',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069&auto=format&fit=crop',
      description: 'Tranquil wellness sanctuary inspired by natural elements and mindful design.'
    },
    {
      id: '8',
      title: 'Urban Townhouse',
      category: 'Residential',
      location: 'Brooklyn, NY',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop',
      description: 'Historic renovation blending heritage architecture with contemporary living.'
    },
    {
      id: '9',
      title: 'Tech Campus',
      category: 'Commercial',
      location: 'Seattle, WA',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop',
      description: 'Future-forward workspace designed for innovation and collaborative thinking.'
    }
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Hospitality'];

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <section className="section-padding bg-light-gray">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="subtitle mb-4">Our Work</div>
            <h1 className="text-charcoal mb-8">Portfolio</h1>
            <p className="text-medium-gray text-xl leading-relaxed">
              A collection of our most impactful projects, spanning residential, commercial, 
              and hospitality spaces designed to inspire and transform experiences.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center mt-12 animate-slide-up">
            <div className="flex flex-wrap gap-3 p-2 bg-white rounded-xl shadow-subtle">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-lg transition-all duration-300 font-medium ${
                    activeFilter === category
                      ? 'bg-charcoal text-white shadow-soft'
                      : 'text-medium-gray hover:text-charcoal hover:bg-light-gray'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-stagger">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer animate-slide-up"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-soft group-hover:shadow-medium transition-all duration-300 hover-lift">
                  <div className="aspect-[4/3] relative">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-charcoal px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </div>

                    {/* Hover overlay */}
                    {hoveredItem === item.id && (
                      <div className="absolute inset-0 bg-charcoal/90 flex items-end p-6 animate-fade-in">
                        <div className="text-white w-full">
                          <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                          <p className="text-white/80 mb-4 line-clamp-2">{item.description}</p>
                          
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-white/70 space-y-1">
                              <div className="flex items-center">
                                <MapPin size={14} className="mr-2" />
                                {item.location}
                              </div>
                              <div className="flex items-center">
                                <Calendar size={14} className="mr-2" />
                                {item.year}
                              </div>
                            </div>
                            
                            <div className="p-3 bg-gold rounded-full hover-scale">
                              <ArrowUpRight size={20} className="text-charcoal" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project info */}
                <div className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-charcoal font-medium mb-1 group-hover:text-gold transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-medium-gray text-sm">
                        {item.category} • {item.year}
                      </p>
                    </div>
                    
                    <ArrowUpRight 
                      size={20} 
                      className="text-medium-gray group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-charcoal">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-white mb-8">Ready to Create Something Beautiful?</h2>
            <p className="text-white/80 text-xl mb-12 leading-relaxed">
              Every project is an opportunity to create something extraordinary. 
              Let's discuss how we can bring your vision to life.
            </p>
            <button className="btn-primary bg-gold text-charcoal hover:bg-white">
              Start Your Project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}