import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ScrollingMarquee() {
  const marqueeImages = [
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?q=80&w=400&auto=format&fit=crop'
  ];

  // Duplicate the array for seamless infinite scroll
  const doubledImages = [...marqueeImages, ...marqueeImages];

  return (
    <section className="py-12 bg-warm-beige overflow-hidden">
      <div className="relative">
        {/* Top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-grey/20 to-transparent" />
        
        {/* Marquee Container */}
        <div className="flex animate-marquee">
          {doubledImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 h-32 mx-2 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <ImageWithFallback
                src={image}
                alt={`Design inspiration ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-grey/20 to-transparent" />
        
        {/* Gradient overlays for seamless edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-warm-beige to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-warm-beige to-transparent pointer-events-none" />
      </div>
    </section>
  );
}