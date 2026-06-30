/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Code, Layout, Smartphone, TrendingUp, Award, Users, CheckCircle2, Star } from 'lucide-react';
import { DEVELOPER_INFO, COUNTERS, FOCUS_AREAS } from '../data';

// Helper component for animating individual counters
function AnimatedCounter({ value, suffix, duration = 1500 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
      {count}
      <span className="text-blue-400">{suffix}</span>
    </span>
  );
}

export default function About() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Code':
        return <Code className="h-6 w-6 text-blue-400" />;
      case 'Layout':
        return <Layout className="h-6 w-6 text-purple-400" />;
      case 'Smartphone':
        return <Smartphone className="h-6 w-6 text-cyan-400" />;
      case 'TrendingUp':
        return <TrendingUp className="h-6 w-6 text-emerald-400" />;
      default:
        return <Code className="h-6 w-6 text-blue-400" />;
    }
  };

  const getCounterIcon = (id: string) => {
    switch (id) {
      case 'projects':
        return <Code className="h-5 w-5 text-blue-400" />;
      case 'clients':
        return <Users className="h-5 w-5 text-purple-400" />;
      case 'experience':
        return <Award className="h-5 w-5 text-cyan-400" />;
      default:
        return <Star className="h-5 w-5 text-amber-400" />;
    }
  };

  return (
    <section id="about" className="py-24 bg-[#090d16] relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-3">Professional Bio</h2>
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h3>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-slate-300 font-sans leading-relaxed text-base sm:text-lg">
            {DEVELOPER_INFO.bio}
          </p>
        </div>

        {/* Counters Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20" id="counters-container">
          {COUNTERS.map((counter) => (
            <div
              key={counter.id}
              className="glass rounded-2xl p-6 border border-white/5 flex flex-col items-center justify-center text-center hover:border-white/10 transition-all duration-300"
              id={`counter-card-${counter.id}`}
            >
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 mb-4 shadow-inner">
                {getCounterIcon(counter.id)}
              </div>
              <AnimatedCounter value={counter.value} suffix={counter.suffix} />
              <span className="text-xs sm:text-sm font-mono text-slate-400 mt-2 tracking-wide">
                {counter.label}
              </span>
            </div>
          ))}
        </div>

        {/* Focus Areas Block */}
        <div className="space-y-6">
          <div className="text-center mb-10">
            <h4 className="font-display text-xl sm:text-2xl font-bold text-white">How I Help Your Business</h4>
            <p className="text-slate-400 text-sm mt-2">Guaranteed pillars of high-performing websites built for conversion.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="focus-areas-grid">
            {FOCUS_AREAS.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between"
                id={`focus-card-${area.id}`}
              >
                <div>
                  <div className="p-3.5 bg-white/5 rounded-xl border border-white/5 inline-flex mb-5 shadow-inner">
                    {getIcon(area.iconName)}
                  </div>
                  <h5 className="font-display text-lg font-bold text-white mb-3 tracking-tight">
                    {area.title}
                  </h5>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                    {area.description}
                  </p>
                </div>
                
                <div className="pt-5 mt-5 border-t border-white/5 flex items-center text-[10px] font-mono text-blue-400">
                  <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-blue-400/80" />
                  <span>Quality Assured</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
