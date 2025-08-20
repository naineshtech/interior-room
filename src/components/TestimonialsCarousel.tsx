import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
  projectImage: string;
}

export function TestimonialsCarousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Martinez',
      role: 'CEO',
      company: 'Tech Innovations Inc.',
      content: 'Working with Atelier transformed not just our office space, but our entire company culture. The attention to detail and understanding of our brand vision was exceptional. Every element feels intentional and inspiring.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=400&auto=format&fit=crop',
      projectImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Homeowner',
      company: 'Private Residence',
      content: 'Our home renovation exceeded every expectation. The team listened to our lifestyle needs and created spaces that are both beautiful and functional. The before and after is truly remarkable.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
      projectImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: '3',
      name: 'Elena Rodriguez',
      role: 'Hotel Manager',
      company: 'Luxury Hospitality Group',
      content: 'The boutique hotel design created an atmosphere that guests consistently rave about. Bookings increased 40% after the renovation, and the space perfectly captures our brand essence.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
      projectImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={current.projectImage}
          alt="Project background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="subtitle text-gold mb-4 tracking-wide">Client Stories</p>
          <h2 className="text-white mb-6">What Our Clients Say</h2>
          <p className="text-cream/80 max-w-3xl mx-auto">
            Hear directly from those who have experienced the Atelier difference. 
            Their stories inspire us to continue creating exceptional spaces.
          </p>
        </div>

        {/* Testimonial Content */}
        <div className="max-w-4xl mx-auto">
          <div
            key={currentTestimonial}
            className="animate-fade-in-up"
          >
            {/* Quote Icon */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold rounded-full">
                <Quote size={24} className="text-charcoal" />
              </div>
            </div>

            {/* Rating */}
            <div className="flex justify-center mb-6">
              {[...Array(current.rating)].map((_, index) => (
                <Star key={index} size={20} className="text-gold fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-center mb-8">
              <p className="text-xl lg:text-2xl text-white leading-relaxed italic">
                "{current.content}"
              </p>
            </blockquote>

            {/* Client Info */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <ImageWithFallback
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <h4 className="text-white font-semibold">{current.name}</h4>
                <p className="text-cream/80 text-sm">
                  {current.role} • {current.company}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-4 mt-12">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial 
                    ? 'bg-gold' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
          >
            <ChevronRight size={20} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}