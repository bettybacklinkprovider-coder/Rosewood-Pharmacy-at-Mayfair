import React from 'react';
import { PageId } from '../types';
import { GoldCrest } from './GoldCrest';
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#07030e] text-[#d2c8ba] border-t border-[#d4af37]/20 pt-16 pb-12 overflow-hidden">
      {/* Subtle radial background glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-gradient-to-b from-[#d4af37]/5 via-purple-900/10 to-transparent pointer-events-none blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <GoldCrest size={34} />
              <div>
                <span className="font-serif text-xl font-bold tracking-wider text-[#fbf8ed] block">
                  ROSEWOOD
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#d4af37]">
                  PHARMACY AT MAYFAIR
                </span>
              </div>
            </div>
            <p className="text-sm text-[#b8ad9f] leading-relaxed">
              Providing distinguished healthcare counsel, prescription dispensing, and bespoke wellness support in London’s prestigious Mayfair quarter.
            </p>
            <div className="pt-2 text-xs text-[#a09485] space-y-1">
              <p>Registered Pharmacy in England & Wales</p>
              <p>Supervised by GPhC Registered Pharmacists</p>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="font-serif text-base font-semibold text-[#f5eed3] tracking-wider uppercase text-xs mb-4 pb-1 border-b border-[#d4af37]/20">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#fbf8ed] transition-colors flex items-center gap-1 group text-left"
                >
                  <span>Home</span>
                  <ArrowUpRight className="w-3 h-3 text-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#fbf8ed] transition-colors flex items-center gap-1 group text-left"
                >
                  <span>About Us</span>
                  <ArrowUpRight className="w-3 h-3 text-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#fbf8ed] transition-colors flex items-center gap-1 group text-left"
                >
                  <span>Pharmacy Services</span>
                  <ArrowUpRight className="w-3 h-3 text-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#fbf8ed] transition-colors flex items-center gap-1 group text-left"
                >
                  <span>Contact & Location</span>
                  <ArrowUpRight className="w-3 h-3 text-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Pharmacy Services */}
          <div>
            <h4 className="font-serif text-base font-semibold text-[#f5eed3] tracking-wider uppercase text-xs mb-4 pb-1 border-b border-[#d4af37]/20">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-[#b8ad9f]">
              <li>
                <button 
                  onClick={() => handleNav('services')} 
                  className="hover:text-[#f5eed3] transition-colors text-left"
                >
                  Prescription Dispensing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('services')} 
                  className="hover:text-[#f5eed3] transition-colors text-left"
                >
                  Repeat Prescription Service
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('services')} 
                  className="hover:text-[#f5eed3] transition-colors text-left"
                >
                  Confidential Medication Advice
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('services')} 
                  className="hover:text-[#f5eed3] transition-colors text-left"
                >
                  Health & Wellness Consultations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('services')} 
                  className="hover:text-[#f5eed3] transition-colors text-left"
                >
                  Personalised Pharmacy Care
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-semibold text-[#f5eed3] tracking-wider uppercase text-xs mb-4 pb-1 border-b border-[#d4af37]/20">
              Mayfair Dispensary
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="https://maps.google.com/?q=32+N+Row,+London+W1K+6DD,+United+Kingdom"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-[#b8ad9f] hover:text-[#f5eed3] transition-colors group"
              >
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>32 N Row, London W1K 6DD, United Kingdom</span>
              </a>

              <a
                href="tel:+447351463843"
                className="flex items-center gap-2.5 text-[#b8ad9f] hover:text-[#e8cf82] transition-colors group"
              >
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span className="font-medium">+44 7351 463843</span>
              </a>

              <div className="flex items-start gap-2.5 text-[#b8ad9f]">
                <Clock className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p className="text-[#f5eed3]">Mon – Fri: 9:00 AM – 6:30 PM</p>
                  <p>Saturday: 10:00 AM – 5:00 PM</p>
                  <p className="text-[#8c8275]">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Elegant gold decorative divider */}
        <div className="relative my-8">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-[#07030e]">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#d4af37]">MAYFAIR · LONDON</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#8c8275] gap-4">
          <p>© {new Date().getFullYear()} Rosewood Pharmacy at Mayfair. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => handleNav('about')} className="hover:text-[#d2c8ba] transition-colors">Privacy Notice</button>
            <span>·</span>
            <button onClick={() => handleNav('contact')} className="hover:text-[#d2c8ba] transition-colors">Location</button>
            <span>·</span>
            <a href="tel:+447351463843" className="hover:text-[#d2c8ba] transition-colors">Emergency Inquiries</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
