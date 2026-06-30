/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageSquareCode, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { DEVELOPER_INFO } from '../data';

interface ContactProps {
  selectedBusinessType: string;
}

export default function Contact({ selectedBusinessType }: ContactProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [businessType, setBusinessType] = useState('Local Shop');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync prop changes to dropdown state
  useEffect(() => {
    if (selectedBusinessType) {
      // Find a matching dropdown value
      const val = selectedBusinessType.trim();
      setBusinessType(val);
    }
  }, [selectedBusinessType]);

  const businessOptions = [
    'Local Shop',
    'Beauty Parlour',
    'Hair Salon',
    'Fashion Boutique',
    'Restaurant / Cafe',
    'Coaching Center / Tuition',
    'Local Office / Company',
    'Other Business Type'
  ];

  const handleLocalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setIsSubmitting(true);
    // Simulate API delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset form
      setName('');
      setPhone('');
      setMessage('');
    }, 1500);
  };

  const handleWhatsAppSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Please fill in your Name and Phone Number first.');
      return;
    }

    // Build prefilled message text
    const textMessage = `Hello Wangdu Lavkush, my name is ${name}. I am looking to build a website for my business (${businessType}). My Phone: ${phone}. Here are the details: ${message || 'No additional details.'}`;
    
    // URL encode
    const encodedText = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/917408610380?text=${encodedText}`;
    
    // Open in a new tab safely
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#090d16] relative overflow-hidden border-t border-white/5">
      {/* Background glow flares */}
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono tracking-widest text-purple-400 uppercase mb-3">Get In Touch</h2>
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Let's Build Your Website</h3>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-300 font-sans leading-relaxed text-base sm:text-lg">
            Ready to establish your stunning digital footprint? Reach out today for a free price quotation and design prototype briefing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="contact-wrapper">
          
          {/* Left Column: Direct Contact Details Cards */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between" id="contact-details-panel">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 font-mono">
                <Sparkles className="h-3.5 w-3.5 text-blue-400 animate-pulse" />
                <span>Quick Response Guaranteed</span>
              </div>

              <h4 className="font-display text-2xl font-bold text-white tracking-tight">
                Developer Contacts
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed font-sans max-w-sm">
                Have an urgent inquiry? Call directly or send a message via WhatsApp to chat about your business timeline immediately.
              </p>

              {/* Direct Info list */}
              <div className="space-y-4 pt-4" id="direct-contacts-list">
                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5 shadow-inner">
                  <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/25">
                    <Phone className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono tracking-wider text-slate-500 uppercase">Call Developer</p>
                    <a href={`tel:${DEVELOPER_INFO.phone}`} className="text-sm sm:text-base font-bold text-white hover:text-blue-400 transition-colors">
                      +91 {DEVELOPER_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5 shadow-inner">
                  <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/25">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono tracking-wider text-slate-500 uppercase">Inquire Email</p>
                    <span className="text-sm sm:text-base font-bold text-white">
                      wangdu.dev@gmail.com
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5 shadow-inner">
                  <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/25">
                    <MapPin className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono tracking-wider text-slate-500 uppercase">Service Coverage</p>
                    <span className="text-sm sm:text-base font-bold text-white">
                      Pan India Remote Delivery
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Support Notice Card */}
            <div className="p-5 bg-white/5 rounded-2xl border border-white/5 mt-8 lg:mt-0 shadow-inner space-y-2">
              <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-400">
                <ShieldCheck className="h-4 w-4" />
                <span>WhatsApp Instant Support</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                By choosing WhatsApp submit, you compile everything instantly and send it over directly. We can start reviewing your site specs in under 5 minutes.
              </p>
            </div>
          </div>

          {/* Right Column: Dynamic Contact Form */}
          <div className="lg:col-span-7" id="contact-form-panel">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-4"
                    id="contact-success-state"
                  >
                    <div className="p-4 bg-emerald-500/15 rounded-full inline-flex border border-emerald-500/30 mb-4 shadow-lg shadow-emerald-500/10">
                      <CheckCircle className="h-10 w-10 text-emerald-400 animate-bounce" />
                    </div>
                    
                    <h4 className="font-display text-2xl font-bold text-white tracking-tight">
                      Proposal Submitted Successfully!
                    </h4>
                    
                    <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for your interest! I will review your business type and requirements, and call you back on your phone number within 24 hours.
                    </p>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors text-xs font-medium cursor-pointer"
                    >
                      Submit Another Proposal
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleLocalSubmit}
                    className="space-y-5"
                    id="business-proposal-form"
                  >
                    {/* Name input */}
                    <div>
                      <label className="block text-xs font-mono tracking-wider text-slate-400 uppercase mb-2">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Wangdu Lavkush"
                        className="w-full p-3.5 text-sm rounded-xl glass-input"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Phone input */}
                      <div>
                        <label className="block text-xs font-mono tracking-wider text-slate-400 uppercase mb-2">
                          Phone Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 7408610380"
                          className="w-full p-3.5 text-sm rounded-xl glass-input"
                        />
                      </div>

                      {/* Business Type dropdown */}
                      <div>
                        <label className="block text-xs font-mono tracking-wider text-slate-400 uppercase mb-2">
                          Business Type
                        </label>
                        <select
                          value={businessType}
                          onChange={(e) => setBusinessType(e.target.value)}
                          className="w-full p-3.5 text-sm rounded-xl glass-input cursor-pointer"
                        >
                          {businessOptions.map((opt) => (
                            <option key={opt} value={opt} className="bg-[#090d16] text-white">
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message input */}
                    <div>
                      <label className="block text-xs font-mono tracking-wider text-slate-400 uppercase mb-2">
                        Describe Your Idea or Requirements
                      </label>
                      <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell me a bit about what services you offer and what you would like to have on your website..."
                        className="w-full p-3.5 text-sm rounded-xl glass-input resize-none"
                      />
                    </div>

                    {/* Dual Buttons Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      {/* Standard Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium text-sm hover:scale-[1.01] transition-all flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/10 cursor-pointer disabled:opacity-50"
                        id="submit-form-regular"
                      >
                        {isSubmitting ? (
                          <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>Submit Inquiry</span>
                            <Send className="h-4 w-4" />
                          </>
                        )}
                      </button>

                      {/* WhatsApp Submit Action */}
                      <button
                        type="button"
                        onClick={handleWhatsAppSubmit}
                        className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm hover:scale-[1.01] transition-all flex items-center justify-center space-x-2 shadow-lg shadow-emerald-600/10 cursor-pointer"
                        id="submit-form-whatsapp"
                      >
                        <MessageSquareCode className="h-4 w-4" />
                        <span>Submit Via WhatsApp</span>
                      </button>
                    </div>

                    <p className="text-[10px] text-center text-slate-500 font-mono pt-2">
                      🔒 No credit cards required. High speed secure delivery.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
