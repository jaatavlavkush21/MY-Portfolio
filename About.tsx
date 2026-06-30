/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, ProjectItem, ProcessStep, ClientType, FocusArea, CounterItem } from './types';

export const DEVELOPER_INFO = {
  name: "Wangdu Lavkush",
  profession: "Professional Web Developer",
  phone: "7408610380",
  whatsappUrl: "https://wa.me/917408610380",
  taglines: [
    "Turn Visitors Into Customers",
    "Modern Sites for Local Businesses",
    "Affordable & Fast Web Solutions",
    "Grow Your Business Online"
  ],
  bio: "I am Wangdu Lavkush, a passionate Web Developer. I specialize in helping small businesses, local shops, clinics, and education centers build a high-converting, beautiful, and lightning-fast online presence."
};

export const COUNTERS: CounterItem[] = [
  { id: 'projects', value: 47, suffix: '+', label: 'Websites Built' },
  { id: 'clients', value: 35, suffix: '+', label: 'Happy Businesses' },
  { id: 'experience', value: 4, suffix: ' Years', label: 'Tech Experience' },
  { id: 'satisfaction', value: 99, suffix: '%', label: 'Client Satisfaction' }
];

export const FOCUS_AREAS: FocusArea[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Clean, modern code utilizing the latest technologies for stability, speed, and cross-browser compatibility.',
    iconName: 'Code'
  },
  {
    id: 'ui-design',
    title: 'UI/UX Design',
    description: 'Bespoke layouts tailored specifically to convert your local visitors into paying loyal customers.',
    iconName: 'Layout'
  },
  {
    id: 'responsive',
    title: '100% Responsive',
    description: 'Your website will look perfect, fast, and professional on all screens—from mobile phones to 4K desktop screens.',
    iconName: 'Smartphone'
  },
  {
    id: 'business-sol',
    title: 'Business Growth',
    description: 'Built-in SEO practices, WhatsApp direct contact integrations, and quick call actions to capture hot leads instantly.',
    iconName: 'TrendingUp'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'business-web',
    title: 'Business Website',
    description: 'Premium corporate and professional websites for local shops, offices, clinics, showrooms, and companies to display their services.',
    iconName: 'Briefcase',
    benefits: ['Service Lists & Portfolios', 'Google Map Location Integration', 'Lead Capturing Contact Form', 'Professional Brand Design']
  },
  {
    id: 'parlour-web',
    title: 'Beauty Parlour & Salon Website',
    description: 'Beautiful, elegant website with service menus, price lists, high-quality image galleries, and automated WhatsApp appointment booking.',
    iconName: 'Sparkles',
    benefits: ['Interactive Service Menu', 'Stunning Portfolio Gallery', 'WhatsApp Booking System', 'Client Reviews Section']
  },
  {
    id: 'ecommerce-web',
    title: 'E-Commerce Store',
    description: 'A complete online storefront with smooth product browsing, filtering, beautiful images, and a shopping cart with direct WhatsApp checkout.',
    iconName: 'ShoppingBag',
    benefits: ['Unlimited Product Listings', 'Secure Cart & Quick Checkout', 'Direct WhatsApp Orders', 'Easy Admin Product Manager']
  },
  {
    id: 'landing-page',
    title: 'High-Converting Landing Page',
    description: 'Single-page marketing structures optimized for maximum lead generation, Google/Facebook Ads, and quick promotional events.',
    iconName: 'Target',
    benefits: ['Hyper-Focused Headlines', 'Ultra-Fast Page Load times', 'Direct Contact Button Actions', 'Trust & Client Social Proof']
  },
  {
    id: 'maintenance',
    title: 'Website Maintenance & Support',
    description: 'Regular backups, security audits, content modifications, and visual enhancements to keep your active business running 24/7.',
    iconName: 'Settings',
    benefits: ['Daily/Weekly Backups', 'Super-Fast Bug Fixing', 'Content Updates', 'Domain & Hosting Management Support']
  }
];

export const WHY_CHOOSE_ME = [
  { title: "Modern Design", description: "Eye-catching, custom-tailored glassmorphic and elegant visual styles that stand out from competitors." },
  { title: "Mobile Friendly", description: "Designed mobile-first to ensure 80%+ of phone users have a seamless website experience." },
  { title: "Fast Performance", description: "Optimized images and lightweight code for rapid page loading under 1.5 seconds." },
  { title: "SEO Friendly", description: "Configured semantic HTML structure and meta tags to rank higher on Google search results." },
  { title: "Affordable Pricing", description: "High-end agency-grade quality at extremely friendly budgets suitable for growing local businesses." },
  { title: "Direct Customer Support", description: "Personal, one-on-one consultation with no complex agencies or ticketing lines." }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    name: 'Glow & Style Unisex Salon',
    category: 'Beauty Parlour / Salon',
    techTags: ['React', 'Tailwind', 'Motion'],
    description: 'An elegant dark-themed website with beautiful transition animations, listing cosmetic services, stylist crew portfolios, and instant booking via WhatsApp.',
    features: ['Interactive Booking', 'Services Price list', 'Image Gallery Carousel', 'Mobile Quick Call Action'],
    mockDesktopCode: 'const SalonApp = () => { return <div>✂️ Welcome to Glow & Style</div> }',
    mockMobileView: 'Beauty Parlour booking page with 15+ services, dynamic reviews, and automated styling suggestions.'
  },
  {
    id: 'p2',
    name: 'Achievers Coaching Center',
    category: 'Education / Coaching',
    techTags: ['React', 'Tailwind', 'Firebase'],
    description: 'A comprehensive educational website showing course structures, online brochures, faculty listings, test papers, and contact sheets.',
    features: ['Downloadable Study Material', 'Student Success Wall', 'Course Fees Structures', 'Admission Query Form'],
    mockDesktopCode: 'const Academy = () => { return <div>📚 Achievers Portal Active</div> }',
    mockMobileView: 'Course directory, active student enrollment form, and interactive syllabus overview.'
  },
  {
    id: 'p3',
    name: 'EcoMart Boutique & Accessories',
    category: 'E-Commerce / Retail',
    techTags: ['React', 'CSS', 'WhatsApp Checkout'],
    description: 'A boutique showcase catalog featuring direct checkout integration that compiles shopping cart items and sends a neat invoice via WhatsApp.',
    features: ['Catalog Filtering', 'Dynamic Shopping Cart', 'No-Database Checkout', 'Interactive Product Zoom'],
    mockDesktopCode: 'const EcoMart = () => { return <div>🛍️ Checkout on WhatsApp</div> }',
    mockMobileView: 'Responsive product layout with instant category filters, visual slider, and custom checkout link.'
  },
  {
    id: 'p4',
    name: 'Apex Orthodontic Clinic',
    category: 'Medical / Corporate',
    techTags: ['React', 'Tailwind', 'Maps API'],
    description: 'A modern, clean medical landing page demonstrating services, expert reviews, treatment guides, clinic schedule, and contact forms.',
    features: ['Appointment Scheduling Form', 'Interactive Map Location', 'FAQ Accoridon Section', 'Doctor Credentials Showcase'],
    mockDesktopCode: 'const MedicalApp = () => { return <div>🦷 Dental Appointment System</div> }',
    mockMobileView: 'One-tap appointment scheduler, live interactive direction maps, and treatment detail sliders.'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Discuss Your Idea',
    description: 'We connect over a call or WhatsApp to discuss your business requirements, target audience, design preferences, and goals.',
    iconName: 'MessageSquareText'
  },
  {
    step: 2,
    title: 'Design Planning',
    description: 'I lay out the visual roadmap, color choices, typography, content sections, and prepare the interactive layout draft for your feedback.',
    iconName: 'Compass'
  },
  {
    step: 3,
    title: 'Website Development',
    description: 'I write premium, standard-compliant, fully responsive code with fast page-speed optimizations and glassmorphic designs.',
    iconName: 'CodeXml'
  },
  {
    step: 4,
    title: 'Testing & Feedback',
    description: 'We run multi-device checks (Mobile, Tablet, Desktop) to guarantee pixel-perfect responsiveness, flawless form submission, and rapid speed.',
    iconName: 'ShieldAlert'
  },
  {
    step: 5,
    title: 'Launch & Support',
    description: 'Your beautiful business website goes live! I handle domain pointing, server setup, and provide tutorial support to manage it easily.',
    iconName: 'Rocket'
  }
];

export const CLIENT_TYPES: ClientType[] = [
  { id: 'shops', label: 'Local Shops', iconName: 'Store', description: 'Grocery, apparel, electronics and retail outlets.' },
  { id: 'beauty-parlours', label: 'Beauty Parlours', iconName: 'Sparkles', description: 'Salons, parlours, spas and cosmetics businesses.' },
  { id: 'salons', label: 'Hair Salons', iconName: 'Scissors', description: 'Grooming salons, barbershops and style studios.' },
  { id: 'boutiques', label: 'Boutiques', iconName: 'Shirt', description: 'Fashion boutiques, clothing designers and showrooms.' },
  { id: 'restaurants', label: 'Restaurants', iconName: 'Utensils', description: 'Eateries, cafes, fast food joints and catering.' },
  { id: 'offices', label: 'Local Offices', iconName: 'Building', description: 'CA, lawyers, clinics, real estate and services.' },
  { id: 'coaching-centers', label: 'Coaching Centers', iconName: 'GraduationCap', description: 'Tuitions, coaching, schools and individual tutors.' }
];
