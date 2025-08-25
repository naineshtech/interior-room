import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Star } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gold rounded-full mb-8 animate-scale-in">
              <Star className="text-charcoal" size={32} />
            </div>
            
            <h1 className="text-charcoal mb-6">Thank You!</h1>
            <p className="text-medium-gray text-xl mb-8 leading-relaxed">
              We've received your message and will be in touch within 24 hours 
              to discuss your project and next steps.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.reload()}
                className="btn-primary"
              >
                Send Another Message
              </button>
              <button 
                onClick={() => window.location.href = '/'}
                className="btn-secondary"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <section className="section-padding bg-light-gray">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="subtitle mb-4">Let's Work Together</div>
            <h1 className="text-charcoal mb-8">Start Your Project</h1>
            <p className="text-medium-gray text-xl leading-relaxed">
              Ready to transform your space? We'd love to hear about your vision 
              and discuss how we can bring it to life.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="card animate-slide-up">
                <h2 className="text-charcoal mb-8">Send us a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="projectType" className="form-label">Project Type</label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="form-input"
                      >
                        <option value="">Select a project type</option>
                        <option value="residential">Residential Design</option>
                        <option value="commercial">Commercial Space</option>
                        <option value="hospitality">Hospitality Design</option>
                        <option value="consultation">Design Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="form-label">Tell us about your project *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your vision, timeline, budget, and any specific requirements..."
                      className="form-input resize-none"
                      required
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`btn-primary w-full inline-flex items-center justify-center ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/20 border-t-white mr-2" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send size={16} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              <div className="card animate-slide-up">
                <h3 className="text-charcoal mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-light-gray rounded-lg flex items-center justify-center">
                      <Phone size={20} className="text-gold" />
                    </div>
                    <div>
                      <h4 className="text-charcoal font-medium mb-1">Phone</h4>
                      <p className="text-medium-gray">+91 97275 14095</p>
                      <p className="text-medium-gray text-sm">Contact: Parth Kotadiya</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-light-gray rounded-lg flex items-center justify-center">
                      <Mail size={20} className="text-gold" />
                    </div>
                    <div>
                      <h4 className="text-charcoal font-medium mb-1">Email</h4>
                      <p className="text-medium-gray">theinteriorroom23@gmail.com</p>
                      <p className="text-medium-gray text-sm">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-light-gray rounded-lg flex items-center justify-center">
                      <MapPin size={20} className="text-gold" />
                    </div>
                    <div>
                      <h4 className="text-charcoal font-medium mb-1">Store Location</h4>
                      <p className="text-medium-gray">
                        Shop.106, 1st Floor, Sunway Complex<br />
                        Pandav Vadi, Near Nikol Lake, Nikol<br />
                        Ahmedabad - 382350
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card animate-slide-up">
                <div className="flex items-center mb-4">
                  <Clock size={20} className="text-gold mr-3" />
                  <h4 className="text-charcoal font-medium">Store Hours</h4>
                </div>
                
                <div className="text-medium-gray space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span>10:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>11:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-square bg-light-gray rounded-xl overflow-hidden shadow-soft animate-scale-in">
                <div className="w-full h-full bg-gradient-to-br from-gold/20 to-medium-gray/20 flex items-center justify-center">
                  <div className="text-center text-medium-gray">
                    <MapPin size={48} className="mx-auto mb-4" />
                    <h4 className="font-medium mb-2">Visit Our Store</h4>
                    <p className="text-sm">Sunway Complex, Nikol, Ahmedabad</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}