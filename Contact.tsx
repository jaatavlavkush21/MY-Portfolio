/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, HeartHandshake, Zap, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_ME } from '../data';

export default function WhyChooseMe() {
  return (
    <section id="why-choose-me" className="py-24 bg-[#090d16] relative overflow-hidden border-t border-white/5">
      {/* Visual background lights */}
      <div className="absolute top-1/3 right-1/4 w-[280px] h-[280px] bg-purple-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading and Brand Statement */}
          <div className="lg:col-span-5 space-y-6" id="why-choose-me-brand-container">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 font-mono">
              <Sparkles className="h-3.5 w-3.5 text-blue-400 animate-pulse" />
              <span>Premium Quality Assured</span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Why Work With Me For Your Next Website?
            </h3>
            
            <p className="text-slate-300 font-sans leading-relaxed text-sm sm:text-base">
              Unlike large agencies that charge hefty fees and deliver templated layouts, I work directly with you. You get a personalized, high-converting, custom-coded web solution built strictly to grow your business revenues.
            </p>

            {/* Micro guarantees card */}
            <div className="glass rounded-2xl p-5 border border-white/5 space-y-4 shadow-inner">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                  <ShieldCheck className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Direct Accountability</h4>
                  <p className="text-xs text-slate-400">One dedicated developer. No middleman, no delays.</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <HeartHandshake className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Lifetime Partnership</h4>
                  <p className="text-xs text-slate-400">Continuous assistance, support, and consulting.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Checklist Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5" id="checklist-grid-container">
            {WHY_CHOOSE_ME.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card rounded-2xl p-5 hover:border-blue-500/20 hover:bg-white/5 transition-all duration-300 group"
                id={`feature-card-${idx}`}
              >
                <div className="flex items-start space-x-3">
                  {/* Glowing Animated Checkmark */}
                  <div className="p-1 rounded-full bg-blue-500/10 border border-blue-500/30 group-hover:bg-blue-500/20 group-hover:border-blue-500/50 transition-colors mt-1">
                    <CheckCircle2 className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1.5 tracking-tight group-hover:text-blue-400 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
