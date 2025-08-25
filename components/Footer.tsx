import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export function Footer({ onPageChange }: FooterProps) {
  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];

  const services = [
    'Sofa',
    'Mattress', 
    'Curtains',
    'Wallpaper',
    'Glass Film',
    'Blinds',
    'Flooring'
  ];

  return (
    <footer className="bg-charcoal text-white">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-light mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              The interior room
            </h3>
            <p className="text-white/70 leading-relaxed mb-8">
              Home Furnishing & Office Interior Products. Creating beautiful spaces 
              with quality furniture and interior solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold transition-all duration-300 hover-scale"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Navigation</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onPageChange(link.id)}
                    className="text-white/70 hover:text-gold transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-white/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-white/70">
                <Phone size={16} />
                <span>+91 97275 14095</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Mail size={16} />
                <span>theinteriorroom23@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3 text-white/70">
                <MapPin size={16} className="mt-0.5" />
                <span>Shop.106, 1st Floor, Sunway Complex<br />Pandav Vadi, Near Nikol Lake, Nikol<br />Ahmedabad - 382350</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 The interior room. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}