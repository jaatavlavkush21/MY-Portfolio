/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Terminal, Sparkles, Code, Cpu, Database, Laptop } from 'lucide-react';
import { DEVELOPER_INFO } from '../data';

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const skillBadges = [
    { name: 'HTML5', color: 'from-orange-500/20 to-red-500/10 text-orange-400 border-orange-500/30' },
    { name: 'CSS3', color: 'from-blue-500/20 to-cyan-500/10 text-blue-400 border-blue-500/30' },
    { name: 'JavaScript', color: 'from-yellow-500/20 to-amber-500/10 text-yellow-400 border-yellow-500/30' },
    { name: 'React', color: 'from-cyan-500/20 to-blue-500/10 text-cyan-300 border-cyan-500/30' },
    { name: 'PHP', color: 'from-purple-500/20 to-indigo-500/10 text-purple-400 border-purple-500/30' },
    { name: 'MySQL', color: 'from-sky-600/20 to-blue-600/10 text-sky-400 border-sky-600/30' },
  ];

  // Typing effect logic
  useEffect(() => {
    const fullText = DEVELOPER_INFO.taglines[taglineIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length - 1));
      }, 35);
    } else {
      timer = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, 75);
    }

    if (!isDeleting && typedText === fullText) {
      // Hold for 2 seconds before deleting
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setTaglineIndex((prev) => (prev + 1) % DEVELOPER_INFO.taglines.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, taglineIndex]);

  const handleScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
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
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-[#070b13] bg-grid-pattern"
    >
      {/* Background radial glowing effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none animate-pulse-slow-reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 text-left space-y-6" id="hero-text-container">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass border border-white/10 text-xs text-blue-400 font-mono"
            >
              <Sparkles className="h-3.5 w-3.5 text-purple-400 animate-pulse" />
              <span>Available for New Projects</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </motion.div>

            {/* Tagline Typewriter */}
            <div className="h-8 font-mono text-sm font-semibold tracking-wider text-purple-400 uppercase flex items-center">
              <span>{typedText}</span>
              <span className="inline-block w-1.5 h-4 ml-1 bg-blue-400 animate-pulse" />
            </div>

            {/* Large Animated Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight"
            >
              Build Your Business Online With a{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Professional Website
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-xl font-sans"
            >
              I create modern, responsive, and attractive websites for local shops, salons, boutiques, clinics, coaching centers, and small businesses. Turn visitors into loyal paying clients.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
              id="hero-cta-group"
            >
              <button
                onClick={() => handleScrollTo('contact')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:from-blue-600 hover:to-purple-700 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center space-x-2 shadow-lg shadow-blue-500/25 border border-white/10 cursor-pointer"
                id="hero-get-started-cta"
              >
                <span>Get Website Now</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              
              <button
                onClick={() => handleScrollTo('about')}
                className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center space-x-2 cursor-pointer"
                id="hero-secondary-cta"
              >
                <MessageSquare className="h-4 w-4 text-blue-400" />
                <span>Contact Me</span>
              </button>
            </motion.div>

            {/* Skill Badges Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-white/5 space-y-3"
            >
              <p className="text-xs font-mono tracking-widest text-slate-500 uppercase">Expertise Stack</p>
              <div className="flex flex-wrap gap-2">
                {skillBadges.map((badge, idx) => (
                  <span
                    key={badge.name}
                    className={`px-3 py-1 text-xs font-medium rounded-lg border bg-gradient-to-br ${badge.color}`}
                  >
                    {badge.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium Code Window and Float Animations */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0" id="hero-graphics-container">
            {/* Visual Floating elements */}
            <div className="absolute -top-6 -left-6 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 p-3 rounded-2xl animate-bounce" style={{ animationDuration: '6s' }}>
              <Terminal className="h-5 w-5 text-blue-400" />
            </div>
            <div className="absolute -bottom-6 -right-4 bg-purple-500/20 backdrop-blur-md border border-purple-500/30 p-3 rounded-2xl animate-bounce" style={{ animationDuration: '8s' }}>
              <Database className="h-5 w-5 text-purple-400" />
            </div>

            {/* Glowing circle behind mockup */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl -z-10" />

            {/* Browser Glassmorphism Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative"
            >
              {/* Browser bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0d1527] border-b border-white/5">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center space-x-1.5 px-3 py-0.5 rounded-md bg-white/5 border border-white/5 text-[10px] text-slate-400 font-mono">
                  <Laptop className="h-3 w-3 text-blue-400" />
                  <span>wangdu-portfolio.ts</span>
                </div>
                <div className="w-12" /> {/* empty spacer */}
              </div>

              {/* Code Area */}
              <div className="p-5 font-mono text-[11px] sm:text-xs text-slate-300 leading-relaxed overflow-x-auto bg-[#0a0f1d]/90">
                <p className="text-slate-500">// 1. Initialize client details</p>
                <p>
                  <span className="text-purple-400">import</span> {'{'} <span className="text-blue-300">Developer</span> {'}'} <span className="text-purple-400">from</span> <span className="text-emerald-300">'./portfolio'</span>;
                </p>
                <p className="mt-2">
                  <span className="text-purple-400">const</span> <span className="text-yellow-300">wangdu</span>: <span className="text-cyan-300">Developer</span> = {'{'}
                </p>
                <p className="pl-4">
                  name: <span className="text-emerald-300">"{DEVELOPER_INFO.name}"</span>,
                </p>
                <p className="pl-4">
                  profession: <span className="text-emerald-300">"Web Architect"</span>,
                </p>
                <p className="pl-4">
                  speedOptimization: <span className="text-blue-300">true</span>,
                </p>
                <p className="pl-4">
                  responsiveDesign: <span className="text-blue-300">true</span>,
                </p>
                <p className="pl-4 text-slate-500">
                  targetClients: [<span className="text-orange-300">"Shops"</span>, <span className="text-orange-300">"Salons"</span>, <span className="text-orange-300">"Cafes"</span>]
                </p>
                <p className="pl-4">
                  phoneSupport: <span className="text-emerald-300">"7408610380"</span>
                </p>
                <p>{'};'}</p>

                <p className="mt-4 text-slate-500">// 2. Build responsive user interfaces</p>
                <p>
                  <span className="text-purple-400">function</span> <span className="text-blue-300">launchSuccess</span>() {'{'}
                </p>
                <p className="pl-4 text-indigo-300">
                  <span className="text-purple-400">return</span> <span className="text-yellow-300">wangdu</span>.<span className="text-blue-300">buildWebsite</span>()
                </p>
                <p className="pl-8">
                  .<span className="text-blue-300">then</span>(site =&gt; site.<span className="text-blue-300">optimizeSEO</span>())
                </p>
                <p className="pl-8 text-cyan-400">
                  .<span className="text-blue-300">then</span>(() =&gt; <span className="text-emerald-300">"🚀 Online presence live!"</span>);
                </p>
                <p>{'}'}</p>
              </div>

              {/* Status bar */}
              <div className="flex items-center justify-between px-4 py-2 bg-[#0c1322] text-[10px] text-slate-400 border-t border-white/5 font-mono">
                <div className="flex items-center space-x-2">
                  <Cpu className="h-3 w-3 text-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 font-semibold">ONLINE SERVER</span>
                </div>
                <span>UTF-8</span>
                <span>TypeScript 5.8</span>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
