/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, ExternalLink, Smartphone, Monitor, ShoppingCart, Calendar, Check, Send, X, BookOpen, Scissors, Store, ShieldCheck } from 'lucide-react';
import { PROJECTS } from '../data';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeDemoProject, setActiveDemoProject] = useState<any | null>(null);
  
  // Interactive simulator states
  const [salonBookingName, setSalonBookingName] = useState('');
  const [salonBookingService, setSalonBookingService] = useState('Haircut & Styling');
  const [salonBookingSuccess, setSalonBookingSuccess] = useState(false);

  const [ecoCart, setEcoCart] = useState<any[]>([]);
  const [ecoSuccess, setEcoSuccess] = useState(false);

  const [studyDownloadSuccess, setStudyDownloadSuccess] = useState<string | null>(null);
  const [medicalBookingDate, setMedicalBookingDate] = useState('');
  const [medicalSuccess, setMedicalSuccess] = useState(false);

  const categories = ['All', 'Beauty Parlour / Salon', 'Education / Coaching', 'E-Commerce / Retail', 'Medical / Corporate'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const handleOpenDemo = (project: any) => {
    setActiveDemoProject(project);
    // Reset simulated states
    setSalonBookingSuccess(false);
    setSalonBookingName('');
    setEcoCart([]);
    setEcoSuccess(false);
    setStudyDownloadSuccess(null);
    setMedicalSuccess(false);
  };

  // Simulated Salon Booking
  const handleSalonBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!salonBookingName) return;
    setSalonBookingSuccess(true);
    setTimeout(() => {
      setSalonBookingSuccess(false);
      setSalonBookingName('');
    }, 4000);
  };

  // Simulated EcoMart Cart Adding
  const handleAddEcoItem = (item: { name: string; price: number }) => {
    setEcoCart((prev) => [...prev, item]);
  };

  const handleEcoCheckout = () => {
    if (ecoCart.length === 0) return;
    setEcoSuccess(true);
    setTimeout(() => {
      setEcoCart([]);
      setEcoSuccess(false);
    }, 4000);
  };

  // Simulated Study Material Download
  const handleStudyDownload = (fileName: string) => {
    setStudyDownloadSuccess(fileName);
    setTimeout(() => {
      setStudyDownloadSuccess(null);
    }, 3000);
  };

  // Simulated Medical Booking
  const handleMedicalBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!medicalBookingDate) return;
    setMedicalSuccess(true);
    setTimeout(() => {
      setMedicalSuccess(false);
      setMedicalBookingDate('');
    }, 4000);
  };

  return (
    <section id="portfolio" className="py-24 bg-[#070b13] relative overflow-hidden border-t border-white/5 bg-grid-pattern">
      {/* Visual background lights */}
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[95px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-3">My Work Showcase</h2>
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Featured Client Projects</h3>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-slate-300 font-sans leading-relaxed text-base sm:text-lg">
            Explore a selection of responsive business websites designed and optimized for local shops, coaching institutes, salons, and medical practitioners.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="portfolio-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl border transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white border-blue-500/50 shadow-md shadow-blue-500/15'
                  : 'bg-white/5 border-white/5 text-slate-400 hover:text-white hover:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" id="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group border border-white/10 shadow-xl flex flex-col justify-between"
              id={`project-card-${project.id}`}
            >
              {/* Card visual showcase */}
              <div className="relative h-48 sm:h-56 bg-gradient-to-tr from-[#0d1425] to-[#160c25] flex items-center justify-center p-6 border-b border-white/5 overflow-hidden">
                {/* Simulated Grid overlay background */}
                <div className="absolute inset-0 bg-grid-pattern opacity-40 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b13] via-transparent to-transparent opacity-85" />
                
                {/* Floating graphic representative */}
                <div className="relative z-10 text-center space-y-2 group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="mx-auto p-4 bg-white/5 rounded-2xl border border-white/10 inline-flex shadow-inner">
                    {project.id === 'p1' && <Scissors className="h-8 w-8 text-purple-400" />}
                    {project.id === 'p2' && <BookOpen className="h-8 w-8 text-blue-400" />}
                    {project.id === 'p3' && <Store className="h-8 w-8 text-cyan-400" />}
                    {project.id === 'p4' && <Sparkles className="h-8 w-8 text-rose-400" />}
                  </div>
                  <p className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">{project.category}</p>
                </div>

                {/* Corner Tech Tag indicator */}
                <div className="absolute top-4 right-4 flex gap-1">
                  {project.techTags.slice(0, 2).map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 text-[9px] font-mono rounded bg-[#070b13]/80 border border-white/10 text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card text content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h4 className="font-display text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                  {/* Features list bullet previews */}
                  <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                    {project.features.slice(0, 2).map((f, fIdx) => (
                      <span key={fIdx} className="text-[10px] text-slate-400 bg-white/5 border border-white/5 px-2 py-1 rounded-lg">
                        • {f}
                      </span>
                    ))}
                  </div>

                  {/* Trigger Simulator Action */}
                  <button
                    onClick={() => handleOpenDemo(project)}
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-600/10 hover:from-blue-500 hover:to-purple-600 text-xs text-white hover:text-white font-medium border border-blue-500/20 hover:border-transparent hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-blue-500/10 transition-all cursor-pointer inline-flex items-center space-x-1.5"
                    id={`live-demo-trigger-${project.id}`}
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* INTERACTIVE DEMO MODAL SIMULATOR */}
        <AnimatePresence>
          {activeDemoProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#070b13]/90 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-4xl h-[85vh] bg-[#0c1322] border border-white/10 rounded-2xl flex flex-col shadow-2xl overflow-hidden"
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#090d16]">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-xl">
                      <Smartphone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white tracking-tight">{activeDemoProject.name}</h4>
                      <p className="text-[10px] text-slate-400 font-mono">CLIENT WEBSITE SIMULATION STAGE</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveDemoProject(null)}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5 transition-all"
                    id="demo-modal-close"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Modal main layout - Left: Control panel / Info, Right: Live Interactive Render */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
                  
                  {/* Left Column: Tech Overview & Simulation Guide */}
                  <div className="md:col-span-4 p-6 bg-[#090d16]/50 border-r border-white/5 overflow-y-auto space-y-6">
                    <div>
                      <h5 className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-2">Simulated App</h5>
                      <h6 className="text-lg font-bold text-white tracking-tight">{activeDemoProject.name}</h6>
                      <p className="text-xs text-slate-400 font-sans mt-1">
                        Interact with the mockup on the right. This represents the functional modules crafted for this specific business category.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">Features Included</p>
                      <ul className="space-y-1.5">
                        {activeDemoProject.features.map((feat: string, idx: number) => (
                          <li key={idx} className="flex items-start text-xs text-slate-300 font-sans">
                            <span className="p-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mr-2 mt-0.5">
                              <Check className="h-3 w-3 text-emerald-400" />
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-2">
                      <div className="flex items-center space-x-1.5 text-xs text-blue-400 font-mono">
                        <Monitor className="h-3.5 w-3.5" />
                        <span>Interactive Sandbox</span>
                      </div>
                      <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                        Input real text or click links to simulate booking, checkout carts, or material downloading just like a live end-user!
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Beautiful Interactive Render Frame */}
                  <div className="md:col-span-8 bg-[#0a0f1d] overflow-y-auto p-4 sm:p-6 flex flex-col">
                    
                    {/* Simulated Site Container */}
                    <div className="flex-1 rounded-xl border border-white/5 bg-[#121829] overflow-hidden flex flex-col text-white shadow-inner">
                      
                      {/* Browser header of simulator */}
                      <div className="px-4 py-2 bg-[#090d16] flex items-center justify-between border-b border-white/5">
                        <div className="flex items-center space-x-1.5 text-[10px] text-slate-400 font-mono">
                          <span className="h-2 w-2 rounded-full bg-emerald-500" />
                          <span>https://demo-{activeDemoProject.id}.wangdulavkush.com</span>
                        </div>
                        <span className="text-[9px] font-mono text-slate-500 uppercase">Interactive Device Mock</span>
                      </div>

                      {/* SIMULATION AREA */}
                      <div className="p-5 flex-1 flex flex-col justify-center">
                        
                        {/* 1. BEAUTY SALON SIMULATOR */}
                        {activeDemoProject.id === 'p1' && (
                          <div className="space-y-6">
                            <div className="text-center">
                              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">GLOW & STYLE UNISEX SALON</span>
                              <h5 className="text-xl font-bold tracking-tight mt-1">Book Premium Grooming</h5>
                              <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1">Choose a slot and stylist for responsive customer convenience.</p>
                            </div>

                            {salonBookingSuccess ? (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-center space-y-2"
                              >
                                <span className="p-2 bg-purple-500/20 rounded-full inline-flex">
                                  <Check className="h-5 w-5 text-purple-400" />
                                </span>
                                <h6 className="text-sm font-bold text-white">Appointment Form Submitting!</h6>
                                <p className="text-xs text-slate-400">
                                  This simulates compiling details and sending an automated booking note via WhatsApp link directly to the Salon owner.
                                </p>
                              </motion.div>
                            ) : (
                              <form onSubmit={handleSalonBookingSubmit} className="space-y-4 max-w-md mx-auto">
                                <div>
                                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Your Name</label>
                                  <input
                                    type="text"
                                    value={salonBookingName}
                                    onChange={(e) => setSalonBookingName(e.target.value)}
                                    placeholder="Enter your name"
                                    required
                                    className="w-full text-xs p-2.5 rounded-lg bg-[#0d1424] border border-white/10 focus:border-purple-500 text-white focus:outline-none"
                                  />
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                  <div>
                                    <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Select Service</label>
                                    <select
                                      value={salonBookingService}
                                      onChange={(e) => setSalonBookingService(e.target.value)}
                                      className="w-full text-xs p-2.5 rounded-lg bg-[#0d1424] border border-white/10 text-white focus:outline-none"
                                    >
                                      <option>Haircut & Styling</option>
                                      <option>Facial & Face Spa</option>
                                      <option>Pedicure & Manicure</option>
                                      <option>Cosmetics Glow Styling</option>
                                    </select>
                                  </div>
                                  <div>
                                    <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Timing</label>
                                    <div className="p-2.5 text-xs text-slate-400 bg-[#0d1424] border border-white/10 rounded-lg text-center">
                                      Tomorrow (3:00 PM)
                                    </div>
                                  </div>
                                </div>

                                <button
                                  type="submit"
                                  className="w-full py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-xs font-semibold shadow-md shadow-purple-500/10 cursor-pointer flex items-center justify-center space-x-1.5"
                                >
                                  <span>Request Appointment</span>
                                  <Calendar className="h-3.5 w-3.5" />
                                </button>
                              </form>
                            )}

                            {/* Service catalog cards in miniature */}
                            <div className="pt-4 border-t border-white/5">
                              <p className="text-[10px] font-mono text-slate-400 uppercase mb-2">Our Services & Pricing</p>
                              <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="p-2 bg-white/5 rounded-lg border border-white/5 flex justify-between">
                                  <span>Haircut + Wash</span>
                                  <span className="text-purple-400">₹250</span>
                                </div>
                                <div className="p-2 bg-white/5 rounded-lg border border-white/5 flex justify-between">
                                  <span>Bridal Makeover</span>
                                  <span className="text-purple-400">₹2,500</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* 2. COACHING CENTER PORTAL */}
                        {activeDemoProject.id === 'p2' && (
                          <div className="space-y-6">
                            <div className="text-center">
                              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">ACHIEVERS COACHING ACADEMY</span>
                              <h5 className="text-xl font-bold tracking-tight mt-1">Free Study Resources</h5>
                              <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1">Empowering students with immediate study material downloads.</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="coaching-resources-simulator">
                              {[
                                { file: 'Maths_Tricks_Formulas.pdf', size: '2.4 MB', sub: 'Class 10th Algebra' },
                                { file: 'Science_Mock_Paper_2026.pdf', size: '1.8 MB', sub: 'CBSE Practice Set' },
                              ].map((item, idx) => (
                                <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between group">
                                  <div>
                                    <p className="text-xs font-bold text-white">{item.file}</p>
                                    <p className="text-[10px] text-slate-400 font-mono mt-0.5">{item.sub} • {item.size}</p>
                                  </div>
                                  <button
                                    onClick={() => handleStudyDownload(item.file)}
                                    className="px-3 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-[10px] font-semibold transition-colors cursor-pointer"
                                  >
                                    {studyDownloadSuccess === item.file ? 'Downloaded' : 'Download'}
                                  </button>
                                </div>
                              ))}
                            </div>

                            {studyDownloadSuccess && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-3.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-center text-xs text-emerald-400 flex items-center justify-center space-x-1.5"
                              >
                                <Check className="h-4 w-4" />
                                <span>Simulating file download of: {studyDownloadSuccess}</span>
                              </motion.div>
                            )}

                            {/* Syllabus structure mockup */}
                            <div className="pt-4 border-t border-white/5 text-center space-y-2">
                              <p className="text-[10px] font-mono text-slate-400 uppercase">Available Batches</p>
                              <div className="flex justify-center gap-1.5 text-[10px] text-slate-300">
                                <span className="bg-white/5 px-2.5 py-1 rounded-full border border-white/5">Class 9-10 Boards</span>
                                <span className="bg-white/5 px-2.5 py-1 rounded-full border border-white/5">Class 11-12 IIT/JEE</span>
                                <span className="bg-white/5 px-2.5 py-1 rounded-full border border-white/5">NDA & Defense</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* 3. E-COMMERCE SHOWCASE BOUTIQUE */}
                        {activeDemoProject.id === 'p3' && (
                          <div className="space-y-6">
                            <div className="text-center">
                              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">ECOMART CATALOG BOUTIQUE</span>
                              <h5 className="text-lg font-bold tracking-tight mt-1">Select Items & Order on WhatsApp</h5>
                              <p className="text-xs text-slate-400 mt-1">Add items to card, select sizes, and hit checkout to compiled invoicing.</p>
                            </div>

                            {ecoSuccess ? (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-center space-y-2"
                              >
                                <span className="p-2 bg-cyan-500/20 rounded-full inline-flex">
                                  <ShoppingCart className="h-5 w-5 text-cyan-400" />
                                </span>
                                <h6 className="text-sm font-bold text-white">Invoice Compiling Completed!</h6>
                                <p className="text-xs text-slate-400">
                                  This compiles the products list with pricing and redirects the customer to WhatsApp to dispatch the order instantly. No credit cards needed!
                                </p>
                              </motion.div>
                            ) : (
                              <div className="space-y-4">
                                {/* Miniature Products grid */}
                                <div className="grid grid-cols-2 gap-3">
                                  {[
                                    { name: 'Embroidered Kurti', price: 1499, id: 1 },
                                    { name: 'Designer Silk Saree', price: 2999, id: 2 }
                                  ].map((p) => (
                                    <div key={p.id} className="p-3 bg-white/5 rounded-xl border border-white/5 flex flex-col justify-between space-y-2">
                                      <div>
                                        <p className="text-xs font-bold text-white">{p.name}</p>
                                        <p className="text-xs text-cyan-400 font-mono mt-0.5">₹{p.price}</p>
                                      </div>
                                      <button
                                        onClick={() => handleAddEcoItem(p)}
                                        className="w-full py-1 rounded bg-[#0d1424] hover:bg-white/10 text-[9px] border border-white/10 text-white font-medium cursor-pointer transition-colors"
                                      >
                                        Add to Cart
                                      </button>
                                    </div>
                                  ))}
                                </div>

                                {/* Active Cart Row */}
                                <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                                  <div className="flex items-center space-x-2">
                                    <div className="relative">
                                      <ShoppingCart className="h-4 w-4 text-cyan-400" />
                                      <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[8px] font-bold h-3.5 w-3.5 rounded-full flex items-center justify-center">
                                        {ecoCart.length}
                                      </span>
                                    </div>
                                    <span className="text-xs text-slate-300">
                                      {ecoCart.length === 0 ? 'Cart is empty' : `${ecoCart.length} item(s) selected`}
                                    </span>
                                  </div>
                                  
                                  {ecoCart.length > 0 && (
                                    <button
                                      onClick={handleEcoCheckout}
                                      className="px-3 py-1 bg-cyan-500 hover:bg-cyan-600 text-[10px] text-white rounded font-bold cursor-pointer transition-colors"
                                    >
                                      Checkout Order
                                    </button>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* 4. DENTAL CLINIC LANDING PAGE */}
                        {activeDemoProject.id === 'p4' && (
                          <div className="space-y-6">
                            <div className="text-center">
                              <span className="text-xs font-mono text-rose-400 uppercase tracking-widest">APEX DENTAL CLINIC</span>
                              <h5 className="text-xl font-bold tracking-tight mt-1">Book Dentist Appointment</h5>
                              <p className="text-xs text-slate-400 mt-1">Secure and reliable clinical scheduler built to manage patient inflows.</p>
                            </div>

                            {medicalSuccess ? (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="p-5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-center space-y-2"
                              >
                                <span className="p-2 bg-rose-500/20 rounded-full inline-flex">
                                  <Check className="h-5 w-5 text-rose-400" />
                                </span>
                                <h6 className="text-sm font-bold text-white">Clinical Form Logged!</h6>
                                <p className="text-xs text-slate-400">
                                  This validates the appointment and triggers SMS alerts to both the patient and dentist.
                                </p>
                              </motion.div>
                            ) : (
                              <form onSubmit={handleMedicalBooking} className="space-y-4 max-w-md mx-auto">
                                <div>
                                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Pick Date</label>
                                  <input
                                    type="date"
                                    value={medicalBookingDate}
                                    onChange={(e) => setMedicalBookingDate(e.target.value)}
                                    required
                                    className="w-full text-xs p-2.5 rounded-lg bg-[#0d1424] border border-white/10 text-white focus:outline-none"
                                  />
                                </div>

                                <button
                                  type="submit"
                                  className="w-full py-2.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-xs font-semibold shadow-md shadow-rose-500/10 cursor-pointer flex items-center justify-center space-x-1.5"
                                >
                                  <span>Book Clinical Spot</span>
                                  <ShieldCheck className="h-4 w-4" />
                                </button>
                              </form>
                            )}

                            {/* Clinic review quote */}
                            <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-center text-xs italic text-slate-300">
                              "Excellent experience, Dr. Verma has extremely skilled hands. High recommend Apex!" — Sharma K.
                            </div>
                          </div>
                        )}

                      </div>
                    </div>

                  </div>

                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
