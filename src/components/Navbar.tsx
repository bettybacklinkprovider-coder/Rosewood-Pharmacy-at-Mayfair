import React, { useState } from 'react';
import { PageId } from '../types';
import { Menu, X, Phone, Clock } from 'lucide-react';
import { GoldCrest } from './GoldCrest';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0512]/92 backdrop-blur-md border-b border-[#d4af37]/15 transition-all">
      {/* Subtle top notification bar for location and urgent call */}
      <div className="hidden sm:flex items-center justify-between px-6 lg:px-12 py-1.5 text-xs text-[#d2c8ba]/80 bg-[#12091f]/80 border-b border-[#d4af37]/10">
        <div className="flex items-center gap-2">
          <span className="text-[#d4af37]">32 N Row, Mayfair, London W1K 6DD</span>
          <span aria-hidden="true" className="text-[#d4af37]/40">·</span>
          <span className="flex items-center gap-1 text-[#e2d8c7]">
            <Clock className="w-3 h-3 text-[#d4af37]" />
            Mon–Fri: 9:00 AM – 6:30 PM
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="tel:+447351463843"
            className="flex items-center gap-1.5 text-[#e8cf82] hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3 text-[#d4af37]" />
            <span className="font-medium tracking-wide">+44 7351 463843</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
          aria-label="Rosewood Pharmacy at Mayfair Home"
        >
          <GoldCrest size={32} className="transition-transform duration-300 group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wider text-[#fbf8ed] group-hover:text-[#e8cf82] transition-colors leading-tight whitespace-nowrap">
              ROSEWOOD PHARMACY
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37]/80 -mt-0.5">
              AT MAYFAIR · LONDON
            </span>
          </div>
        </button>

        {/* Zone 2: Clean 4 nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1 transition-colors tracking-wide ${
                  isActive
                    ? 'text-[#f5eed3] font-semibold'
                    : 'text-[#d2c8ba] hover:text-[#fbf8ed]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0a0512] bg-gradient-to-r from-[#e8cf82] via-[#d4af37] to-[#c59b27] hover:brightness-110 active:scale-95 transition-all rounded shadow-md shadow-[#d4af37]/15 whitespace-nowrap"
          >
            Prescription Support
          </button>
          <a
            href="tel:+447351463843"
            className="px-3.5 py-2 text-xs font-medium tracking-wide text-[#f5eed3] border border-[#d4af37]/40 hover:border-[#d4af37] hover:bg-[#d4af37]/10 transition-all rounded whitespace-nowrap"
          >
            Call Us
          </a>
        </div>

        {/* Mobile menu hamburger toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="tel:+447351463843"
            aria-label="Call Rosewood Pharmacy"
            className="p-2 text-[#d4af37] hover:bg-[#d4af37]/10 rounded border border-[#d4af37]/30"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#f5eed3] hover:text-[#d4af37] hover:bg-[#1a0f2b] rounded focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#10071e] border-b border-[#d4af37]/20 px-6 pt-4 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left py-2.5 px-3 rounded text-base transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#22103a] text-[#f5eed3] font-semibold border-l-2 border-[#d4af37]'
                      : 'text-[#d2c8ba] hover:bg-[#1b0d30] hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="text-xs text-[#d4af37]">Active</span>}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#d4af37]/15 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-[#0a0512] bg-[#d4af37] rounded"
            >
              Prescription Support
            </button>
            <a
              href="tel:+447351463843"
              className="w-full py-2.5 text-center text-xs font-medium tracking-wide text-[#f5eed3] border border-[#d4af37]/40 rounded hover:bg-[#d4af37]/10"
            >
              Call +44 7351 463843
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
