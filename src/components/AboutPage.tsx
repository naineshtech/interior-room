import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutPage() {
  const teamMembers = [
    {
      name: 'Alexandra Sterling',
      role: 'Principal Architect',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=400&auto=format&fit=crop',
    },
    {
      name: 'Marcus Chen',
      role: 'Lead Interior Designer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
    },
    {
      name: 'Sofia Rodriguez',
      role: 'Project Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
    },
    {
      name: 'James Mitchell',
      role: 'Design Consultant',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <p className="subtitle text-gold mb-4">About Us</p>
              <h1 className="text-charcoal mb-8">Designing the Future</h1>
              <p className="text-medium-gray text-lg mb-8 leading-relaxed">
                Founded in 2009, Atelier is a multidisciplinary design studio specializing 
                in contemporary architecture and interior design. We believe that exceptional 
                design emerges from a deep understanding of how people live and work.
              </p>
              <p className="text-medium-gray leading-relaxed">
                Our approach is rooted in collaboration, sustainability, and timeless aesthetics. 
                Each project is an opportunity to create something meaningful—spaces that not only 
                function beautifully but also enhance the daily lives of those who inhabit them.
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-soft-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop"
                  alt="Atelier design studio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-soft-gray">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="subtitle text-gold mb-4">Philosophy</p>
          <h2 className="text-charcoal mb-12">Design With Purpose</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-charcoal mb-4">Functionality First</h3>
              <p className="text-medium-gray leading-relaxed">
                Every design decision is guided by how it serves the people who will use the space daily.
              </p>
            </div>
            <div>
              <h3 className="text-charcoal mb-4">Timeless Beauty</h3>
              <p className="text-medium-gray leading-relaxed">
                We create spaces that transcend trends, focusing on enduring elegance and quality.
              </p>
            </div>
            <div>
              <h3 className="text-charcoal mb-4">Sustainable Impact</h3>
              <p className="text-medium-gray leading-relaxed">
                Responsible design practices that consider environmental and social impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="subtitle text-gold mb-4">Our Team</p>
            <h2 className="text-charcoal mb-8">Meet the Studio</h2>
            <p className="text-medium-gray text-lg max-w-3xl mx-auto leading-relaxed">
              A collective of creative professionals passionate about crafting exceptional spaces 
              and experiences through thoughtful design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="aspect-square rounded-lg overflow-hidden shadow-soft hover-lift mb-6">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-charcoal font-medium mb-1">{member.name}</h3>
                <p className="text-medium-gray text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="subtitle text-gold mb-4">Recognition</p>
            <h2 className="text-charcoal">Awards & Honors</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="text-3xl font-light text-charcoal mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                150+
              </div>
              <div className="text-medium-gray text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-charcoal mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                25+
              </div>
              <div className="text-medium-gray text-sm">Design Awards</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-charcoal mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                15+
              </div>
              <div className="text-medium-gray text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-charcoal mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                98%
              </div>
              <div className="text-medium-gray text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}