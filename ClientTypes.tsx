/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Sparkles, ShoppingBag, Target, Settings, Check, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Briefcase':
        return <Briefcase className="h-6 w-6 text-blue-400" />;
      case 'Sparkles':
        return <Sparkles className="h-6 w-6 text-purple-400" />;
      case 'ShoppingBag':
        return <ShoppingBag className="h-6 w-6 text-cyan-400" />;
      case 'Target':
        return <Target className="h-6 w-6 text-rose-400" />;
      case 'Settings':
        return <Settings className="h-6 w-6 text-emerald-400" />;
      default:
        return <Briefcase className="h-6 w-6 text-blue-400" />;
    }
  };

  const handleInquire = (serviceTitle: string) => {
    // Scroll and pre-populate the business field
    onSelectService(serviceTitle);
    
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="py-24 bg-[#070b13] relative overflow-hidden border-t border-white/5 bg-grid-pattern">
      {/* Background glowing blobs */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono tracking-widest text-purple-400 uppercase mb-3">Our Offerings</h2>
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Web Development Services</h3>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-300 font-sans leading-relaxed text-base sm:text-lg">
            I craft custom, responsive website designs aimed directly at boosting your conversion rates and building trust with your local customer base.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" id="services-grid">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between group h-full relative"
              id={`service-card-${service.id}`}
            >
              {/* Top border glow line on hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              <div>
                {/* Header: Icon & Title */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 bg-white/5 rounded-2xl border border-white/5 shadow-inner group-hover:bg-gradient-to-br group-hover:from-white/10 group-hover:to-white/5 group-hover:scale-105 transition-all duration-300">
                    {getIcon(service.iconName)}
                  </div>
                  <button
                    onClick={() => handleInquire(service.title)}
                    className="p-1.5 rounded-lg border border-white/5 bg-white/5 text-slate-400 hover:text-white hover:border-white/20 transition-all"
                    title="Quick Inquiry"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>

                <h4 className="font-display text-lg sm:text-xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h4>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-sans">
                  {service.description}
                </p>

                {/* Key Benefits Checklist */}
                <div className="space-y-2.5 mb-8">
                  {service.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start text-xs sm:text-sm text-slate-300 font-sans">
                      <span className="p-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 mr-2.5 mt-0.5 inline-flex items-center justify-center">
                        <Check className="h-3 w-3 text-blue-400" />
                      </span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleInquire(service.title)}
                className="w-full py-3 px-4 rounded-xl text-center text-sm font-medium border border-white/10 bg-white/5 text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-500/40 transition-all duration-300 cursor-pointer"
                id={`service-btn-${service.id}`}
              >
                Inquire For This Site
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
