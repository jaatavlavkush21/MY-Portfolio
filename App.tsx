/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Store, Sparkles, Scissors, Shirt, Utensils, Building, GraduationCap, ArrowRight } from 'lucide-react';
import { CLIENT_TYPES } from '../data';

interface ClientTypesProps {
  onSelectClientType: (label: string) => void;
}

export default function ClientTypes({ onSelectClientType }: ClientTypesProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Store':
        return <Store className="h-6 w-6 text-blue-400 group-hover:scale-110 transition-transform" />;
      case 'Sparkles':
        return <Sparkles className="h-6 w-6 text-purple-400 group-hover:scale-110 transition-transform" />;
      case 'Scissors':
        return <Scissors className="h-6 w-6 text-cyan-400 group-hover:scale-110 transition-transform" />;
      case 'Shirt':
        return <Shirt className="h-6 w-6 text-pink-400 group-hover:scale-110 transition-transform" />;
      case 'Utensils':
        return <Utensils className="h-6 w-6 text-orange-400 group-hover:scale-110 transition-transform" />;
      case 'Building':
        return <Building className="h-6 w-6 text-slate-400 group-hover:scale-110 transition-transform" />;
      case 'GraduationCap':
        return <GraduationCap className="h-6 w-6 text-emerald-400 group-hover:scale-110 transition-transform" />;
      default:
        return <Store className="h-6 w-6 text-blue-400" />;
    }
  };

  const handleClickClientType = (label: string) => {
    onSelectClientType(label);
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
    <section id="clients" className="py-24 bg-[#070b13] relative overflow-hidden border-t border-white/5 bg-grid-pattern">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-3">Industries Map</h2>
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Who I Build Websites For</h3>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-slate-300 font-sans leading-relaxed text-base sm:text-lg">
            No matter your business category, I can design a custom-tailored online presence that meets your precise service workflows and attracts local leads.
          </p>
        </div>

        {/* Client Chips Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4" id="clients-grid">
          {CLIENT_TYPES.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => handleClickClientType(client.label)}
              className="glass rounded-2xl p-5 border border-white/5 hover:border-blue-500/30 hover:bg-white/5 transition-all duration-300 group cursor-pointer flex flex-col justify-between items-center text-center h-48 hover:-translate-y-1.5 shadow-md shadow-black/20"
              id={`client-type-card-${client.id}`}
            >
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 shadow-inner mb-3 group-hover:bg-gradient-to-tr group-hover:from-white/10 group-hover:to-white/5 group-hover:border-white/10 transition-all duration-300">
                {getIcon(client.iconName)}
              </div>
              
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                  {client.label}
                </h4>
                <p className="text-[10px] text-slate-400 font-sans leading-normal line-clamp-2 px-1">
                  {client.description}
                </p>
              </div>

              <div className="flex items-center text-[10px] font-mono text-slate-500 group-hover:text-purple-400 transition-colors pt-2">
                <span>Configure Site</span>
                <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
