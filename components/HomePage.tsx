import React from 'react';
import { ArrowRight, Star, Users, Award, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export function HomePage({ onPageChange }: HomePageProps) {
  const services = [
    {
      title: 'Architecture',
      description: 'Contemporary design that respects context while pushing creative boundaries.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Interior Design',
      description: 'Thoughtful spaces that reflect personality while maintaining timeless elegance.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2041&auto=format&fit=crop'
    },
    {
      title: 'Consultation',
      description: 'Expert guidance to transform your vision into beautiful, functional reality.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  const portfolioProjects = [
    {
      title: 'Manhattan Penthouse',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Modern Workspace',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
    },
    {
      title: 'Coastal Villa',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Boutique Hotel',
      category: 'Hospitality',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  const stats = [
    { icon: Star, number: '150+', label: 'Projects Completed' },
    { icon: Users, number: '98%', label: 'Client Satisfaction' },
    { icon: Award, number: '25+', label: 'Design Awards' },
    { icon: Heart, number: '15+', label: 'Years Experience' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070&auto=format&fit=crop"
            alt="Modern architecture interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-charcoal/40 to-transparent" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <div className="subtitle text-gold mb-6">Award-Winning Design Studio</div>
            <h1 className="text-white mb-8 leading-tight">
              Creating spaces that inspire and transform
            </h1>
            <p className="text-white/90 text-xl mb-12 leading-relaxed max-w-2xl">
              We design contemporary architecture and interiors that elevate everyday living 
              through thoughtful innovation and timeless beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onPageChange('portfolio')}
                className="btn-primary inline-flex items-center justify-center"
              >
                View Our Work
                <ArrowRight size={20} className="ml-2" />
              </button>
              <button
                onClick={() => onPageChange('contact')}
                className="btn-secondary inline-flex items-center justify-center"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-light-gray">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 animate-stagger">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-subtle mb-4 hover-scale">
                  <stat.icon size={24} className="text-gold" />
                </div>
                <div className="text-3xl font-light text-charcoal mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {stat.number}
                </div>
                <div className="text-medium-gray text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in">
            <div className="subtitle mb-4">Our Services</div>
            <h2 className="text-charcoal mb-6">What We Do</h2>
            <p className="text-medium-gray text-xl max-w-3xl mx-auto">
              From initial concept to final implementation, we provide comprehensive design 
              services that transform spaces and enhance experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 animate-stagger">
            {services.map((service, index) => (
              <div key={index} className="group animate-slide-up">
                <div className="aspect-[4/3] mb-8 overflow-hidden rounded-xl shadow-soft group-hover:shadow-medium transition-all duration-300">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-charcoal mb-4 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-medium-gray leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding bg-light-gray">
        <div className="container">
          <div className="flex items-end justify-between mb-16">
            <div className="animate-fade-in">
              <div className="subtitle mb-4">Our Work</div>
              <h2 className="text-charcoal mb-4">Recent Projects</h2>
              <p className="text-medium-gray text-xl max-w-2xl">
                Each project represents our commitment to creating spaces that inspire and transform.
              </p>
            </div>
            <button
              onClick={() => onPageChange('portfolio')}
              className="hidden lg:inline-flex items-center text-medium-gray hover:text-gold transition-colors group"
            >
              View All Projects
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-stagger">
            {portfolioProjects.map((project, index) => (
              <div
                key={index}
                onClick={() => onPageChange('portfolio')}
                className="group cursor-pointer animate-slide-up"
              >
                <div className="aspect-[4/3] mb-6 overflow-hidden rounded-xl shadow-soft group-hover:shadow-medium transition-all duration-300 hover-lift">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-charcoal mb-1 group-hover:text-gold transition-colors">
                      {project.title}
                    </h4>
                    <div className="text-medium-gray text-sm">{project.category}</div>
                  </div>
                  <ArrowRight 
                    size={20} 
                    className="text-medium-gray group-hover:text-gold group-hover:translate-x-1 transition-all" 
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 lg:hidden">
            <button
              onClick={() => onPageChange('portfolio')}
              className="inline-flex items-center text-medium-gray hover:text-gold transition-colors"
            >
              View All Projects
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="subtitle mb-4">About Us</div>
              <h2 className="text-charcoal mb-8">Design Philosophy</h2>
              <p className="text-medium-gray text-xl mb-8 leading-relaxed">
                We believe exceptional design emerges from understanding how people live and work. 
                Our approach creates spaces that enhance daily experiences while standing the test of time.
              </p>
              <p className="text-medium-gray mb-8 leading-relaxed">
                Every project is an opportunity to create something meaningful—spaces that reflect 
                unique stories and aspirations while maintaining functional beauty.
              </p>
              <button
                onClick={() => onPageChange('about')}
                className="inline-flex items-center text-charcoal hover:text-gold transition-colors font-medium group"
              >
                Learn More About Us
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-medium hover-scale">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop"
                  alt="Our design process"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-charcoal">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gold rounded-full mb-8">
              <Star className="text-charcoal" size={32} />
            </div>
            <h2 className="text-white mb-8">Ready to Start Your Project?</h2>
            <p className="text-white/80 text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
              Let's discuss how we can bring your vision to life through thoughtful design 
              and exceptional craftsmanship.
            </p>
            <button
              onClick={() => onPageChange('contact')}
              className="btn-primary bg-gold text-charcoal hover:bg-white"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}