import React, { useState, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BeforeAfterItem {
  before: string;
  after: string;
  title: string;
  description: string;
}

interface BeforeAfterSliderProps {
  items: BeforeAfterItem[];
}

export function BeforeAfterSlider({ items }: BeforeAfterSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentItem = items[currentIndex];

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="subtitle text-gold mb-4 tracking-wide">Transformations</p>
          <h2 className="text-charcoal mb-6">Before & After</h2>
          <p className="text-stone-grey max-w-3xl mx-auto">
            Witness the remarkable transformations as we breathe new life into spaces, 
            turning the ordinary into extraordinary through thoughtful design and meticulous attention to detail.
          </p>
        </div>

        {/* Slider Container */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            className="relative aspect-video rounded-lg overflow-hidden shadow-xl cursor-col-resize"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            {/* Before Image */}
            <div className="absolute inset-0">
              <ImageWithFallback
                src={currentItem.before}
                alt={`${currentItem.title} - Before`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6">
                <span className="px-3 py-1 bg-charcoal/80 text-white text-sm rounded-full">
                  Before
                </span>
              </div>
            </div>

            {/* After Image */}
            <div 
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <ImageWithFallback
                src={currentItem.after}
                alt={`${currentItem.title} - After`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 right-6">
                <span className="px-3 py-1 bg-gold text-charcoal text-sm rounded-full">
                  After
                </span>
              </div>
            </div>

            {/* Slider Control */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-gold cursor-col-resize flex items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
            >
              <div className="w-8 h-8 bg-gold rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <div className="w-1 h-4 bg-white rounded-full" />
              </div>
            </div>
          </div>

          {/* Project Info */}
          <div className="text-center mt-8">
            <h3 className="text-xl font-semibold text-charcoal mb-2">
              {currentItem.title}
            </h3>
            <p className="text-stone-grey">{currentItem.description}</p>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setSliderPosition(50); // Reset slider position
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-gold' : 'bg-stone-grey/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}