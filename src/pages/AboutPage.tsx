import React from 'react';
import { PageId } from '../types';
import { GoldCrest } from '../components/GoldCrest';
import { pharmacyImages } from '../assets/images';
import {
  ShieldCheck,
  Heart,
  Award,
  Lock,
  Smile,
  MapPin,
  Clock,
  Phone,
  ArrowRight,
  ExternalLink,
  Compass,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const values = [
    {
      title: 'Trust',
      description: 'Grounded in clinical integrity and transparency, our patients rely on our evidence-based dispensing and authentic healthcare counsel.',
      icon: ShieldCheck,
    },
    {
      title: 'Care',
      description: 'Every interaction is handled with human warmth, active empathy, and deep respect for each patient’s physical and mental wellbeing.',
      icon: Heart,
    },
    {
      title: 'Professionalism',
      description: 'Our certified pharmacists adhere to the rigorous standards set by the General Pharmaceutical Council (GPhC) with ongoing clinical education.',
      icon: Award,
    },
    {
      title: 'Privacy',
      description: 'Confidentiality is sacrosanct. Our bespoke consultation facilities protect your private medical discussions with the highest ethical discretion.',
      icon: Lock,
    },
    {
      title: 'Customer Satisfaction',
      description: 'From minimal waiting times to personalized medication synchronization, our service is tailored around seamless customer convenience.',
      icon: Smile,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-[#140826] to-[#0a0512] border-b border-[#d4af37]/20 text-center overflow-hidden">
        <div 
          aria-hidden="true" 
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3a1b5c]/30 via-transparent to-transparent pointer-events-none" 
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1e0f34] border border-[#d4af37]/30 text-xs text-[#e8cf82]">
            <GoldCrest size={18} />
            <span className="uppercase tracking-[0.2em]">Our Heritage & Vision</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#fbf8ed] tracking-tight leading-tight">
            About Rosewood Pharmacy <br />
            <span className="text-gold-gradient">at Mayfair</span>
          </h1>

          <p className="text-base sm:text-lg text-[#d2c8ba] max-w-2xl mx-auto font-light leading-relaxed">
            A bespoke London pharmacy dedicated to elevating personal health through clinically rigorous oversight, patient-first care, and Mayfair prestige.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 lg:py-24 bg-[#0c0515]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                Our Story
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#fbf8ed] leading-tight">
                A Dedicated Sanctuary for Health in Central London
              </h2>

              <p className="text-[#cfc4b5] text-base leading-relaxed">
                Rosewood Pharmacy at Mayfair was established with a singular vision: to restore personal human connection and clinical excellence to community pharmacy practice. In a landscape often dominated by rushed retail chains, we created an environment where healthcare is delivered with time, discretion, and genuine care.
              </p>

              <p className="text-[#b8ad9f] text-sm sm:text-base leading-relaxed">
                Located on North Row in London’s prestigious W1K postal district, we serve a vibrant and varied clientele—including Mayfair residents, local diplomatic missions, business leaders, and visitors from across the globe. We combine traditional British apothecary hospitality with modern clinical precision.
              </p>

              <div className="pt-2 border-l-2 border-[#d4af37] pl-4 italic text-[#e8cf82] text-sm leading-relaxed">
                “We believe exceptional health begins with feeling heard. When you step into Rosewood Pharmacy, your wellbeing is our sole focus.”
              </div>
            </div>

            {/* Story Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-lg overflow-hidden border border-[#d4af37]/30 shadow-2xl">
                <img
                  src={pharmacyImages.aboutMayfairApothecary}
                  alt="Rosewood Pharmacy Mayfair pharmacist and consultation suite"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0512]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#140826]/90 backdrop-blur-md rounded border border-[#d4af37]/20 text-xs">
                  <p className="font-serif font-semibold text-[#f5eed3] text-sm">Personalised Clinical Counsel</p>
                  <p className="text-[#b8ad9f]">Supervised by registered pharmacists in England & Wales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 lg:py-24 bg-[#0a0512] relative border-t border-[#d4af37]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Guiding Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#fbf8ed]">
              Our Core Values
            </h2>
            <p className="text-sm sm:text-base text-[#b8ad9f] leading-relaxed">
              Every prescription dispensed, consultation delivered, and question answered is underpinned by five steadfast commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-lg bg-[#140826]/60 hover:bg-[#1a0a33] border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all duration-300 shadow-xl group"
                >
                  <div className="w-12 h-12 rounded bg-[#22103a] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-5 group-hover:scale-105 group-hover:bg-[#d4af37] group-hover:text-[#0a0512] transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#f5eed3] mb-3 group-hover:text-[#e8cf82] transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-sm text-[#b8ad9f] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}

            {/* Sixth decorative value card to balance 3x2 grid */}
            <div className="p-8 rounded-lg bg-gradient-to-br from-[#1d0c36] to-[#10061e] border border-[#d4af37]/35 flex flex-col justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold">Quality Commitment</span>
                <h3 className="font-serif text-2xl font-bold text-[#f5eed3] mt-2 mb-3">
                  British Healthcare Standards
                </h3>
                <p className="text-sm text-[#c5baa9] leading-relaxed">
                  We maintain strict adherence to UK clinical governance standards, cold-chain medication management, and patient record confidentiality.
                </p>
              </div>
              <div className="pt-6 border-t border-[#d4af37]/15 flex items-center justify-between text-xs text-[#d4af37]">
                <span>London W1K</span>
                <span>GPhC Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 lg:py-24 bg-[#0e071a] border-t border-[#d4af37]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Patient-First Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#fbf8ed]">
              Our Clinical Approach
            </h2>
            <p className="text-sm sm:text-base text-[#b8ad9f] leading-relaxed">
              We focus on friendly, respectful service, expert professional guidance, and an elevated customer experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-[#140826]/70 border border-[#d4af37]/20 space-y-3">
              <div className="text-xs font-mono text-[#d4af37]">01. LISTENING & DISCOVERY</div>
              <h3 className="font-serif text-xl font-bold text-[#f5eed3]">Unhurried Consultation</h3>
              <p className="text-sm text-[#b8ad9f] leading-relaxed">
                We invite you into our private consultation area to discuss your symptoms, current prescriptions, or health queries without haste or distraction.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#140826]/70 border border-[#d4af37]/20 space-y-3">
              <div className="text-xs font-mono text-[#d4af37]">02. EXPERT GUIDANCE</div>
              <h3 className="font-serif text-xl font-bold text-[#f5eed3]">Evidence-Based Recommendations</h3>
              <p className="text-sm text-[#b8ad9f] leading-relaxed">
                Our pharmacists provide precise advice on medicine interactions, timing, lifestyle synergies, and potential side-effects.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#140826]/70 border border-[#d4af37]/20 space-y-3">
              <div className="text-xs font-mono text-[#d4af37]">03. CONTINUOUS CARE</div>
              <h3 className="font-serif text-xl font-bold text-[#f5eed3]">Ongoing Health Support</h3>
              <p className="text-sm text-[#b8ad9f] leading-relaxed">
                We offer repeat management reminders, dosage reviews, and proactive follow-ups so you never run out of vital medications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mayfair Location Section */}
      <section className="py-20 lg:py-24 bg-[#0a0512] relative border-t border-[#d4af37]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Storefront Image */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-lg overflow-hidden border border-[#d4af37]/30 shadow-2xl">
                <img
                  src={pharmacyImages.mayfairStorefrontExterior}
                  alt="Rosewood Pharmacy storefront at 32 North Row Mayfair"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Location Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                <Compass className="w-4 h-4" />
                <span>Prime Central London Setting</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#fbf8ed] leading-tight">
                Our Mayfair Location
              </h2>

              <p className="text-[#cfc4b5] text-base leading-relaxed">
                Rosewood Pharmacy is positioned on North Row, nestled in the quiet, prestigious enclave between Park Lane and Oxford Street. Our location offers both accessibility and tranquility.
              </p>

              <div className="p-5 rounded-lg bg-[#160a2b] border border-[#d4af37]/25 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#f5eed3] text-base block font-serif">
                      32 N Row, London W1K 6DD, United Kingdom
                    </strong>
                    <span className="text-xs text-[#a09485] mt-1 block">
                      Convenient walking distance from Marble Arch Station (Central line) and Bond Street Station (Elizabeth & Jubilee lines).
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#d4af37]/15 flex items-center justify-between text-xs text-[#d2c8ba]">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                    Mon–Fri 9:00 AM – 6:30 PM
                  </span>
                  <a
                    href="https://maps.google.com/?q=32+N+Row,+London+W1K+6DD,+United+Kingdom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#e8cf82] hover:underline flex items-center gap-1 font-medium"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0a0512] bg-[#d4af37] hover:bg-[#e8cf82] transition-colors rounded shadow"
                >
                  Visit or Contact Dispensary
                </button>
                <a
                  href="tel:+447351463843"
                  className="px-6 py-3 text-xs font-medium tracking-wide text-[#f5eed3] border border-[#d4af37]/50 hover:bg-[#d4af37]/10 transition-colors rounded flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>+44 7351 463843</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#140826] to-[#080310] border-t border-[#d4af37]/20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <GoldCrest size={36} className="mx-auto" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#fbf8ed]">
            Experience Premium Pharmacy Care
          </h2>
          <p className="text-sm sm:text-base text-[#c5baa9] leading-relaxed">
            Discover a healthcare standard crafted around your schedule, discretion, and peace of mind.
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0a0512] bg-[#d4af37] hover:bg-[#e8cf82] active:scale-95 transition-all rounded shadow-lg shadow-[#d4af37]/20 inline-flex items-center gap-2"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
