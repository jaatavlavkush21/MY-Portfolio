/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { MessageSquareText, Compass, Code, ShieldCheck, Rocket, ChevronRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data';

export default function Process() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'MessageSquareText':
        return <MessageSquareText className="h-6 w-6 text-blue-400" />;
      case 'Compass':
        return <Compass className="h-6 w-6 text-purple-400" />;
      case 'CodeXml':
        return <Code className="h-6 w-6 text-cyan-400" />;
      case 'ShieldAlert':
        return <ShieldCheck className="h-6 w-6 text-rose-400" />;
      case 'Rocket':
        return <Rocket className="h-6 w-6 text-emerald-400" />;
      default:
        return <MessageSquareText className="h-6 w-6 text-blue-400" />;
    }
  };

  return (
    <section id="process" className="py-24 bg-[#090d16] relative overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[250px] h-[250px] bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[250px] h-[250px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-mono tracking-widest text-purple-400 uppercase mb-3">Project Workflow</h2>
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">How We Build Your Website</h3>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-300 font-sans leading-relaxed text-base sm:text-lg">
            A simple, streamlined, and transparent 5-step development process from initial brainstorming sessions straight to your live business launch.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative" id="timeline-container">
          {/* Vertical line connecting elements on mobile & tablet */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500/80 via-purple-500/40 to-emerald-500/80 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500/80 via-purple-500/40 to-emerald-500/80 md:hidden" />

          {/* Steps Loop */}
          <div className="space-y-12 md:space-y-16">
            {PROCESS_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative flex flex-col md:flex-row items-stretch"
                  id={`process-step-row-${step.step}`}
                >
                  
                  {/* Circle Badge Indicator */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <div className="p-1 rounded-full bg-[#090d16] border border-white/5 shadow-inner">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-display font-bold text-sm shadow-md shadow-blue-500/25">
                        {step.step}
                      </div>
                    </div>
                  </div>

                  {/* Left Side (Content for Even Steps on Desktop, Empty for Odd) */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 md:pr-12 ${isEven ? 'md:text-right' : 'md:order-2 md:pl-12 text-left'}`}>
                    {isEven ? (
                      <div className="glass-card rounded-2xl p-6 border-l-4 border-l-blue-500 md:border-l-0 md:border-r-4 md:border-r-blue-500" id={`step-content-${step.step}`}>
                        <div className="flex md:flex-row-reverse items-center justify-between mb-4">
                          <div className="p-3 bg-white/5 rounded-xl border border-white/5 shadow-inner">
                            {getIcon(step.iconName)}
                          </div>
                          <span className="text-xs font-mono text-blue-400 tracking-wider">STEP 0{step.step}</span>
                        </div>
                        <h4 className="font-display text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">
                          {step.title}
                        </h4>
                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                          {step.description}
                        </p>
                      </div>
                    ) : (
                      <div className="md:invisible md:h-0" />
                    )}
                  </div>

                  {/* Spacer (Desktop middle divider placeholder) */}
                  <div className="hidden md:block w-0" />

                  {/* Right Side (Content for Odd Steps on Desktop, Empty for Even) */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-12 ${isEven ? 'md:order-2 md:pl-12' : 'text-left'}`}>
                    {!isEven ? (
                      <div className="glass-card rounded-2xl p-6 border-l-4 border-l-purple-500" id={`step-content-${step.step}`}>
                        <div className="flex items-center justify-between mb-4">
                          <div className="p-3 bg-white/5 rounded-xl border border-white/5 shadow-inner">
                            {getIcon(step.iconName)}
                          </div>
                          <span className="text-xs font-mono text-purple-400 tracking-wider">STEP 0{step.step}</span>
                        </div>
                        <h4 className="font-display text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">
                          {step.title}
                        </h4>
                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                          {step.description}
                        </p>
                      </div>
                    ) : (
                      <div className="md:invisible md:h-0" />
                    )}
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
