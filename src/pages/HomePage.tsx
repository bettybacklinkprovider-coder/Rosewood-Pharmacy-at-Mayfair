import React from 'react';
import { PageId } from '../types';
import { GoldCrest } from '../components/GoldCrest';
import {
  FileText,
  MessageCircle,
  HeartHandshake,
  UserCheck,
  RefreshCw,
  Sparkles,
  Shield,
  MapPin,
  Clock,
  Award,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const services = [
    {
      title: 'Prescription Services',
      description: 'Accurate and timely dispensing of NHS and private prescriptions with discreet personal consultations.',
      icon: FileText,
      image: '/src/assets/images/services_prescription_care_1791453445352.jpg',
    },
    {
      title: 'Medication Advice',
      description: 'Expert guidance on proper administration, side-effect management, and medication regimen reviews.',
      icon: MessageCircle,
      image: '/src/assets/images/medication_advice_1791454062329.jpg',
    },
    {
      title: 'Health & Wellness',
      description: 'Curated wellness advice and preventative health guidance tailored to your lifestyle and wellbeing.',
      icon: Sparkles,
      image: '/src/assets/images/health_wellness_1791454075713.jpg',
    },
    {
      title: 'Personalised Pharmacy Care',
      description: 'Bespoke dosage packaging, tailored consultation slots, and direct access to your pharmacist.',
      icon: UserCheck,
      image: '/src/assets/images/personalised_care_1791454087709.jpg',
    },
    {
      title: 'Repeat Prescriptions',
      description: 'Effortless synchronization and reliable preparation for your recurring monthly medication routines.',
      icon: RefreshCw,
      image: '/src/assets/images/repeat_prescriptions_1791454100645.jpg',
    },
    {
      title: 'General Pharmacy Support',
      description: 'Everyday medical supplies, premium healthcare essentials, and professional over-the-counter advice.',
      icon: HeartHandshake,
      image: '/src/assets/images/general_pharmacy_1791454111627.jpg',
    },
  ];

  const whyChooseUs = [
    {
      title: 'Professional & Caring Service',
      description: 'Experienced registered pharmacists committed to attentive listening, empathy, and absolute patient dignity.',
      icon: Award,
      image: '/src/assets/images/caring_pharmacist_service_1791454425577.jpg',
    },
    {
      title: 'Convenient Mayfair Location',
      description: 'Conveniently situated on North Row, moments from Oxford Street, Marble Arch, and Bond Street.',
      icon: MapPin,
      image: '/src/assets/images/mayfair_storefront_exterior_1791453457762.jpg',
    },
    {
      title: 'Personalised Attention',
      description: 'We take the time to know each client personally, ensuring your treatment and preferences are catered to.',
      icon: UserCheck,
      image: '/src/assets/images/personalised_attention_1791454446793.jpg',
    },
    {
      title: 'Trusted Pharmacy Support',
      description: 'A discreet, dependable healthcare haven for local residents, international travelers, and Mayfair professionals.',
      icon: Shield,
      image: '/src/assets/images/trusted_pharmacy_support_1791454463314.jpg',
    },
    {
      title: 'Modern Customer Experience',
      description: 'Seamless telephone coordination, fast-track collection, and digital repeat requests without queue delays.',
      icon: Clock,
      image: '/src/assets/images/modern_experience_1791454477959.jpg',
    },
  ];

  return (
    <div className="w-full">
      {/* SECTION 1: Luxury Hero Section */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background image with deep purple overlay scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_mayfair_pharmacy_1791453402027.jpg"
            alt="Rosewood Pharmacy Mayfair luxury dispensary interior"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0512] via-[#0e061b]/85 to-[#0a0512]/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0a0512]/60 to-[#0a0512]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Elegant gold decorative elements */}
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full bg-[#1e0f34]/80 border border-[#d4af37]/30 shadow-lg backdrop-blur-sm">
            <GoldCrest size={20} />
            <span className="text-xs uppercase tracking-[0.25em] text-[#e8cf82] font-medium">
              Mayfair’s Premier Healthcare Destination
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#fbf8ed] leading-[1.1] mb-6 text-balance">
            Exceptional Pharmacy Care <br className="hidden sm:inline" />
            <span className="text-gold-gradient">in the Heart of Mayfair</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#dcd3c5] font-light leading-relaxed mb-10">
            Dedicated to clinical excellence, discreet consultations, and tailored prescription solutions for Mayfair residents, international visitors, and discerning clients.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <button
              onClick={() => {
                onNavigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0a0512] bg-gradient-to-r from-[#e8cf82] via-[#d4af37] to-[#c59b27] hover:brightness-110 active:scale-95 transition-all rounded shadow-lg shadow-[#d4af37]/20 flex items-center justify-center gap-2 group"
            >
              <span>Explore Our Services</span>
              <ChevronRight className="w-4 h-4 text-[#0a0512] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-medium tracking-wide text-[#fbf8ed] border border-[#d4af37]/50 hover:border-[#d4af37] hover:bg-[#d4af37]/10 active:scale-95 transition-all rounded backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 text-[#d4af37]" />
            </button>
          </div>

          {/* Quick trust metrics */}
          <div className="mt-16 pt-8 border-t border-[#d4af37]/15 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
            <div>
              <p className="font-serif text-lg sm:text-xl font-semibold text-[#f5eed3]">North Row, Mayfair</p>
              <p className="text-xs text-[#a89b8d]">Centrally located in W1K</p>
            </div>
            <div>
              <p className="font-serif text-lg sm:text-xl font-semibold text-[#f5eed3]">GPhC Registered</p>
              <p className="text-xs text-[#a89b8d]">Certified UK Dispensary</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="font-serif text-lg sm:text-xl font-semibold text-[#f5eed3]">Private Consultations</p>
              <p className="text-xs text-[#a89b8d]">Discreet, confidential suite</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: About Rosewood Pharmacy */}
      <section className="py-20 lg:py-28 bg-[#0d0617] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image side */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative rounded-lg overflow-hidden border border-[#d4af37]/30 shadow-2xl group">
                <img
                  src="/src/assets/images/about_mayfair_apothecary_1791453424711.jpg"
                  alt="Pharmacist consultation at Rosewood Pharmacy Mayfair"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0512]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#140826]/90 backdrop-blur-md rounded border border-[#d4af37]/25 text-xs text-[#f5eed3]">
                  <p className="font-serif font-semibold text-sm text-[#e8cf82]">Private Consultation Suite</p>
                  <p className="text-[#c5baa9] text-[11px] mt-0.5">Compliant, confidential health guidance at 32 N Row</p>
                </div>
              </div>
              {/* Subtle gold decorative background framing element */}
              <div 
                aria-hidden="true" 
                className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#d4af37]/40 pointer-events-none -z-10" 
              />
            </div>

            {/* Content side */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#d4af37] font-medium">
                <span>About Our Dispensary</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#fbf8ed] leading-tight">
                Refined Healthcare Built on <span className="text-gold-gradient">Trust & Discretion</span>
              </h2>

              <p className="text-[#cfc4b5] text-base sm:text-lg leading-relaxed">
                Situated at <strong>32 North Row</strong> in London’s iconic Mayfair, Rosewood Pharmacy provides a bespoke alternative to impersonal high-street dispensaries. We understand that health is deeply personal, requiring empathy, clinical precision, and unhurried consultation.
              </p>

              <p className="text-[#a89b8d] text-sm sm:text-base leading-relaxed">
                Whether you require immediate private prescription fulfillment, advice on managing complex regimens, or curated wellbeing products, our registered pharmacists provide undivided attention and reliable care.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#e8e0d5]">
                <div className="flex items-center gap-3 p-3 bg-[#170a2a]/60 rounded border border-[#d4af37]/15">
                  <Shield className="w-5 h-5 text-[#d4af37] shrink-0" />
                  <span>Confidential private consultation</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#170a2a]/60 rounded border border-[#d4af37]/15">
                  <Clock className="w-5 h-5 text-[#d4af37] shrink-0" />
                  <span>Prompt prescription fulfillment</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#f5eed3] border border-[#d4af37]/60 hover:bg-[#d4af37] hover:text-[#0a0512] active:scale-95 transition-all rounded inline-flex items-center gap-2 group"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Pharmacy Services */}
      <section className="py-20 lg:py-28 bg-[#0a0512] relative overflow-hidden">
        {/* Decorative backdrop light */}
        <div 
          aria-hidden="true" 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-900/10 rounded-full blur-3xl pointer-events-none" 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Our Clinical Expertise
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#fbf8ed]">
              Distinguished Pharmacy Services
            </h2>
            <p className="text-sm sm:text-base text-[#b8ad9f] leading-relaxed">
              We offer comprehensive healthcare services tailored to meet individual patient needs with prompt attention and clinical professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-xl bg-[#140826]/75 hover:bg-[#1b0a33] border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all duration-300 shadow-xl hover:shadow-[#d4af37]/15 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    {/* Service Image banner */}
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-[#1e0f34]">
                      <img
                        src={service.image}
                        alt={service.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#140826] via-[#140826]/30 to-transparent" />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#0a0512]/80 backdrop-blur-md border border-[#d4af37]/30 text-[10px] font-mono tracking-wider text-[#e8cf82]">
                        0{index + 1}
                      </div>
                      <div className="absolute -bottom-4 left-5 w-11 h-11 rounded-lg bg-[#24103d] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shadow-lg group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-[#0a0512] transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="p-6 pt-7">
                      <h3 className="font-serif text-xl font-bold text-[#f5eed3] mb-2.5 group-hover:text-[#e8cf82] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#b8ad9f] leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-3 border-t border-[#d4af37]/15 flex items-center justify-between text-xs">
                    <button
                      onClick={() => {
                        onNavigate('services');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-[#d4af37] group-hover:text-white font-medium flex items-center gap-1.5 transition-colors"
                    >
                      <span>Service Details</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={onOpenConsultation}
                      className="text-[#cfc4b5] hover:text-[#e8cf82] font-medium transition-colors"
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => {
                onNavigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3 text-xs font-semibold uppercase tracking-wider text-[#0a0512] bg-[#d4af37] hover:bg-[#e8cf82] active:scale-95 transition-all rounded shadow-md"
            >
              View All Services in Detail
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: Why Choose Rosewood Pharmacy */}
      <section className="py-20 lg:py-28 bg-[#0e071a] relative border-t border-[#d4af37]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              The Mayfair Standard
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#fbf8ed]">
              Why Choose Rosewood Pharmacy
            </h2>
            <p className="text-sm sm:text-base text-[#b8ad9f] leading-relaxed">
              Serving our community with the highest standard of pharmaceutical care, clinical diligence, and modern convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group rounded-xl bg-[#140924]/75 border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-[#d4af37]/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-44 w-full overflow-hidden bg-[#1e0f34]">
                      <img
                        src={item.image}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#140924] via-[#140924]/30 to-transparent" />
                      <div className="absolute bottom-3 left-4 w-9 h-9 rounded-lg bg-[#200d38]/90 backdrop-blur-md border border-[#d4af37]/35 flex items-center justify-center text-[#d4af37] shadow-md group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-[#0a0512] transition-all">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="p-5 sm:p-6 pt-4">
                      <h3 className="font-serif text-lg font-bold text-[#f5eed3] group-hover:text-[#e8cf82] transition-colors mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#b8ad9f] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* 6th Card: Immediate Support */}
            <div className="group rounded-xl bg-gradient-to-br from-[#200e39] to-[#120722] border border-[#d4af37]/40 overflow-hidden shadow-lg flex flex-col justify-between">
              <div>
                <div className="relative h-44 w-full overflow-hidden bg-[#1e0f34]">
                  <img
                    src="/src/assets/images/direct_pharmacist_call_1791454490614.jpg"
                    alt="Direct access pharmacist phone support"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#200e39] via-[#200e39]/40 to-transparent" />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#0a0512]/80 backdrop-blur-md border border-[#d4af37]/40 text-[10px] uppercase tracking-widest text-[#e8cf82] font-semibold">
                    Direct Access
                  </div>
                  <div className="absolute bottom-3 left-4 w-9 h-9 rounded-lg bg-[#d4af37] flex items-center justify-center text-[#0a0512] shadow-md">
                    <Phone className="w-4 h-4" />
                  </div>
                </div>
                <div className="p-5 sm:p-6 pt-4">
                  <h3 className="font-serif text-lg font-bold text-[#f5eed3] mb-2">
                    Speak Directly with our Pharmacist
                  </h3>
                  <p className="text-sm text-[#c5baa9] leading-relaxed">
                    Have an urgent question regarding your medication or dosage? Call our Mayfair dispensary during opening hours.
                  </p>
                </div>
              </div>
              <div className="p-5 sm:p-6 pt-0">
                <a
                  href="tel:+447351463843"
                  className="w-full py-2.5 px-4 text-xs font-semibold text-[#0a0512] bg-[#d4af37] hover:bg-[#e8cf82] active:scale-95 transition-all rounded text-center uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>+44 7351 463843</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Premium CTA Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-[#140826] via-[#1a0b32] to-[#0a0512] relative overflow-hidden border-t border-[#d4af37]/25 text-center">
        {/* Subtle gold accent light */}
        <div 
          aria-hidden="true" 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-24 bg-[#d4af37]/10 blur-2xl pointer-events-none" 
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <GoldCrest size={40} className="mx-auto" />

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#fbf8ed]">
            Your Health Deserves <span className="text-gold-gradient">Exceptional Care.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#d2c8ba] max-w-2xl mx-auto leading-relaxed">
            Visit us at 32 North Row in Mayfair, or reach out to our team today for dedicated prescription guidance and bespoke health consultations.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0a0512] bg-gradient-to-r from-[#e8cf82] via-[#d4af37] to-[#c59b27] hover:brightness-110 active:scale-95 transition-all rounded shadow-lg shadow-[#d4af37]/20"
            >
              Contact Us
            </button>
            <a
              href="tel:+447351463843"
              className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-medium tracking-wide text-[#fbf8ed] border border-[#d4af37]/60 hover:bg-[#d4af37]/10 active:scale-95 transition-all rounded flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span>Call the Pharmacy (+44 7351 463843)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
