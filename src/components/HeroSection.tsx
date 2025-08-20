import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export function HeroSection({ onExploreClick }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070&auto=format&fit=crop',
      title: 'Designing Spaces That Inspire',
      subtitle: 'Luxury Architecture & Interior Design',
      description: 'Creating harmonious environments where form meets function in perfect balance'
    },
    {
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
      title: 'Modern Living Redefined',
      subtitle: 'Contemporary Elegance & Timeless Design',
      description: 'Transforming your vision into extraordinary living experiences'
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop',
      title: 'Artistry in Architecture',
      subtitle: 'Bespoke Solutions for Discerning Clients',
      description: 'Where architectural innovation meets sophisticated interior craftsmanship'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <ImageWithFallback
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div
              key={currentSlide}
              className="animate-fade-in-up"
            >
              <p className="subtitle text-gold mb-4 tracking-wide">
                {slides[currentSlide].subtitle}
              </p>
              <h1 className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl">
                {slides[currentSlide].title}
              </h1>
              <p className="text-cream/90 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl">
                {slides[currentSlide].description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={onExploreClick}
                  size="lg"
                  className="bg-gold hover:bg-gold/90 text-charcoal hover:text-charcoal px-8 py-4 h-auto"
                >
                  Explore Designs
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-cream text-cream hover:bg-cream hover:text-charcoal px-8 py-4 h-auto"
                >
                  <Play size={20} className="mr-2" />
                  Watch Story
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>
          
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide 
                    ? 'bg-gold' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
          >
            <ChevronRight size={20} className="text-white" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="flex flex-col items-center text-white/60">
          <span className="text-xs uppercase tracking-wider mb-2">Scroll</span>
          <div className="w-px h-12 bg-white/30">
            <div className="w-px h-6 bg-gold animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}